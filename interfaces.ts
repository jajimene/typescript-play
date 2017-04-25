interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

///////////////////////////////////////////////////////////////

interface SquareConfig {
    color?: string;
    width?: number;
}

interface Square {
    color: string;
    area: number;
}

function createSquare(config: SquareConfig): Square {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare);

///////////////////////////////////////////////////////////////

interface Point {
    readonly x: number;
    readonly y?: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!