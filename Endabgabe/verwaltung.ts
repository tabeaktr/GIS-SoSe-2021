async function memoryKarten(_flaeche: HTMLElement): Promise<void> {
    let memory: Response = await fetch("https://tabea-ketterer.herokuapp.com/urlHol");
    let memoryListe = await memory.json();
    for (let i: number = 0; i < memoryListe.length; i++) {
        let platzHalter: HTMLDivElement = document.createElement("div");
        platzHalter.innerHTML = "<img class='karten' src='" + memoryListe[i].url.toString() + "'></img>";
        _flaeche.appendChild(platzHalter);
        platzHalter.addEventListener("click", () => { bildEntfernen(memoryListe[i].url.toString()); });
    }
}

async function bildEntfernen(_url: string): Promise<void> {
    if (confirm("Bild wirklich löschen?")) {
        await fetch("https://tabea-ketterer.herokuapp.com/urlEntf?url=" + encodeURI(_url));
        window.location.reload();
    }
}

window.addEventListener("load", () => {
    let anzeigeflaeche: HTMLElement = document.getElementById("anzeigeflaeche");
    memoryKarten(anzeigeflaeche);
    document.getElementsByTagName("form")[0].addEventListener("submit", async (e) => {
        e.preventDefault();
        await fetch("https://tabea-ketterer.herokuapp.com/urlHin?url=" + encodeURI((document.getElementById("neuesBild") as HTMLInputElement).value.toString()));
        window.location.reload();
    }); //https://stackoverflow.com/questions/53071851/getting-the-value-from-input-element-in-typescript/53072115 (Wert des Inputs auslesen)
});