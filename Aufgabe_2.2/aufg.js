"use strict";
// AUFGABE 2.2
var Aufgabe01;
(function (Aufgabe01) {
    // a
    function min(..._zahlen) {
        let zwischenspeicher = _zahlen[0];
        for (let i = 0; i < _zahlen.length; i++) {
            if (_zahlen[i] < zwischenspeicher)
                zwischenspeicher = _zahlen[i];
        }
        return zwischenspeicher;
    }
    console.log(min(34, 2, 27, 8, -256)); // Aufruf des Arrays und übergabe beliebig vieler Werte
    // b
    function isEven(x) {
        if (x == 0) {
            return true;
        }
        else if (x == 1) {
            return false;
        }
        else if (x < 0) {
            return isEven(-x);
        }
        else {
            return isEven(x - 2); // reduziert welche Zahl auch immer so lange um 2 bis 0 oder 1 rauskommt
        }
    }
    console.log(isEven(-1));
    let student1 = { matrikelnummer: 267049, name: "Benni", studienfach: "OMB" };
    let student2 = { matrikelnummer: 266636, name: "Tabea", studienfach: "OMB" };
    let student3 = { matrikelnummer: 278451, name: "Sebi", studienfach: "OMB" };
    let studentenArray = [];
    studentenArray.push(student1, student2, student3); //erstellte Daten werden in das Studenten-Array gepusht
    function addStudent(name, matrikelnummer, studienfach) {
        let student4 = { matrikelnummer, name, studienfach };
        studentenArray.push(student4);
    }
    addStudent("Angelika", 267947, "WING");
    function showInfo(studentenaufzählung) {
        for (let i = 0; i < studentenaufzählung.length; i++) { // Muss nur einmal aufgerufen werden und gibt dann alle Studenten in jew. Array aus 
            console.log(studentenaufzählung[i].name, studentenaufzählung[i].matrikelnummer, studentenaufzählung[i].studienfach);
        }
    }
    showInfo(studentenArray);
    //
    /*showInfo(266636);                 Alter Ansatz, nicht optimal

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
    */
    addStudent("Angelika", 451646, "WING");
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
})(Aufgabe01 || (Aufgabe01 = {}));
var Aufgabe02;
(function (Aufgabe02) {
    // a
    let o = [1, 2, 3, 4, 5];
    function backwards(o) {
        for (let i = o.length - 1; i >= 0; i--) {
            console.log(o[i]);
        }
    }
    backwards(o);
    // b
    let b = [6, 7, 8, 9, 10];
    function join(baseArray, addingArray) {
        for (let i = 0; i < addingArray.length; i++) {
            baseArray.push(addingArray[i]);
        }
        console.log(baseArray);
        return baseArray;
    }
    join(o, b); //hier wird erst gesagt, dass es sich auf die Arrays a und b bezieht
    // c
    let a = [789, 39, 5, -44, 837]; // Benennung Array
    function split(array, left, right) {
        let reihe = [];
        for (let i = left; i <= right; i++) { // left = unterer Grenzwert   rechts = oberer Grenzwert   durch <= wird die Obergrenze mit eingeschlossen  die Untergrenze ist immer eingeschlossen
            reihe.push(array[i]);
        }
        console.log(reihe);
        return reihe;
    }
    split(a, 2, 4); // (Array, Untergrenze, Obergrenze);
})(Aufgabe02 || (Aufgabe02 = {}));
var Aufgabe03;
(function (Aufgabe03) {
    // a
    let canvas = document.getElementById("myFirstCanvas");
    let context = canvas.getContext("2d");
    context.fillStyle = "rgb(135,206,250)"; //Himmel
    context.fillRect(0, 0, 500, 400);
    context.fillStyle = "rgb(34,139,34)"; //Wiese
    context.fillRect(0, 250, 500, 300); // x, y, weite, höhe
    context.beginPath(); //Baumstamm
    context.lineWidth = 2;
    context.fillStyle = "rgb(139,69,19)";
    context.moveTo(370, 210);
    context.lineTo(355, 300);
    context.lineTo(405, 300);
    context.lineTo(390, 210);
    context.lineTo(370, 210);
    context.stroke();
    context.fill();
    context.beginPath(); //Blätter u.l.
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "rgb(34,139,34)";
    context.arc(355, 200, 40, 0, Math.PI * 2); // x , y, radius, startwinkel 0 endwinkel 2 * pi (=Kreis)
    context.fill();
    context.stroke();
    context.beginPath(); //Blätter o.
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "rgb(34,139,34)";
    context.arc(380, 160, 40, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.beginPath(); //Blätter u.r.
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
    context.fillStyle = "black"; //Tür
    context.fillRect(130, 190, 40, 60);
    context.beginPath(); //Dach
    context.lineWidth = 10;
    context.moveTo(50, 140);
    context.lineTo(150, 60);
    context.lineTo(250, 140);
    context.fillStyle = "black";
    context.closePath();
    context.fill();
    context.stroke();
    context.beginPath(); //Wolke u.l.
    context.fillStyle = "white";
    context.arc(370, 70, 40, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke o.
    context.fillStyle = "white";
    context.arc(395, 40, 30, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke u.r.
    context.fillStyle = "white";
    context.arc(420, 75, 40, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke2
    context.fillStyle = "whitesmoke";
    context.arc(35, 60, 20, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke2
    context.fillStyle = "whitesmoke";
    context.arc(80, 44, 25, 0, Math.PI * 2);
    context.fill();
    context.beginPath(); //Wolke2
    context.fillStyle = "whitesmoke";
    context.arc(55, 60, 25, 0, Math.PI * 2);
    context.fill();
    console.log(canvas);
    //c
    function getRandom(_min, _max) {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
    function createRandomRechteck() {
        let x = getRandom(0, 500); //max. Größe Canvas
        let w = getRandom(0, 500); //max. Größe Canvas
        let y = getRandom(0, 400); //max. Höhe Canvas
        let h = getRandom(0, 400); //max. Höhe Canvas
        let r = getRandom(0, 255); //weil Hexa-Dezimal 255 als Obergrenze hat (FF)
        let g = getRandom(0, 255);
        let b = getRandom(0, 255);
        return {
            width: w, height: h, x: x, y: y, color: `rgb(${r}, ${g}, ${b})`
        }; // wandelt die einzelnen Random Farbwerte in RGB-Werte um
    }
    createRandomRechteck();
    //d
    function drawRechteck(_r) {
        context.fillStyle = _r.color; //wird angelegt, dass das Rechteck mit seiner Farbe (Z. 265) gefüllt wird 
        context.beginPath(); //fängt an zu zeichnen
        context.rect(_r.x, _r.y, _r.width, _r.height); //nach random Werten von Zeile 265
        context.fill(); //Reckteck wird mit der random color von Zeile 265 gefüllt
    }
    let recht = [];
    for (let i = 0; i < 3; i++) {
        recht.push(createRandomRechteck()); // erstellt in der for-Schleife 3 random Rechtecke
    }
    for (let i = 0; i < recht.length; i++) { // nimmt die erstellten random Rechtecke und zeichnet sie auf den Canvas
        drawRechteck(recht[i]);
    }
})(Aufgabe03 || (Aufgabe03 = {}));
//# sourceMappingURL=aufg.js.map