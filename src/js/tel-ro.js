
function generateFIX(){
    var oper = document.getElementById("operator").value;
    var jud = document.getElementById("jud").value;
    var digiPrefixFix = "03"
    var romtlcPrefixFix = "02"
    var phoneFixToDisplay = "";

    var rndm6 = Math.floor (Math.random() * 900000) + 100000;
    var rndm7 = Math.floor (Math.random() * 9000000) + 1000000; //pt fix bucuresti

    if (oper === "vdf") {
        phoneFixToDisplay = "0372"+ rndm6;
    } 
    else if(oper === "org") {
        phoneFixToDisplay = "0374"+ rndm6;
    } 
    else if (oper === "romtl" && jud === "1") {
        phoneFixToDisplay = romtlcPrefixFix + jud + rndm7;
    } 
    else if (oper === "digi" && jud === "1") {
        phoneFixToDisplay = digiPrefixFix + jud + rndm7;
    } 
    else if (oper === "romtl") {
        phoneFixToDisplay = romtlcPrefixFix + jud + rndm6;
    } 
    else if (oper === "digi") {
        phoneFixToDisplay = digiPrefixFix + jud + rndm6;
    } 
    return phoneFixToDisplay;
}

function showPhF(){
    var PhFix = generateFIX();
    document.getElementById("newPhF").value = PhFix;
}

function generateMobil(){
    var operM = document.getElementById("operatorM").value;
    var phoneMobileToDisplay = "";

    var rndm7 = Math.floor (Math.random() * 9000000) + 1000000; 
    var choseMobPref = Math.random(); // pt alegerea aleatorie a cifrei de dupa "07..." pt operatorii mobili cu cate doua intrevale (072x -073x vdf) (074x - 075x orange)
    if (operM === "vdfM" && choseMobPref < 0.495){
        phoneMobileToDisplay = "072"+ rndm7;
    }
    else if(operM === "vdfM" && choseMobPref >= 0.495){
        phoneMobileToDisplay = "073"+ rndm7;
    }
    else if (operM === "orgM" && choseMobPref < 0.495){
        phoneMobileToDisplay = "074"+ rndm7;
    }
    else if(operM === "orgM" && choseMobPref >= 0.495){
        phoneMobileToDisplay = "075"+ rndm7;
    }
    else if(operM === "tlk"){
        phoneMobileToDisplay = "076"+ rndm7; 
    }
    else{
        phoneMobileToDisplay = "077"+ rndm7;  // digi 
    }
    return phoneMobileToDisplay;
}

function showMobil(){
    var PhMob = generateMobil();
    document.getElementById("newPhM").value = PhMob;
}

function copyFunction(newValue, copyValue) {
    document.getElementById(newValue).select();
    document.execCommand("copy");
    var element = document.getElementById(copyValue);
    element.innerHTML= "✔";
    setTimeout(function(){
        element.innerHTML = "copiaza numar";
    },250);
}