
function generateFIX(fixOperator, judet){
    var digiPrefixFix = "03";
    var telekomPrefixFix = "02";
    var vodaphonePrefixFix = "0372";
    var orangePrefixFix = "0374";
    var phoneFix = "";

    var rndm6 = Math.floor (Math.random() * 900000) + 100000;
    var rndm7 = Math.floor (Math.random() * 9000000) + 1000000; //pt fix bucuresti

    if (fixOperator === "vdf") {
        phoneFix = vodaphonePrefixFix + rndm6;
    } 
    else if(fixOperator === "org") {
        phoneFix = orangePrefixFix + rndm6;
    } 
    else if (fixOperator === "romtl" && judet === "1") {
        phoneFix = telekomPrefixFix + judet + rndm7;
    } 
    else if (fixOperator === "digi" && judet === "1") {
        phoneFix = digiPrefixFix + judet + rndm7;
    } 
    else if (fixOperator === "romtl") {
        phoneFix = telekomPrefixFix + judet + rndm6;
    } 
    else if (fixOperator === "digi") {
        phoneFix = digiPrefixFix + judet + rndm6;
    } 
    return phoneFix;
}

function showPhF(){
    var fixOperator = document.getElementById("operator").value;
    var judet = document.getElementById("jud").value;
    var PhFix = generateFIX(fixOperator, judet);
    document.getElementById("newPhF").value = PhFix;
}

function generateMobil(mobileOperator){
    var phoneMobile = "";

    var randomPart = Math.floor (Math.random() * 9000000) + 1000000; 
    var choseMobPref = Math.random(); // pt alegerea aleatorie a cifrei de dupa "07..." pt operatorii mobili cu cate doua intrevale (072x -073x vdf) (074x - 075x orange)
    if (mobileOperator === "vdfM" && choseMobPref < 0.495){
        phoneMobile = "072"+ randomPart;
    }
    else if(mobileOperator === "vdfM" && choseMobPref >= 0.495){
        phoneMobile = "073"+ randomPart;
    }
    else if (mobileOperator === "orgM" && choseMobPref < 0.495){
        phoneMobile = "074"+ randomPart;
    }
    else if(mobileOperator === "orgM" && choseMobPref >= 0.495){
        phoneMobile = "075"+ randomPart;
    }
    else if(mobileOperator === "tlk"){
        phoneMobile = "076"+ randomPart; 
    }
    else{
        phoneMobile = "077"+ randomPart;  // digi 
    }
    return phoneMobile;
}

function showMobil(){
    var mobileOperator = document.getElementById("operatorM").value;
    var phoneNumber = generateMobil(mobileOperator);
    document.getElementById("newPhM").value = phoneNumber;
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