import React, { useLayoutEffect, useState } from "react";
import { useEffect } from 'react';
import styled from "styled-components";

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

function linkElements(parent: any, child: any) {
    // const parentCopy = { ...parent };
    // const childCopy = { ...child };

    parent.children.push(child);
    child.parent = parent;

    return { parent, child };
}

const DrawTest = () => {

    const [elements, setElements] = useState([]);
    const [action, setAction] = useState("none");
    const [tool, setTool] = useState("table");
    const [selectedElement, setSelectedElement] = useState(null);
    const [copiedElement, setCopiedElement] = useState(null);
    const [elementToLink, setElementToLink] = useState(null);

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

        //draw lines between parents and children
        elements.forEach(element => {
            if (element.parent) {
                ctx.beginPath();
                ctx.moveTo(element.parent.x1 + element.parent.x2 / 2, element.parent.y1 + element.parent.y2 / 2);
                ctx.lineTo(element.x1 + element.x2 / 2, element.y1 + element.y2 / 2);
                ctx.stroke();
            }
        });

        elements.forEach(element => element.tool === 'table' ? ctx.fillRect(element.x1, element.y1, element.x2, element.y2) : ctx.strokeRect(element.x1, element.y1, element.x2, element.y2))
    }, [elements]);

    function createElement(id: number, x1: number, y1: number, x2: number, y2: number, tool: string, children: any[] = [], parent: any = null) {
        const context = ctx;
        const roughElement = tool === 'table' ? context.fillRect(x1, y1, x2, y2) : context.strokeRect(x1, y1, x2, y2);
        return { id, x1, y1, x2, y2, roughElement, tool, children, parent };
    }

    const updateElement = (id: number, x1: number, y1: number, x2: number, y2: number, tool: string, children: any[], parent: any) => {
        const updatedElement = createElement(id, x1, y1, x2, y2, tool, children, parent);

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
        }
        else if (tool === 'copy') {
            const element = getElementAtPosistion(clientX, clientY, elements);
            if (element) {
                setCopiedElement(element);
                setSelectedElement(element);
            }
        }
        else if (tool === 'paste') {
            const element = copiedElement;
            if (element) {
                const id = elements.length;
                const newElement = createElement(id, clientX - (element.x2 / 2), clientY - (element.y2 / 2), element.x2, element.y2, element.tool);
                setElements(prevState => [...prevState, newElement]);
                setSelectedElement(newElement);
            }
        }
        else if (tool === 'delete') {
            const element = getElementAtPosistion(clientX, clientY, elements);
            if (element) {
                const elementsCopy = [...elements];
                elementsCopy.splice(element.id, 1);
                elementsCopy.forEach((element: { id: number; }, index: number) => {
                    element.id = index;
                });
                setElements(elementsCopy);
            }
        }
        else if (tool === 'link') {
            const element = getElementAtPosistion(clientX, clientY, elements);
            if (element) {
                //only link if the first element is a table
                if (elementToLink && elementToLink.tool === 'table') {
                    const { parent, child } = linkElements(elementToLink, element);
                    updateElement(parent.id, parent.x1, parent.y1, parent.x2, parent.y2, parent.tool, parent.children, parent.parent);
                    updateElement(child.id, child.x1, child.y1, child.x2, child.y2, child.tool, child.children, child.parent);
                    setSelectedElement(null);
                    setElementToLink(null);
                }
                else {
                    setSelectedElement(element);
                    setElementToLink(element);
                }
            }
        }
        else {
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
        else if (tool === "copy") {
            event.target.style.cursor = getElementAtPosistion(clientX, clientY, elements)
                ? "cell"
                : "default";
        }
        else if (tool === "paste") {
            event.target.style.cursor = "crosshair";
        }
        else if (tool === "delete") {
            event.target.style.cursor = getElementAtPosistion(clientX, clientY, elements)
                ? "not-allowed"
                : "default";
        }

        if (action === "drawing") {
            const index = elements.length - 1;
            const { x1, y1 } = elements[index];
            updateElement(index, x1, y1, clientX - x1, clientY - y1, tool);
        } else if (action === 'moving') {
            const { id, x2, y2, tool, offsetX, offsetY, children, parent } = selectedElement;
            const width = x2;
            const height = y2;
            const newX1 = clientX - offsetX;
            const newY1 = clientY - offsetY;
            updateElement(id, newX1, newY1, width, height, tool, children, parent);
        } else if (action === 'resize') {
            const { id, tool, position, ...coordinates } = selectedElement;
            const { x1, y1, x2, y2 } = resizedCoordinates(clientX, clientY, position, coordinates);
            updateElement(id, x1, y1, x2, y2, tool);
        }
    };

    const handleMouseUp = (event: any) => {

        if (action === 'drawing' || action === 'resize') {
            const index = selectedElement.id;
            const { id, tool } = elements[index];
            const { x1, y1, x2, y2 } = adjustElementCoordinates(elements[index]);
            updateElement(id, x1, y1, x2, y2, tool);
        }
        setAction("none");
        setSelectedElement(null);
    };

    const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #bda0d9;
    color: white;
    `


    const NavbarLink = styled.a`
    color: white;
    text-decoration: none;
    margin-right: 20px;
    padding: 10px;
    `

    return (
        <div>
            <Navbar>
                <NavbarLink href="/">Home</NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Log In</NavbarLink>
                <NavbarLink href="#">Log Out</NavbarLink>
                <div style={{ padding: "10px" }}>
                    <img
                        alt="Gatsby G Logo"
                        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
                    />
                </div>
            </Navbar>
            <div style={{ position: "fixed", marginTop: "60px" }}>
                <input
                    type="radio"
                    id="selection"
                    checked={tool === 'selection'}
                    onChange={() => setTool('selection')}
                />
                <label htmlFor="selection">Selection</label>
                <input
                    type="radio"
                    id="copy"
                    checked={tool === 'copy'}
                    onChange={() => setTool('copy')}
                />
                <label htmlFor="copy">Copy</label>
                <input
                    type="radio"
                    id="paste"
                    checked={tool === 'paste'}
                    onChange={() => setTool('paste')}
                />
                <label htmlFor="paste">Paste</label>
                <input
                    type="radio"
                    id="delete"
                    checked={tool === 'delete'}
                    onChange={() => setTool('delete')}
                />
                <label htmlFor="delete">Delete</label>
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
                <input
                    type="radio"
                    id="link"
                    checked={tool === 'link'}
                    onChange={() => setTool('link')}
                />
                <label htmlFor="link">Link</label>
                <input
                    type="radio"
                    id="order"
                    checked={tool === 'order'}
                    onChange={() => setTool('order')}
                />
                <label htmlFor="order">Order</label>

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