var judetPrefix = {
    "nume":[
        "Alba","Arad","Arges","Bacau","Bihor","Bistrita-Nasaud","Botosani","Brasov","Braila","Bucuresti","Buzau",
        "Calarasi","Caras-Severin","Cluj","Constanta","Covasna","Dambovita","Dolj","Galati","Giurgiu","Gorj","Harghita","Hunedoara",
        "Ialomita","Iasi","Ilfov","Maramures","Mehedinti","Mures","Neamt","Olt","Prahova","Satu Mare",
        "Salaj","Sibiu","Suceava","Teleorman","Timis","Tulcea","Vaslui","Valcea","Vrancea",
    ],
    "value" : [
        "58","57","48","34","59","63","31","68","39","1",
        "38","42","55","64","41","67","45","51","36","46",
        "53","66","54","43","32","1","62","52","65","33",
        "49","44","61","60","69","30","47","56","40","35",
        "50","37"
    ],
}

window.onload = function generateJudet(){
    var selectObject = document.getElementById("jud");
    for (var i = 0; i < judetPrefix.nume.length; i++){
        var opt = document.createElement("option");
        opt.value = judetPrefix.value[i];
        opt.innerHTML = judetPrefix.nume[i];
        selectObject.appendChild(opt);
    }
}

function showCountryCode(fixOrMobileId){
    var countryCode = document.getElementById(fixOrMobileId).value
    if (countryCode === "Da"){
        return true;
    }
    else {
        return false;
    }
}

function showPhF(){
    var fixOperator = document.getElementById("operator").value;
    var judet = document.getElementById("jud").value;
    var countryCode = showCountryCode("countryCodeF");
    var PhFix = generateFIX(fixOperator, judet, countryCode);
    document.getElementById("newPhF").value = PhFix;
}

function showMobil(){
    var mobileOperator = document.getElementById("operatorM").value;
    var countryCode = showCountryCode("countryCodeM");
    var phoneNumber = generateMobil(mobileOperator, countryCode);
    document.getElementById("newPhM").value = phoneNumber;
}

function generateFIX(fixOperator, judet, countryCode){
    var digiPrefixFix = "03";
    var telekomPrefixFix = "02";
    var vodafonePrefixFix = "0372";
    var orangePrefixFix = "0374";
    var phoneFix = "";

    var rndm6 = Math.floor (Math.random() * 900000) + 100000;
    var rndm7 = Math.floor (Math.random() * 9000000) + 1000000; //pt fix bucuresti

    if (fixOperator === "vdf") {
        phoneFix = vodafonePrefixFix + rndm6;
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
    return countryCode ? "+4" + phoneFix : phoneFix;
}

function generateMobil(mobileOperator, countryCode){
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
    return countryCode ? "+4"+ phoneMobile : phoneMobile;
}

function copyFunction(newValue, copyValue) {
    document.getElementById(newValue).select();
    document.execCommand("copy");
    var element = document.getElementById(copyValue);
    element.innerHTML= "✔";
    setTimeout(function(){
        element.innerHTML = "copiaza";
    },250);
}
