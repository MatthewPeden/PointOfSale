import React, { useLayoutEffect, useState } from "react";
import { useEffect } from 'react';

declare var ctx: any;

function getElementAtPosistion(x: number, y: number, elements: any[]) {
    return elements.find(element => isWithinElement(x, y, element));
}

function isWithinElement(x: number, y: number, element: any) {
    const { x1, x2, y1, y2 } = element;
    const minX = Math.min(x1, x2 + x1);
    const maxX = Math.max(x1, x2 + x1);
    const minY = Math.min(y1, y2 + y1);
    const maxY = Math.max(y1, y2 + y1);
    return x >= minX && x <= maxX && y >= minY && y <= maxY;
}

const DrawTest = () => {

    const [elements, setElements] = useState([]);
    const [action, setAction] = useState("none");
    const [tool, setTool] = useState("table");
    const [selectedElement, setSelectedElemet] = useState(null);

    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
        const handleMouseMove = (event) => {
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

    const updateElement = (id: number, x1: number, y1: number, x2: number, y2: number, type: string) => {
        const updatedElement = createElement(id, x1, y1, x2, y2, type);

        const elementsCopy = [...elements];
        elementsCopy[id] = updatedElement;
        setElements(elementsCopy);
    }

    const handleMouseDown = (event) => {
        const { clientX, clientY } = event;
        if (tool === 'selection') {
            const element = getElementAtPosistion(clientX, clientY, elements);
            if (element) {
                const offsetX = clientX - element.x1;
                const offsetY = clientY - element.y1;
                setSelectedElemet({ ...element, offsetX, offsetY });
                setAction('moving');
            }
        } else {
            const id = elements.length;
            const element = createElement(id, clientX, clientY, 0, 0, tool);
            setElements(prevState => [...prevState, element]);

            setAction("drawing");
        }
    };

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        if (action === "drawing") {
            const index = elements.length - 1;
            const { x1, y1 } = elements[index];
            updateElement(index, x1, y1, clientX - x1, clientY - y1, tool);
        } else if (action === 'moving') {
            const { id, x1, y1, x2, y2, tool, offsetX, offsetY } = selectedElement;
            const width = x2;
            const height = y2;
            const newX1 = clientX - offsetX;
            const newY1 = clientY - offsetY;
            updateElement(id, newX1, newY1, width, height, tool);
        }
    };

    const handleMouseUp = (event) => {
        setAction("none");
        setSelectedElemet(null);
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