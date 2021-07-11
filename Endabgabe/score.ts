let highscoresDiv: HTMLElement = document.getElementById("scoreboard");
highscores(highscoresDiv);

async function highscores(_flaeche: HTMLElement): Promise<void> {

    let scores: Response = await fetch("https://tabea-ketterer.herokuapp.com/zeitHol");
    let scoresListe = await scores.json();
    scoresListe.sort(sortByProperty("time"));


    for (let i: number = 0; i <= scoresListe.length - 1; i++) {
        let scoreDiv: HTMLDivElement = document.createElement("div");
        scoreDiv.innerHTML = scoresListe[i].name + " " + scoresListe[i].time;
        _flaeche.appendChild(scoreDiv);
    }
}

function sortByProperty(_property: any) {  //https://medium.com/@asadise/sorting-a-json-array-according-one-property-in-javascript-18b1d22cd9e9 ("Zeiten"-Liste nach Zeiten sortieren)
    return function (_a: any, _b: any) {
        if ((_a[_property] as number) > (_b[_property] as number))
            return 1;
        else if ((_a[_property] as number) < (_b[_property] as number))
            return -1;
        return 0;
    };
}