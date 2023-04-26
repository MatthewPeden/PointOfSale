export class SceneObject {
    id: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    tool: string;

    constructor(id: number, x1: number, y1: number, x2:number,  y2: number, tool:string) {
        this.id = id;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.tool = tool;
    }
}

export class Table extends SceneObject {
    seats: any[];
    selected: boolean = false;

    constructor(id: number, x1: number, y1: number, x2:number,  y2: number, seats: Chair[] = []) {
        super(id, x1, y1, x2, y2, "table");
        this.seats = seats;
    }
}

export class Chair extends SceneObject {
    table: Table | null;
    selected: boolean = false;
    items: any[] = [];

    constructor(id: number, x1: number, y1: number, x2:number,  y2: number, table: Table | null = null) {
        super(id, x1, y1, x2, y2, "chair");
        this.table = table;
    }
}

export class Item { 
    name: string;
    price: number;
    product_id: number;

    constructor(name: string, price: number, product_id: number) {
        this.name = name;
        this.price = price;
        this.product_id = product_id;
    }
}