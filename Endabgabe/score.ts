async function highscores(_flaeche: HTMLElement): Promise<void> {
    let scores: Response = await fetch("https://tabea-ketterer.herokuapp.com/getScore");
    let scoresListe = await scores.json();

    console.log(scoresListe);

}

function sortByProperty(_property: any) {  //https://medium.com/@asadise/sorting-a-json-array-according-one-property-in-javascript-18b1d22cd9e9
    return function (_a: any, _b: any) {
        if ((_a[_property] as number) > (_b[_property] as number))
            return 1;
        else if ((_a[_property] as number) < (_b[_property] as number))
            return -1;
        return 0;
    };
}

highscores(document.getElementById("highscores"));