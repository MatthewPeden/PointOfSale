import React, { useLayoutEffect, useState } from "react";
import { useEffect } from 'react';

declare var ctx: any;

function getElementAtPosistion(x: number, y: number, elements: any[]) {
    return elements.map(element => ({ ...element, position: positionWithinElement(x, y, element) }))
        .find(element => element.position !== null);
}

function positionWithinElement(x: number, y: number, element: any) {
    const { x1, x2, y1, y2 } = element;
    const topLeft = nearPoint(x, y, x1, y1, "tl");
    const topRight = nearPoint(x, y, x1 + x2, y1, "tr");
    const bottomLeft = nearPoint(x, y, x1, y1 + y2, "bl");
    const bottomRight = nearPoint(x, y, x1 + x2, y1 + y2, "br");
    const inside = x >= x1 && x <= x1 + x2 && y >= y1 && y <= y1 + y2 ? "inside" : null;

    return topLeft || topRight || bottomLeft || bottomRight || inside;
}

const nearPoint = (x: number, y: number, x1: number, y1: number, name: string) => {
    return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5 ? name : null;
}

const cursorForPosition = (position: string) => {
    switch (position) {
        case "tl":
        case "br":
            return "nwse-resize";
        case "tr":
        case "bl":
            return "nesw-resize";
        case "inside":
            return "move";
        default:
            return "default";
    }
}

const resizedCoordinates = (clientX: any, clientY: any, position: any, coordinates: any) => {
    const { x1, y1, x2, y2 } = coordinates;
    switch (position) {
        case "tl":
            return { x1: clientX, y1: clientY, x2: x1 + x2 - clientX, y2: y1 + y2 - clientY };
        case "tr":
            return { x1, y1: clientY, x2: clientX - x1, y2: y1 + y2 - clientY };
        case "bl":
            return { x1: clientX, y1, x2: x1 + x2 - clientX, y2: clientY - y1 };
        case "br":
            return { x1, y1, x2: clientX - x1, y2: clientY - y1 };
        default:
            return { x1, y1, x2, y2 };
    }
}

const adjustElementCoordinates = (element: any) => {
    const { x1, y1, x2, y2 } = element;
    if (x2 >= 0 && y2 >= 0) return { x1, y1, x2, y2 };
    else if (x2 < 0 && y2 >= 0) return { x1: x1 + x2, y1, x2: Math.abs(x2), y2 };
    else if (x2 >= 0 && y2 < 0) return { x1, y1: y1 + y2, x2, y2: Math.abs(y2) };
    else return { x1: x1 + x2, y1: y1 + y2, x2: Math.abs(x2), y2: Math.abs(y2) };
}

const DrawTest = () => {

    const [elements, setElements] = useState([]);
    const [action, setAction] = useState("none");
    const [tool, setTool] = useState("table");
    const [selectedElement, setSelectedElement] = useState(null);

    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
        const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        globalThis.ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = "black";


        elements.forEach(element => element.tool === 'table' ? ctx.fillRect(element.x1, element.y1, element.x2, element.y2) : ctx.strokeRect(element.x1, element.y1, element.x2, element.y2))
    }, [elements]);

    function createElement(id: number, x1: number, y1: number, x2: number, y2: number, tool: string) {
        const context = ctx;
        const roughElement = tool === 'table' ? context.fillRect(x1, y1, x2, y2) : context.strokeRect(x1, y1, x2, y2);
        return { id, x1, y1, x2, y2, roughElement, tool };
    }

    const updateElement = (id: number, x1: number, y1: number, x2: number, y2: number, tool: string) => {
        const updatedElement = createElement(id, x1, y1, x2, y2, tool);

        const elementsCopy = [...elements];
        elementsCopy[id] = updatedElement;
        setElements(elementsCopy);
    }

    const handleMouseDown = (event: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = event;
        if (tool === 'selection') {
            const element = getElementAtPosistion(clientX, clientY, elements);
            if (element) {
                const offsetX = clientX - element.x1;
                const offsetY = clientY - element.y1;
                setSelectedElement({ ...element, offsetX, offsetY });

                if (element.position === "inside") {
                    setAction("moving");
                } else {
                    setAction("resize");
                }
            }
        } else {
            const id = elements.length;
            const element = createElement(id, clientX, clientY, 0, 0, tool);
            setElements(prevState => [...prevState, element]);
            setSelectedElement(element);

            setAction("drawing");
        }
    };

    const handleMouseMove = (event: { target?: any; clientX?: any; clientY?: any; }) => {
        const { clientX, clientY } = event;

        if (tool === "selection") {
            const element = getElementAtPosistion(clientX, clientY, elements);

            event.target.style.cursor = element
                ? cursorForPosition(element.position)
                : "default";
        }

        if (action === "drawing") {
            const index = elements.length - 1;
            const { x1, y1 } = elements[index];
            updateElement(index, x1, y1, clientX - x1, clientY - y1, tool);
        } else if (action === 'moving') {
            const { id, x2, y2, tool, offsetX, offsetY } = selectedElement;
            const width = x2;
            const height = y2;
            const newX1 = clientX - offsetX;
            const newY1 = clientY - offsetY;
            updateElement(id, newX1, newY1, width, height, tool);
        } else if (action === 'resize') {
            const { id, tool, position, ...coordinates } = selectedElement;
            const { x1, y1, x2, y2 } = resizedCoordinates(clientX, clientY, position, coordinates);
            updateElement(id, x1, y1, x2, y2, tool);
        }
    };

    const handleMouseUp = (event: any) => {
        const index = selectedElement.id;
        const { id, tool } = elements[index];

        if (action === 'drawing' || action === 'resize') {
            const { x1, y1, x2, y2 } = adjustElementCoordinates(elements[index]);
            updateElement(id, x1, y1, x2, y2, tool);
        }
        setAction("none");
        setSelectedElement(null);
    };

    return (
        <div>
            <div style={{ position: "fixed" }}>
                <input
                    type="radio"
                    id="selection"
                    checked={tool === 'selection'}
                    onChange={() => setTool('selection')}
                />
                <label htmlFor="selection">Selection</label>
                <input
                    type="radio"
                    id="table"
                    checked={tool === 'table'}
                    onChange={() => setTool('table')}
                />
                <label htmlFor="table">Table</label>
                <input
                    type="radio"
                    id="chair"
                    checked={tool === 'chair'}
                    onChange={() => setTool('chair')}
                />
                <label htmlFor="chair">Chair</label>

                The mouse is at position{' '}
                <b>
                    ({mousePos.x}, {mousePos.y})
                </b>
            </div>
            <canvas
                id="canvas"
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                Canvas
            </canvas>
        </div>
    );
};

export default DrawTest;