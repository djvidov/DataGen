// [random-part] - un set de 5-10 caractere generate random cu o functie a-z,0-9,_

function showEmail(){ ///pt test
    var email = randomPart();
    document.getElementById('newEmail').innerText = email; 
}

function randomPart(length, character) {
    length = chooseLength();
    character = '0123456789_abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = length; i > 0; --i) result += character[Math.floor(Math.random() * character.length)];
    return result;
}


function chooseLength(){
     cLength =  Math.random();
    if (cLength < 0.2475) {
        cLength = 6
    } 
    else if(cLength >= 0.2475 && cLength < 0.495) {
        cLength = 7
    } 
    else if (cLength >= 0.495 && cLength < 0.7425){
        cLength = 9
    }
    else {
        cLength = 10
    }
    return cLength;
}
