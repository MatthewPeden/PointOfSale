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

    constructor(id: number, x1: number, y1: number, x2:number,  y2: number, seats: any[] = []) {
        super(id, x1, y1, x2, y2, "table");
        this.seats = seats;
    }
}

export class Chair extends SceneObject {
    tableId: number;

    constructor(id: number, x1: number, y1: number, x2:number,  y2: number, tableId: number) {
        super(id, x1, y1, x2, y2, "chair");
        this.tableId = tableId;
    }
}