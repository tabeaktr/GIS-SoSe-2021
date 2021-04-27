"use strict";
// AUFGABE 1
// a
let a = [789, 39, 5, -44, 837]; // Benennung Array
function min(zahlen) {
    let zwischenspeicher = zahlen[0];
    for (let i = 0; i < zahlen.length; i++) {
        if (zahlen[i] < zwischenspeicher)
            zwischenspeicher = zahlen[i];
    }
    console.log(zwischenspeicher);
}
min(a); // Aufruf des Arrays
// b
function isEven(x) {
    if (x % 2 == 0) {
        console.log(0);
        return true;
    }
    else if (x % 2 == 1) {
        console.log(1);
        return false;
    }
    else {
        console.log(x - 2);
        return null;
    }
}
isEven(0);
let student1 = { matrikelnummer: 267049, name: "Benni", studienfach: "OMB" };
let student2 = { matrikelnummer: 266636, name: "Tabea", studienfach: "OMB" };
let student3 = { matrikelnummer: 278451, name: "Sebi", studienfach: "OMB" };
let studentenArray = [];
studentenArray = [];
studentenArray.push(student1, student2, student3);
function addStudent(name, matrikelnummer, studienfach) {
    let student4 = { matrikelnummer, name, studienfach };
    studentenArray.push(student4);
}
function showInfo(studiliste) {
    for (let i = 0; i < studiliste.length; i++) {
        console.log(studiliste[i].name, studiliste[i].matrikelnummer, studiliste[i].studienfach);
    }
}
addStudent("Angelika", 267947, "WING");
showInfo(studentenArray);
function showInfo(matrikelnummer) {
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
class Student2 {
    showInfo(matrikelnummer) {
        for (let i = 0; i < studentenArray.length; i++) {
            if (matrikelnummer == studentenArray[i].matrikelnummer) {
                console.log(studentenArray[i].name, studentenArray[i].matrikelnummer, studentenArray[i].studienfach);
                return true;
            }
        }
        console.log("Student nicht gefunden!");
        return false;
    }
    Student2() { }
    ;
}
// AUFGABE 2
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
}
join(o, b); //hier wird erst gesagt, dass es sich auf die Arrays a und b bezieht
// c
function split(array, left, right) {
    let copy = [];
    for (let i = left; i <= right; i++) {
        copy.push(array[i]);
    }
    console.log(copy);
}
split(a, 2, 4);
// AUFGABE 3
// a
//# sourceMappingURL=aufg.js.map