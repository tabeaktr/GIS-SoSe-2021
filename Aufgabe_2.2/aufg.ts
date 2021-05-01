// AUFGABE 1
// a

let a: number[] = [789, 39, 5, -44, 837];           // Benennung Array

function min(zahlen: number[]): void {              // Lokale umbenennung für die function min
    let zwischenspeicher: number = zahlen[0];

    for (let i = 0; i < zahlen.length; i++) {
        if (zahlen[i] < zwischenspeicher)
            zwischenspeicher = zahlen[i];
    }
    console.log(zwischenspeicher);
}

min(a);                                             // Aufruf des Arrays


// b
function isEven(x: number): boolean {
    if (x % 2 == 0) {
        console.log(0);
        return true;
    } else if (x % 2 == 1) {
        console.log(1);
        return false;
    } else {
        console.log(x - 2);
        return null;
    }
}

isEven(0); 
/* 50 -> 0  /  75 -> 1  /  -1 -> -3
   Die -3 bei -1 entsteht, weil bei ihr die ersten beiden if-Statements nie true sind, 
   das else-Statement aber bei ihr zutrifft.
   Lösungsansatz: Konsolenausgabe verändern, oder Datentyp der Rückgabe verändern, 
   sodass negative Zahlen zurückgegeben werden können.*/


// c 1. - 4. 
interface Student {
    matrikelnummer: number;
    name: string;
    studienfach: string;
}

let student1: Student = { matrikelnummer: 267049, name: "Benni", studienfach: "OMB" };
let student2: Student = { matrikelnummer: 266636, name: "Tabea", studienfach: "OMB" };
let student3: Student = { matrikelnummer: 278451, name: "Sebi", studienfach: "OMB" };

let studentenArray: Student[] = [];
studentenArray = [];

studentenArray.push(student1, student2, student3);


function addStudent(name: string, matrikelnummer: number, studienfach: string): void {
    let student4: Student = {matrikelnummer, name, studienfach};
    studentenArray.push(student4);
}

addStudent("Angelika", 267947, "WING");
showInfo(266636);

function showInfo(matrikelnummer: number): boolean {
    for (let i = 0; i < studentenArray.length; i++) {
        if (matrikelnummer == studentenArray[i].matrikelnummer) {
            console.log(studentenArray[i].name, studentenArray[i].matrikelnummer, studentenArray[i].studienfach);
            return true;
        }
    }
    console.log("Student nicht gefunden!");
    return false;
}


addStudent("Angelika", 451646, "WING");
showInfo(267049);
showInfo(266636);
showInfo(451646);
showInfo(278451);

// 5.
/* Bonus
class Student2 {
    matrikelnummer: number;
    name: string;
    studienfach: string;
    showInfo(matrikelnummer: number): boolean {
        for (let i = 0; i < studentenArray.length; i++) {
            if (matrikelnummer == studentenArray[i].matrikelnummer) {
                console.log(studentenArray[i].name, studentenArray[i].matrikelnummer, studentenArray[i].studienfach);
                return true;
            }
        }
        console.log("Student nicht gefunden!");
        return false;
    }

    Student2() { };
}
*/

// AUFGABE 2
// a
let o: number[] = [1, 2, 3, 4, 5];
function backwards(o: number[]): void {
    for (let i = o.length - 1; i >= 0; i--) {
        console.log(o[i]);
    }
}

backwards(o);

// b
let b: number[] = [6, 7, 8, 9, 10];
function join(baseArray: number[], addingArray: number[]): number[] {
    for (let i = 0; i < addingArray.length; i++) {
        baseArray.push(addingArray[i]);
    }
    console.log(baseArray);
    return baseArray;
}

join(o, b);                 //hier wird erst gesagt, dass es sich auf die Arrays a und b bezieht

// c
function split(array: number[], left: number, right: number): number[] {
    let reihe: number[] = [];
    for (let i = left; i <= right; i++) {       // left = unterer Grenzwert   rechts = oberer Grenzwert   durch <= wird die Obergrenze mit eingeschlossen  die Untergrenze ist immer eingeschlossen
        reihe.push(array[i]);
    }
    console.log(reihe);
    return reihe;
}

split(a, 2, 4);         // (Array, Untergrenze, Obergrenze);


// AUFGABE 3
// a
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
context.fillStyle = "rgb(135,206,250)";  //Himmel
context.fillRect(0, 0, 500, 400);
context.fillStyle = "rgb(34,139,34)";   //Wiese
context.fillRect(0, 250, 500, 300);   // x, y, weite, höhe

context.beginPath();   //Baumstamm
context.lineWidth = 2;
context.fillStyle = "rgb(139,69,19)";
context.moveTo(370, 210);
context.lineTo(355, 300);
context.lineTo(405, 300);
context.lineTo(390, 210);
context.lineTo(370, 210);
context.stroke();
context.fill();

context.beginPath();    //Blätter u.l.
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "rgb(34,139,34)";
context.arc(355, 200, 40, 0, Math.PI * 2);    // x , y, radius, startwinkel 0 endwinkel 2 * pi (=Kreis)
context.fill();
context.stroke();

context.beginPath();    //Blätter o.
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "rgb(34,139,34)";
context.arc(380, 160, 40, 0, Math.PI * 2);
context.fill();
context.stroke();

context.beginPath();    //Blätter u.r.
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "rgb(34,139,34)";
context.arc(408, 200, 40, 0, Math.PI * 2);
context.fill();
context.stroke();

context.beginPath();
context.lineWidth = 10; //Haus
context.fillStyle = "rgb(139,115,85)";
context.fillRect(75, 140, 150, 110);
context.fillStyle = "black";        //Tür
context.fillRect(130, 190, 40, 60);

context.beginPath();    //Dach
context.lineWidth = 10;
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.fillStyle = "black";
context.closePath();
context.fill();
context.stroke();

context.beginPath();    //Wolke u.l.
context.fillStyle = "white";
context.arc(370, 70, 40, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke o.
context.fillStyle = "white";
context.arc(395, 40, 30, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke u.r.
context.fillStyle = "white";
context.arc(420, 75, 40, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke2
context.fillStyle = "whitesmoke";
context.arc(35, 60, 20, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke2
context.fillStyle = "whitesmoke";
context.arc(80, 44, 25, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke2
context.fillStyle = "whitesmoke";
context.arc(55, 60, 25, 0, Math.PI * 2);
context.fill();

console.log(canvas);

//b
interface Rechteck {
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}

//c
function getRandom(max: number): number {
    return Math.floor(Math.random() * max);
}

function createRect() {
    let x: number = getRandom(500);
    let w: number = getRandom(500);
    let y: number = getRandom(400);
    let h: number = getRandom(400);
    context.fillRect(x, y, w, h);
}

createRect();

class Rectangle {
    width: number;
    height: number;

    createRectangle(_width: number, _height: number): void {
        this.width = _width;
        this.height = _height;
    }

    createRandomRec(): void {                                                       //c
        this.width = Math.floor(Math.random() * 100);
        this.height = Math.floor(Math.random() * 100);
    }
    
    drawRectangle(x: number, y: number, fill: boolean, color?: string): void {      // d
        let c: string = "#ffc3a0";
        context.beginPath();
        context.rect(x, y, this.width, this.height);
        if (color) {
            context.fillStyle = color;
            context.strokeStyle = color;
        } else {
            context.fillStyle = c;
            context.strokeStyle = c;
        }
        if (fill) {
            context.fill();
        }
        context.stroke();
    }

    drawRandom(): void {
        let x: number = Math.floor(Math.random() * 500);
        let y: number = Math.floor(Math.random() * 500);
        context.beginPath();
        context.rect(x, y, this.width, this.height);
        context.fillStyle = "#c0c0c0";
        context.strokeStyle = "#c0c0c0";
        context.fill();
        context.stroke();
    }
}

const r1: Rectangle = new Rectangle();
r1.createRectangle(300, 200);
r1.drawRectangle(300, 650, true);

// c)
const r2: Rectangle = new Rectangle();
r2.createRandomRec();
r2.drawRectangle(20, 700, false);

// d)
const r3: Rectangle = new Rectangle();
r3.createRandomRec();
r3.drawRectangle(450, 800, true, "#5ac18e");

// e)
const r4: Rectangle = new Rectangle();
r4.createRandomRec();
const r5: Rectangle = new Rectangle();
r5.createRandomRec();
const r6: Rectangle = new Rectangle();
r6.createRandomRec();

let rectangles: Array<Rectangle> = new Array();
rectangles = [r4, r5, r6];
rectangles.forEach(rec => rec.drawRandom());