// CUI
function generateCIF(){
    var CIFfull = CIFtva(generateCIFdata(CIFlength()));
    document.getElementById('newCIF').value = CIFfull; 
};

function CIFlength(){
    var chosenCIF = Math.random();
    if (chosenCIF < 0.2475) {
        chosenCIF = Math.floor (Math.random() * 900000) + 100000;
    } 
    else if(chosenCIF >= 0.2475 && chosenCIF < 0.495) {
        chosenCIF = Math.floor (Math.random() * 9000000) + 1000000;
    } 
    else if (chosenCIF >= 0.495 && chosenCIF < 0.7425){
        chosenCIF = Math.floor (Math.random() * 90000000) + 10000000;
    }
    else {
        chosenCIF = Math.floor (Math.random() * 900000000) + 100000000;
    }
    return chosenCIF;
};

function generateCIFdata(chosenCIF){
    var CIFstring = chosenCIF.toString();
    var CIFlength = CIFstring.length;
    if (CIFlength == 6 ){
        var keyNr = parseInt(CIFstring.charAt(5))*2+parseInt(CIFstring.charAt(4))*3+parseInt(CIFstring.charAt(3))*5+parseInt(CIFstring.charAt(2))*7+parseInt(CIFstring.charAt(1))*1+parseInt(CIFstring.charAt(0))*2;
    }
    else if (CIFlength == 7){
        var keyNr = parseInt(CIFstring.charAt(6))*2+parseInt(CIFstring.charAt(5))*3+parseInt(CIFstring.charAt(4))*5+parseInt(CIFstring.charAt(3))*7+parseInt(CIFstring.charAt(2))*1+parseInt(CIFstring.charAt(1))*2+parseInt(CIFstring.charAt(0))*3;
    }
    else if (CIFlength == 8){
        var keyNr = parseInt(CIFstring.charAt(7))*2+parseInt(CIFstring.charAt(6))*3+parseInt(CIFstring.charAt(5))*5+parseInt(CIFstring.charAt(4))*7+parseInt(CIFstring.charAt(3))*1+parseInt(CIFstring.charAt(2))*2+parseInt(CIFstring.charAt(1))*3+parseInt(CIFstring.charAt(0))*5;    
    }
    else {
        var keyNr = parseInt(CIFstring.charAt(8))*2+parseInt(CIFstring.charAt(7))*3+parseInt(CIFstring.charAt(6))*5+parseInt(CIFstring.charAt(5))*7+parseInt(CIFstring.charAt(4))*1+parseInt(CIFstring.charAt(3))*2+parseInt(CIFstring.charAt(2))*3+parseInt(CIFstring.charAt(1))*5+parseInt(CIFstring.charAt(0))*7;
    }
    keyNr = (keyNr * 10) % 11;
    if(keyNr == 10) {
        keyNr = 0;
    }
    return chosenCIF.toString() + keyNr.toString();
};

function CIFtva (chosenCIFk){
    var tva = document.getElementById('tva').value;
    if (tva == "Da"){
        return "RO" + chosenCIFk;
    }
    else {
        return chosenCIFk;
    }
};

function CopyCIF() {
    document.getElementById("newCIF").select();
    document.execCommand('copy');
    var element = document.getElementById('checkCIF');
    element.setAttribute("style","display:block;");
    setTimeout(function(){
        element.setAttribute("style","display:none;");
    },250);
};

// EMAIL -------------------------------------------------------------------------//
function showEmail(){ 
    var email = generateEmail();
    document.getElementById('newEmail').value = email; 
}

function generateEmail() {
    var length = chooseLength();
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

function chooseLength(){
    var strlength = Math.random().toString().substr(2, 1);
    var length = parseInt(strlength);
    if (length == 0 || length == 1 || length == 2 || length == 3){
        length = 6
    }
    return length;
}

function CopyEmail() {
    document.getElementById("newEmail").select();
    document.execCommand('copy');
    var element = document.getElementById('checkMail');
    element.setAttribute("style","display:block;");
    setTimeout(function(){
        element.setAttribute("style","display:none;");
    },250);
};

// NUMAR RANDOM ---------------------------------------------------------------------//
function getRandom() {
    var minStr = document.getElementById('minValue').value;
    var min = parseInt(minStr);
    var maxStr = document.getElementById('maxValue').value;
    var max = parseInt(maxStr);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showNumber(){
    var random = getRandom();
    document.getElementById('newRandom').value = random;
}

// NUMAR TELEFON -------------------------------------------------------------------//
function generateFIX(){
    var oper = document.getElementById("operator").value;
    var jud = document.getElementById("jud").value;
    var phoneFixToDisplay = document.getElementById("newPhF")

    var rndm6 = Math.floor (Math.random() * 900000) + 100000;
    var rndm7 = Math.floor (Math.random() * 9000000) + 1000000; //pt fix bucuresti

    if (oper == "vdf") {
        phoneFixToDisplay.innerText = "0372"+ rndm6
    } 
    else if(oper == "org") {
        phoneFixToDisplay.innerText = "0374"+ rndm6
    } 
    else if (oper == "romtl" && jud == "alba") {
        phoneFixToDisplay.innerText = "0258"+ rndm6
    } 
    else if (oper == "digi" && jud == "alba") {
        phoneFixToDisplay.innerText = "0358"+ rndm6
    } 
    else if (oper == "romtl" && jud == "arad") {
        phoneFixToDisplay.innerText = "0257"+ rndm6
    } 
    else if (oper == "digi" && jud == "arad") {
        phoneFixToDisplay.innerText = "0357"+ rndm6
    }
    else if (oper == "romtl" && jud == "arges") {
        phoneFixToDisplay.innerText = "0248"+ rndm6
    } 
    else if (oper == "digi" && jud == "arges") {
        phoneFixToDisplay.innerText = "0348"+ rndm6
    }
    //continuare cu celelalte judete
}

function generateMobil(){
    var operM = document.getElementById("operatorM").value;
    var phoneMobileToDisplay = document.getElementById("newPhM");

    var rndm7 = Math.floor (Math.random() * 9000000) + 1000000; 
    var choseMobPref = Math.random(); // pt alegerea aleatorie a cifrei de dupa "07..." pt operatorii mobili cu cate doua intrevale (072x -073x vdf) (074x - 075x orange)
    if (operM == "vdfM" && choseMobPref < 0.495){
        phoneMobileToDisplay.innerText = "072"+ rndm7
    }
    else if(operM == "vdfM" && choseMobPref >= 0.495){
        phoneMobileToDisplay.innerText = "073"+ rndm7
    }
    else if (operM == "orgM" && choseMobPref < 0.495){
        phoneMobileToDisplay.innerText = "074"+ rndm7
    }
    else if(operM == "orgM" && choseMobPref >= 0.495){
        phoneMobileToDisplay.innerText = "075"+ rndm7
    }
    else if(operM == "tlk"){
        phoneMobileToDisplay.innerText = "076"+ rndm7
    }
    else{
        phoneMobileToDisplay.innerText = "077"+ rndm7   
    }
}