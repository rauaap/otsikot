
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