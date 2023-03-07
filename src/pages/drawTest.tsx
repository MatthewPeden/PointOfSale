import React, { useLayoutEffect, useState } from "react";

declare var ctx: any;

const DrawTest = () => {

    const [elements, setElements] = useState([]);
    const [drawing, setDrawing] = useState(false);
    const [elementType, setElementType] = useState("table");

    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        globalThis.ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = "black";


        elements.forEach(element => element.type === 'table' ? ctx.fillRect(element.x1, element.y1, element.x2, element.y2) : ctx.strokeRect(element.x1, element.y1, element.x2, element.y2))
    }, [elements]);

    function createElement(x1: number, y1: number, x2: number, y2: number, type: string) {
        const context = ctx;
        const roughElement = type === 'table' ? context.fillRect(x1, y1, x2, y2) : context.strokeRect(x1, y1, x2, y2);
        return { x1, y1, x2, y2, roughElement, type };
    }

    const handleMouseDown = (event) => {
        setDrawing(true);

        const { clientX, clientY } = event;

        const element = createElement(clientX, clientY, 0, 0, elementType);
        setElements(prevState => [...prevState, element]);
    };

    const handleMouseMove = (event) => {
        if (!drawing) return;

        const { clientX, clientY } = event;
        const index = elements.length - 1;
        const { x1, y1 } = elements[index];
        const updatedElement = createElement(x1, y1, clientX - x1, clientY - y1, elementType);

        const elementsCopy = [...elements];
        elementsCopy[index] = updatedElement;
        setElements(elementsCopy);
    };

    const handleMouseUp = (event) => {
        setDrawing(false);
    };

    return (
        <div>
            <div style={{ position: "fixed" }}>
                <input
                    type="radio"
                    id="table"
                    checked = {elementType === 'table'}
                    onChange={() => setElementType('table')}
                />
                <label htmlFor="table">Table</label>
                <input
                    type="radio"
                    id="chair"
                    checked = {elementType === 'chair'}
                    onChange={() => setElementType('chair')}
                />
                <label htmlFor="chair">Chair</label>
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