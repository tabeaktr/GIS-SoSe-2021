const content: HTMLElement = document.querySelector(".content");
const currentStep: string = content ? content.id : "";
const selection: HTMLElement = document.getElementById("selection");

const karten = document.querySelectorAll(".karte");

function flipCard() {
    this.classList.toggle("flip");
}

karten.forEach(karte => karte.addEventListener("click", flipCard));



