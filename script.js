function otsikko(input) {
    let sanat = [];
    sanat = input.split(" ");
    const capitalize = (sana) => sana[0].toUpperCase() + sana.substring(1)

    uudetSanat = sanat.map((sana, i, sanat) => {
        if (
            viisiKirjainta(sana) ||
            firstAndLastWord(i, sanat.length) ||
            prepositiotYms(sana)
        ) {
            return capitalize(sana)
        }
        return sana
    });

    return uudetSanat.join(' ')
}

// SÄÄNNÖT
function viisiKirjainta(sana) {
    return sana.length >= 5;
}

function firstAndLastWord(index, length) {

    if (index == 0 || index == length - 1)
    {
        return true;
    }

    else
    {
        return false;
    }
}

function prepositiotYms(sana) {
    preArtKon = ['amid', 'as', 'at', 'but', 'by', 'down', 'for', 'from', 'in', 'into', 'like', 'near', 'next', 'of', 'off', 'on', 'onto', 'out', 'over', 'past', 'per', 'plus', 'save', 'than', 'till', 'to', 'up', 'upon', 'via', 'with', 'but', 'so', 'or', 'and', 'if', 'till', 'when', 'while', 'a', 'an', 'the']

    return !preArtKon.includes(sana)
}
