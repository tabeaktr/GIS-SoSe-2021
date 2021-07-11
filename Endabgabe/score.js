"use strict";
async function highscores(_flaeche) {
    let scores = await fetch("https://tabea-ketterer.herokuapp.com/getScore");
    let scoresListe = await scores.json();
    console.log(scoresListe);
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
highscores(document.getElementById("highscores"));
//# sourceMappingURL=score.js.map