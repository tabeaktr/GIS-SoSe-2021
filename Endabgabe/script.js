"use strict";
const content = document.querySelector(".content");
const currentStep = content ? content.id : "";
const selection = document.getElementById("selection");
const karten = document.querySelectorAll(".karte");
function flipCard() {
    this.classList.toggle("flip");
}
karten.forEach(karte => karte.addEventListener("click", flipCard));
/* function kartenMischen[] {
    let x: [];
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        x = [array[j], array[i]], array[i] = x[0], array[j] = x[1];
    }
} */
//# sourceMappingURL=script.js.map