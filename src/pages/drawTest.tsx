import React, { useLayoutEffect, useState } from "react";
import { useEffect } from 'react';
import styled from "styled-components";
import { Table, Chair, SceneObject, Item } from "../classes/Table";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NumericFormat } from "react-number-format";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { ItemTab } from "@/components/ItemTab";

declare var ctx: any;

function getElementAtPosistion(x: number, y: number, elements: any[]) {
    const foundElement = elements.find(element => {
        const position = positionWithinElement(x, y, element);
        if (position !== null) {
            element.position = position; // modify the original object
            return true; // return the modified object
        }
        return false;
    });
    return foundElement || null; // return null if no element is found
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

function linkElements(parent: Table, child: Chair) {
    // const parentCopy = { ...parent };
    // const childCopy = { ...child };

    parent.seats.push(child);
    child.table = parent;

    return { parent, child };
}

const DrawTest = () => {

    const [elements, setElements] = useState<SceneObject[]>([]);
    const [action, setAction] = useState("none");
    const [tool, setTool] = useState("table");
    const [selectedElement, setSelectedElement] = useState<SceneObject | null>(null);
    const [copiedElement, setCopiedElement] = useState<SceneObject | null>(null);
    const [elementToLink, setElementToLink] = useState(null);
    const [offsets, setOffsets] = useState({ x: 0, y: 0 });
    const [chairSelected, setChairSelected] = useState(false);
    const [selectedChair, setSelectedChair] = useState<Chair | null>(null);
    const [tableSelected, setTableSelected] = useState(false);
    const [selectedTable, setSelectedTable] = useState<Table | null>(null);
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
            if (element instanceof Chair && element.table) {
                ctx.beginPath();
                ctx.moveTo(element.table.x1 + element.table.x2 / 2, element.table.y1 + element.table.y2 / 2);
                ctx.lineTo(element.x1 + element.x2 / 2, element.y1 + element.y2 / 2);
                ctx.stroke();
            }
        });

        //elements.forEach(element => element.tool === 'table' ? ctx.fillRect(element.x1, element.y1, element.x2, element.y2) : ctx.strokeRect(element.x1, element.y1, element.x2, element.y2))
        elements.forEach(function (element) {
            if (element instanceof Table) {
                if (element.selected) {
                    ctx.fillStyle = "red";
                } else {
                    ctx.fillStyle = "black";
                }
                ctx.fillRect(element.x1, element.y1, element.x2, element.y2);
            } else {
                if (element.selected) {
                    ctx.fillStyle = "red";
                    ctx.fillRect(element.x1, element.y1, element.x2, element.y2);
                } else {
                    ctx.fillStyle = "black";
                }
                ctx.strokeRect(element.x1, element.y1, element.x2, element.y2);
            }
        });
    });

    function ItemButton(props: any) {
        return (
            <button className="grid-item" style={{ border: "2px solid black", borderRadius: "20px", textAlign: "center" }} onClick={() => addItem(props)}>
                {props.name} | ${props.price}

            </button>
        );
    }

    function TabOption(props: any) {
        return (
            <div style={{ margin: "auto", textAlign: "center", position: "sticky", top: "0", backgroundColor: "white", border: "2px solid black", alignItems: "center", display: "flex" }}>
                <h3>{props.name}</h3>
            </div>
        );
    }

    function addItem(item: any) {
        if (selectedChair) {
            selectedChair.items.push(new Item(item.name, item.price));
        }
    }

    function selectTable(table: Table) {
        table.selected = true;
        setTableSelected(true);
        setSelectedTable(table);
    }

    function deselectTable() {
        if (!selectedTable) return;
        selectedTable.selected = false;
        setTableSelected(false);
        setSelectedTable(null);
    }

    function selectChair(chair: Chair) {
        chair.selected = true;
        setChairSelected(true);
        setSelectedChair(chair);
    }

    function deselectChair() {
        if (!selectedChair) return;
        selectedChair.selected = false;
        setChairSelected(false);
        setSelectedChair(null);
    }

    function createElement(element: Table | Chair) {
        const context = ctx;
        const roughElement = element instanceof Table ? context.fillRect(element.x1, element.y1, element.x2, element.y2) : context.strokeRect(element.x1, element.y1, element.x2, element.y2);
        return { element, roughElement };
    }

    const updateElement = (element: Table | Chair) => {
        const updatedElement = createElement(element);

        const elementsCopy = [...elements];
        elementsCopy[updatedElement.element.id] = updatedElement.element;
        setElements(elementsCopy);
    }

    const handleMouseDown = (event: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = event;
        if (tool === 'selection') {
            const element = getElementAtPosistion(clientX, clientY, elements);
            if (element) {
                const offsetX = clientX - element.x1;
                const offsetY = clientY - element.y1;
                setSelectedElement(element);
                setOffsets({ x: offsetX, y: offsetY });

                if (element.position === "inside") {
                    setAction("moving");
                } else {
                    setAction("resize");
                }
            }
        }
        else if (tool === 'order') {
            const element = getElementAtPosistion(clientX, clientY, elements);
            if (element) {
                if (element instanceof Chair) {
                    deselectChair();
                    deselectTable();
                    selectChair(element);
                }
                else if (element instanceof Table) {
                    if (selectedChair) {
                        deselectChair();
                    }
                    deselectTable();
                    selectTable(element);

                }
                else {
                    deselectChair();
                    deselectTable();
                }
            }
            else {
                deselectChair();
                deselectTable();
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
            if(!element) return;
            if (element instanceof Table) {
                const id = elements.length;
                const newElement = createElement(new Table(id, clientX - (element.x2 / 2), clientY - (element.y2 / 2), element.x2, element.y2));
                setElements(prevState => [...prevState, newElement.element]);
                setSelectedElement(newElement.element);
            }
            else if (element instanceof Chair) {
                const id = elements.length;
                const newElement = createElement(new Chair(id, clientX - (element.x2 / 2), clientY - (element.y2 / 2), element.x2, element.y2));
                setElements(prevState => [...prevState, newElement.element]);
                setSelectedElement(newElement.element);
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
                    // updateElement(parent.id, parent.x1, parent.y1, parent.x2, parent.y2, parent.tool, parent.children, parent.parent);
                    // updateElement(child.id, child.x1, child.y1, child.x2, child.y2, child.tool, child.children, child.parent);
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
            const newElement = tool === "table" ? new Table(id, clientX, clientY, 0, 0) : new Chair(id, clientX, clientY, 0, 0);
            const element = createElement(newElement);
            setElements(prevState => [...prevState, element.element]);
            setSelectedElement(element.element);

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
            const updatedElement2 = selectedElement;
            if (updatedElement2) {
                updatedElement2.x2 = clientX - x1;
                updatedElement2.y2 = clientY - y1;
            }
        } else if (action === 'moving') {
            //const { id, x2, y2, tool, offsetX, offsetY, children, parent } = selectedElement;
            if (!selectedElement) return;
            const width = selectedElement.x2;
            const height = selectedElement.y2;
            const newX1 = clientX - offsets.x;
            const newY1 = clientY - offsets.y;
            selectedElement.x1 = newX1;
            selectedElement.y1 = newY1;
            selectedElement.x2 = width;
            selectedElement.y2 = height;
            //updateElement(selectedElement);
            //const updatedElement = new SceneObject(selectedElement.id, newX1, newY1, width, height, selectedElement.tool);
            //updateElement(updatedElement);
        } else if (action === 'resize') {
            //const { id, tool, position, ...coordinates } = selectedElement;
            const resizeElement = selectedElement;
            if (resizeElement === null) return;

            const { x1, y1, x2, y2 } = resizedCoordinates(clientX, clientY, resizeElement.position, { x1: resizeElement.x1, y1: resizeElement.y1, x2: resizeElement.x2, y2: resizeElement.y2 });
            resizeElement.x1 = x1;
            resizeElement.y1 = y1;
            resizeElement.x2 = x2;
            resizeElement.y2 = y2;
            //updateElement(id, x1, y1, x2, y2, tool);
        }
    };

    const handleMouseUp = (event: any) => {

        if (action === 'drawing' || action === 'resize') {
            if (selectedElement) {
                const index = selectedElement.id;
                const { id, tool } = elements[index];
                const { x1, y1, x2, y2 } = adjustElementCoordinates(elements[index]);
                updateElement(selectedElement);
            }
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
            <div style={{ position: "relative" }}>
                <canvas
                    id="canvas"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    style={{ position: "absolute" }}
                >
                    Canvas
                </canvas>
                <div style={{ position: "absolute", marginTop: "60px" }}>
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
                {(chairSelected === true || tableSelected === true) &&
                    <div style={{ position: "absolute", right: "0", marginTop: "60px", width: window.innerWidth * .25, height: window.innerHeight / 2, border: "2px solid black", overflow: "scroll", gridTemplateColumns: "33% 33% 33%" }}>
                        <Tabs>
                            <TabList style={{ listStyle: "none", padding: "0", display: "flex", margin: "auto", width: "100%", alignItems: "stretch" }}>
                                <Tab style={{ marginTop: "0" }}>
                                    <TabOption name="Order" />
                                </Tab>
                                <Tab>
                                    <TabOption name="Items" />
                                </Tab>
                                <Tab>
                                    <TabOption name="Transfer" />
                                </Tab>
                            </TabList>
                            <TabPanel>
                                <div className="grid-container" style={{ display: "grid", gap: "50px 100px" }}>
                                    <ItemButton name="test" price="10.12" />
                                    <ItemButton name="test" />
                                    <ItemButton name="test" />
                                    <ItemButton name="test" />
                                    <ItemButton name="test" />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                {(chairSelected === true) &&
                                    <ItemTab chairSelected={chairSelected} chair={selectedChair}/>
                                }
                                {(tableSelected === true) &&
                                    <ItemTab tableSelected={tableSelected} table={selectedTable} />
                                }

                            </TabPanel>
                            <TabPanel>
                                TODO
                            </TabPanel>
                        </Tabs>
                    </div>
                }

            </div>
        </div>
    );
};

export const getServerSideProps = withPageAuthRequired();
export default DrawTest;