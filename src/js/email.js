// [random-part] - un set de 5-10 caractere generate random cu o functie a-z,0-9,_

function showEmail(){ 
    var email = generateEmail();
    document.getElementById('newEmail').innerText = email; 
}

function generateEmail() {
    var length = parseInt(Math.random().toString().slice(5,1));
    let character = '0123456789abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = length; i > 0; i--) result += character[Math.floor(Math.random() * character.length)];
    if (result.length == 6) {
        result += '@gmail.com';
    }
    else if(result.length == 7){
        result += '@yahoo.com';
    }
    else if(result.length == 9){
        result += '@outlook.com';
    }
    else{
        result += '@office.com';
    }
    return result;
}