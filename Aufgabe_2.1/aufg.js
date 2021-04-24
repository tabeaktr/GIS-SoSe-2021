"use strict";
// AUFGABE 1
function hi() {
    let x = "Alles";
    console.log(x);
    bye();
    console.log("in Kambodscha?");
}
hi();
function bye() {
    console.log("Rodger");
}
//a
//In der Konsole wird ausgegeben:
//Alles
//Logo!
//Klar?
//Zulässige Variablennamen: Buchstaben, Striche/unterstriche, Strings
//Unzulässige Variablennnamen: Zahlen, Sonderzeichen
//b
//Als erstes wird die function hi mit der Ausgabe "Alles" deklariert. Danach springt er in die Zeile 5, wo die function bye
//ausgeführt wird, weshalb er in Zeile 11 und dann 12 springt und von der console.log "Rodger" ausgegeben wird. 
//Dann springt er wieder hoch in die console.log (Zeile 6) und gibt "in Kambodscha?" aus.
//Durch die Zeile 9 werden die Funktionen erst ausgeführt.
//c
let u = "Alles";
function b1() {
    b2();
    b3();
    b4();
}
function b2() {
    console.log(u + " Gute!");
}
function b3() {
    console.log(u + " Klar?");
}
function b4() {
    console.log(u + " Logo!");
}
b1();
// AUFGABE 2
function schnippi() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
schnippi();
//Die Konsole wird die Nummer 9 ausgeben und dann Zeile für Zeile runterzählen, bis zur 1, da die Schleife läuft, solange i>0 ist.
// AUFGABE 3
function hi2() {
    let x = "Alles";
    console.log(x);
    bye2();
    console.log("in Kambodscha?");
}
hi2();
function bye2() {
    console.log("Rodger");
}
function schnippi2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
schnippi2();
//a
//Durch die Kommentare für inhaltliche Fehler wird mir nicht klar was falsch ist, aber es ist praktisch, dass sie
//ins Intenet kopiert und dort beantwortet werden können. Für kleine Fehler wie ; oder whitespace vergessen sind sie hilfreich.
//b
//Ich bin die Fehler mit zwei Kommilitonen durchgegangen und haben die Codes überarbeitet und angeschaut.
// AUFGABE 4
let x = "Hallo"; //Globale Variable
console.log(x); //Hallo
func1(x); //Bla   x ist die Übergabevariable und sagt es wird wieder einen String gefordert
console.log(x); //Hallo
func2(); //Blubb
func3(); //      x wird überschrieben (permanent) globale Variable
console.log(x); //Test
function func1(y) {
    y = "Bla"; //Lokale Variable, die nur innerhalb der Funktion existiert
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
//a
//Als erstes geht er in die console.log(x) und gibt "Hallo" aus, da es als x definiert wurde. Dann wird nochmal "Hallo" ausgegeben,
//da das "Bla" übersprungen wird. Die func1 verlangt nach einem x, das "Bla" wird aber als y deklariert.
//Anschließend wird die func2 ausgegeben mit "Blubb", gefolgt von func3 mit "Test". Zum Schluss wird nochmal "Hallo" von console.log(x)
//ausgegeben.
//b
//Mit zwei Kommilitonen globale und lokale Variablen, sowie Übergabevariablen durchgesprochen.
//Funktionen verarbeiten Variablen (egal ob global oder lokal) weiter. Lokale Variablen "leben" nur innerhalb ihrer Funktion, globale
//sind aber für das ganze Dokument "am leben". Variablen sind Werte, die innerhalb ihre "Lebenszyklus" überschrieben werden können.
// AUFGABE 5
//a
function multiply(x, y) {
    console.log(x * y);
    return x * y;
}
multiply(22, 64);
//b
function max(t, u) {
    if (t > u) {
        console.log(t);
    }
    else if (t < u) {
        console.log(u);
    }
    else {
        console.log("Beide Zahlen sind gleich groß");
    }
}
max(7, 95);
//c 
function count() {
    let l = 0;
    let m = 1;
    do {
        l = l + m;
        console.log(l); //Zwischensumme
        m = m + 1;
    } while (m <= 100);
}
count();
//d
function RandomNumber(min, max) {
    for (let i = 0; i < 10; i++) {
        console.log(Math.random() * (max - min) + min);
    }
}
RandomNumber(0, 100);
//e
function factorial(n) {
    var result = n;
    if (n <= 1)
        return 1;
    while (n > 1) {
        n--;
        result = result * n;
        console.log(result);
    }
    return result;
}
factorial(4);
//f
function leapyears() {
    for (let i = 1900; i < 2021; i++) {
        if (i % 4 == 0) {
            if (!(i % 100 == 0)) {
                console.log(i);
            }
            else if (i % 400 == 0) {
                console.log(i);
            }
        }
    }
}
leapyears();
// AUFGABE 6
//a
function hashtag() {
    let hash = "#";
    for (let i = 0; i < 7; i++) {
        console.log(hash);
        hash += "#";
    }
}
hashtag();
//b
function fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0) {
            let f = "Fizz";
            console.log(f);
        }
        else if (!(i % 3 == 0) && i % 5 == 0) {
            let b = "Buzz";
            console.log(b);
        }
        else {
            console.log(i);
        }
    }
}
fizzbuzz();
//c
function fizzbuzz2() {
    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0) {
            let fb = "FizzBuzz";
            console.log(fb);
        }
        else if (i % 3 == 0) {
            let f = "Fizz";
            console.log(f);
        }
        else if (!(i % 3 == 0) && i % 5 == 0) {
            let b = "Buzz";
            console.log(b);
        }
        else {
            console.log(i);
        }
    }
}
fizzbuzz2();
//Lösung 1: Gemeinsamer Nenner 15
//Lösung 2: Verschachtelte if-Funktionen
//d
function schach(b, h) {
    let z = "";
    for (let s = 0; s < h; s++) { //Höhe
        if (s % 2 == 0) //für das Muster verantwortlich, dass jede 2. Zeile eine Leerzeile an den Anfang bekommt
            z += " ";
        for (let i = 0; i < b; i++) { //Breite
            if (i % 2 == 0) {
                z += "#";
            }
            else {
                z += " ";
            }
        }
        z += "\n";
    }
    console.log(z);
}
schach(8, 8); // <- e 
//# sourceMappingURL=aufg.js.map