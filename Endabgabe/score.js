"use strict";
let highscoresDiv = document.getElementById("scoreboard");
console.log(highscoresDiv);
highscores(highscoresDiv);
async function highscores(_flaeche) {
    let flaeche = document.getElementById("scoreboard");
    let scores = await fetch("https://tabea-ketterer.herokuapp.com/getScore");
    let scoresListe = await scores.json();
    console.log(scoresListe);
    console.log(flaeche);
    for (let i = 0; i <= scoresListe.length - 1; i++) {
        let scoreDiv = document.createElement("div");
        scoreDiv.innerHTML = scoresListe[i];
        flaeche.appendChild(scoreDiv);
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