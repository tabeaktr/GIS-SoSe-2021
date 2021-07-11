


async function memoryKarten(_flaeche: HTMLElement): Promise<void> {
    //_flaeche.innerHTML = "";
    let memory: Response = await fetch("https://tabea-ketterer.herokuapp.com/getUrl");
    let memoryListe = await memory.json();
    console.log(memoryListe);
    for (let i: number = 0; i < memoryListe.length; i++) {
        let platzHalter = document.createElement("div");
        platzHalter.innerHTML = "<img class='karten' src='" + memoryListe[i].url.toString() + "'></img>";
        _flaeche.appendChild(platzHalter);
        platzHalter.addEventListener("click", () => { bildEntfernen(memoryListe[i].url.toString()) });
    }

}

async function bildEntfernen(_url: string): Promise<void> {
    if (confirm("Bild wirklich löschen?")) {
        await fetch("https://tabea-ketterer.herokuapp.com/removeUrl?url=" + encodeURI(_url));
        window.location.reload();
    }
}



window.addEventListener("load", () => {
    let anzeigeflaeche = document.getElementById("anzeigeflaeche");
    memoryKarten(anzeigeflaeche);
    document.getElementsByTagName("form")[0].addEventListener("submit", async (e) => {
        e.preventDefault();
        await fetch("https://tabea-ketterer.herokuapp.com/addUrl?url=" + encodeURI((document.getElementById("neuesBild") as HTMLInputElement).value.toString()));
        window.location.reload();
    });
});
