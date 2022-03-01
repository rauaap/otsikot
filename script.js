function prepositiotYms(sana) {
    preArtKon = ['amid', 'as', 'at', 'but', 'by', 'down', 'for', 'from', 'in', 'into', 'like', 'near', 'next', 'of', 'off', 'on', 'onto', 'out', 'over', 'past', 'per', 'plus', 'save', 'than', 'till', 'to', 'up', 'upon', 'via', 'with', 'but', 'so', 'or', 'and', 'if', 'till', 'when', 'while', 'a', 'an', 'the']

    return !preArtKon.includes(sana)
}


function otsikko(input) {
    let sanat = [];
    sanat = input.split(" ");

    for (let i = 0; i < sanat.length; i++) {
       
    }
}

// SÄÄNNÖT
function viisiKirjainta(sana) {
    return sana.length >= 5;
}
