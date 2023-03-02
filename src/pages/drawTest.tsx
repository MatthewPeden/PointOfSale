import React, { useLayoutEffect, useState } from "react";

declare var ctx: any;

const DrawTest = () => {

    const[elements, setElements] = useState([]);
    const [drawing, setDrawing] = useState(false);

    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        globalThis.ctx = canvas.getContext("2d");
        ctx.clearRect(0 ,0 , canvas.width, canvas.height)

        ctx.fillStyle = "black";
        
        
        elements.forEach(element => ctx.strokeRect(element.x1, element.y1, element.x2, element.y2))
    }, [elements]);

    function createElement(x1:number, y1:number, x2:number, y2:number) {
        const context = ctx;
        const element = context.fillRect(x1, y1, x2, y2);
        return {x1, y1, x2, y2, element};
    }

    const handleMouseDown = (event) => {
        setDrawing(true);

        const {clientX, clientY} = event;

        const element = createElement(clientX, clientY, 0, 0);
        setElements(prevState => [...prevState, element]);
    };

    const handleMouseMove = (event) => {
        if(!drawing) return;

        const {clientX, clientY} = event;
        const index = elements.length - 1;
        const {x1, y1} = elements[index];
        const updatedElement = createElement(x1, y1, clientX - x1, clientY - y1);

        const elementsCopy = [...elements];
        elementsCopy[index] = updatedElement;
        setElements(elementsCopy);
    };

    const handleMouseUp = (event) => {
        setDrawing(false);
    };

  return (
    <canvas
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown = {handleMouseDown}
        onMouseMove = {handleMouseMove}
        onMouseUp = {handleMouseUp}
    >
        Canvas
    </canvas>
    );
};

export default DrawTest;