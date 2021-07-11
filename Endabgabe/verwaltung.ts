let anzeigeflaeche = document.getElementById("anzeigeflaeche");
memoryKarten(anzeigeflaeche);

async function memoryKarten(_flaeche: HTMLElement): Promise<void> {
    //_flaeche.innerHTML = "";
    let memory: Response = await fetch("https://tabea-ketterer.herokuapp.com/getUrl");
    let memoryListe = await memory.json();
    // for (let i: number = 0; i <= scoresListe.length - 1; i++) {
    //     let scoreDiv = document.createElement("div");
    //     scoreDiv.innerHTML = scoresListe[i].name + " " + scoresListe[i].time;
    //     _flaeche.appendChild(scoreDiv);
    // }
    console.log(memoryListe);
    for (let i: number = 0; i < memoryListe.length; i++) {
        let platzHalter = document.createElement("div");
        platzHalter.innerHTML = "<img class='karten' src='" + memoryListe[i].url.toString() + "'></img>";
        _flaeche.appendChild(platzHalter);
        //platzHalter.addEventListener("click", bildEntfernen(memoryListe[i].url.toString()));
    }

}

async function bildEntfernen(_url: string): Promise<void> {
    let memory: Response = await fetch("https://tabea-ketterer.herokuapp.com/removeUrl?url=" + encodeURI(_url));
    window.location.reload();
}