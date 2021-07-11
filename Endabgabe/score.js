"use strict";
let highscoresDiv = document.getElementById("scoreboard");
highscores(highscoresDiv);
async function highscores(_flaeche) {
    let scores = await fetch("https://tabea-ketterer.herokuapp.com/zeitHol");
    let scoresListe = await scores.json();
    scoresListe.sort(sortByProperty("time"));
    for (let i = 0; i <= scoresListe.length - 1; i++) {
        let scoreDiv = document.createElement("div");
        scoreDiv.innerHTML = scoresListe[i].name + " " + scoresListe[i].time;
        _flaeche.appendChild(scoreDiv);
    }
}
function sortByProperty(_property) {
    return function (_a, _b) {
        if (_a[_property] > _b[_property])
            return 1;
        else if (_a[_property] < _b[_property])
            return -1;
        return 0;
    };
}
//# sourceMappingURL=score.js.map