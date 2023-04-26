import React, { useLayoutEffect, useState } from "react";
import { useEffect } from 'react';
import styled from "styled-components";
import { Table, Chair, SceneObject, Item } from "../classes/Table";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NumericFormat } from "react-number-format";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { ItemTab } from "@/components/ItemTab";
import Layout from "../components/Layout";
import router from "next/router";

interface InventoryItem {
    inventory_item_id: number;
    name: string;
    price: number;
    quantity: number;
    reorder_point: string;
}

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
    const [item, setItem] = useState<Item | null>(null);
    const [inventory_items_list, setInventoryItems] = useState<InventoryItem[]>([]);
    const [rawScene, setRawScene] = useState([]);
    const [rawTables, setRawTables] = useState([]);
    const [rawChairs, setRawChairs] = useState([]);

    const fetchInventoryItems = async () => {
        const response = await fetch('/api/product_inventory_item/get-inventory-items');
        const data = await response.json();
        setInventoryItems(data);
    };

    const fetchTables = async () => {
        const response = await fetch('/api/scene/get-tables');
        const data = await response.json();
        setRawTables(data);
    };

    const fetchChairs = async () => {
        const response = await fetch('/api/scene/get-chairs');
        const data = await response.json();
        setRawChairs(data);
    };

    useEffect(() => {
        const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        fetchInventoryItems();
        fetchTables();
        fetchChairs();

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

    const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: dense;
    gap: 40px;
    margin-top: 40px;
`;

    const Button = styled.button`
        border: 2px solid black;
        border-radius: 20px;
        background-color: #fff;
        color: #333;
        font-size: 18px;
        font-weight: bold;
        padding: 16px;
        text-align: center;
        transition: all 0.2s ease;
      
        &:hover {
          background-color: #333;
          color: #fff;
        }
      `;

    async function startOrder(items: Item[]) {

        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
        const response = await fetch('/api/order/add-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order_date: formattedDate,
            }),
        });

        if (response.ok) {
            let data = await response.json();

            items.forEach((item: Item) => {
                addToOrder(data.id, item);
            });

            let amount = 0;
            items.forEach((item: Item) => {
                amount += Number(item.price);
            });

            updateOrderPrice(data.id, amount);

        }

    }

    async function updateOrderPrice(id: number, amount: number) {
        const response = await fetch('/api/order/edit-order-price', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order_id: id,
                amount: amount,
            }),
        });
    }

    async function addToOrder(orderId: number, item: Item) {
        console.log(item.price);
        const response = await fetch('/api/order/add-order-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order_id: Number(orderId),
                product_id: Number(item.product_id),
                quantity: 1,
                price: item.price.toString(),
            }),
        });
    }

    function transferToSeat(props: any) {
        setItem(props.item);
        setTool("transfer");
    }

    function transferAllToSeat() {
        setTool("transferAll");
    }

    function ItemButton(props: any) {
        return (
            <Button onClick={() => addItem(props)}>
                {props.name} ${props.price}
            </Button>
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
            selectedChair.items.push(new Item(item.name, item.price, item.itemId));
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

    function saveScene() {
        let count = 0;
        elements.forEach(element => {
            if (element instanceof Table) {
                saveTable(element, count);
            } else if (element instanceof Chair) {
                saveChair(element);
            }
            count++;
        });
    }

    async function saveTable(table: Table, id: number) {
        const response = await fetch('/api/scene/add-table', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                scene_id: 1,
                x1: table.x1,
                y1: table.y1,
                x2: table.x2,
                y2: table.y2,
                element_id: id
            }),
        });
    }

    async function saveChair(chair: Chair) {
        const response = await fetch('/api/scene/add-chair', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                scene_id: 1,
                x1: chair.x1,
                y1: chair.y1,
                x2: chair.x2,
                y2: chair.y2,
                table_id: chair.table.id,
                element_id: chair.id
            }),
        });
    }

    function loadScene() {
        setElements([]);


        //combine arrays rawTables and rawChairs into one array rawScene
        let rawScene: any[] = [];
        rawTables.forEach(element => {
            rawScene.push(element);
        });

        rawChairs.forEach(element => {
            rawScene.push(element);
        });

        //sort rawScene by element_id
        rawScene.sort((a, b) => a.element_id - b.element_id);

        console.log(rawScene);

        rawScene.forEach(element => {
            if (element.type == "table") {
                setElements(elements => [...elements, new Table(element.element_id, element.x1, element.y1, element.x2, element.y2)]);
            }
            else if (element.type == "chair") {
                setElements(elements => [...elements, new Chair(element.element_id, element.x1, element.y1, element.x2, element.y2, elements[element.table_id])]);
                if (elements[element.table_id] instanceof Table) {
                    elements[element.table_id].seats.push(elements[elements.length - 1]);
                }
            }
        });
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
        else if (tool === "transfer") {
            const element = getElementAtPosistion(clientX, clientY, elements);
            if (element) {
                if (element instanceof Chair && selectedChair) {
                    element.items.push(item);
                    const index = selectedChair.items.indexOf(item);
                    if (index > -1) {
                        selectedChair.items.splice(index, 1);
                    }
                    setItem(null);
                    setTool("order");

                }
            }
        }
        else if (tool === "transferAll") {
            const element = getElementAtPosistion(clientX, clientY, elements);
            if (element) {
                if (element instanceof Chair && selectedChair) {
                    element.items = element.items.concat(selectedChair.items);
                    selectedChair.items = [];
                    setTool("order");
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
            if (!element) return;
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
            <Layout>
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
                        <button onClick={saveScene}>Save Scene</button>
                        <button onClick={loadScene}>Load Scene</button>
                    </div>
                    {(chairSelected === true || tableSelected === true) &&
                        <div style={{ position: "absolute", right: "0", marginTop: "60px", width: window.innerWidth * .25, height: window.innerHeight / 2, border: "2px solid black", overflow: "scroll", gridTemplateColumns: "33% 33% 33%" }}>
                            <Tabs>
                                <TabList style={{ listStyle: "none", padding: "0", display: "flex", margin: "auto", width: "100%", alignItems: "stretch" }}>
                                    {(chairSelected === true &&
                                        <Tab style={{ marginTop: "0" }}>
                                            <TabOption name="Order" />
                                        </Tab>
                                    )}
                                    <Tab>
                                        <TabOption name="Items" />
                                    </Tab>
                                </TabList>
                                {(chairSelected === true &&
                                    <TabPanel>
                                        <GridContainer>
                                            {(1 == 1 && inventory_items_list.map((item: any, index: any) => {
                                                return (
                                                    <ItemButton name={item.name} price={item.price} itemId={item.inventory_item_id} />
                                                )
                                            }))}
                                        </GridContainer>
                                    </TabPanel>
                                )}
                                <TabPanel>

                                    {(chairSelected === true && selectedChair && selectedChair.items.length > 0) &&
                                        <div>
                                            <button onClick={() => startOrder(selectedChair.items)}>Print Check</button>
                                            <button onClick={transferAllToSeat}>Transfer All To Seat</button>
                                        </div>
                                    }
                                    {(chairSelected === true) &&
                                        selectedChair?.items.map((item: any, index: any) => {
                                            return (
                                                <div style={{ border: "2px solid black", borderRadius: "16px" }}>
                                                    <div key={index} style={{ padding: "8px" }}>
                                                        <h3>{item.name}</h3>
                                                        <p>{item.price}</p>
                                                        <button onClick={() => transferToSeat({ item })}>Transfer To Seat</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        )
                                    }

                                    {(tableSelected === true) &&
                                        <ItemTab tableSelected={tableSelected} table={selectedTable} />
                                    }

                                </TabPanel>
                            </Tabs>
                        </div>
                    }

                </div>
            </Layout>
        </div>
    );
};

export const getServerSideProps = withPageAuthRequired();
export default DrawTest;