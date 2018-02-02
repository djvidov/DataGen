
var judetePrefix2 = [
    {"value":58, "nume":"Alba"},
    {"value":57, "nume":"Arad"},
    {"value":48, "nume":"Arges"},
    {"value":34, "nume":"Bacau"},
    {"value":59, "nume":"Bihor"},
    {"value":63, "nume":"Bistrita-Nasaud"},
    {"value":31, "nume":"Botosani"},
    {"value":68, "nume":"Brasov"},
    {"value":39, "nume":"Braila"},
    {"value":1, "nume":"Bucuresti"},
    {"value":38, "nume":"Buzau"},
    {"value":42, "nume":"Calarasi"},
    {"value":55, "nume":"Caras-Severin"},
    {"value":64, "nume":"Cluj"},
    {"value":41, "nume":"Constanta"},
    {"value":67, "nume":"Covasna"},
    {"value":45, "nume":"Dambovita"},
    {"value":51, "nume":"Dolj"},
    {"value":36, "nume":"Galati"},
    {"value":46, "nume":"Giurgiu"},
    {"value":53, "nume":"Gorj"},
    {"value":66, "nume":"Harghita"},
    {"value":54, "nume":"Hunedoara"},
    {"value":43, "nume":"Ialomita"},
    {"value":32, "nume":"Iasi"},
    {"value":1, "nume":"Ilfov"},
    {"value":62, "nume":"Maramures"},
    {"value":52, "nume":"Mehedinti"},
    {"value":65, "nume":"Mures"},
    {"value":33, "nume":"Neamt"},
    {"value":49, "nume":"Olt"},
    {"value":44, "nume":"Prahova"},
    {"value":61, "nume":"Satu Mare"},
    {"value":60, "nume":"Salaj"},
    {"value":69, "nume":"Sibiu"},
    {"value":30, "nume":"Suceava"},
    {"value":47, "nume":"Teleorman"},
    {"value":56, "nume":"Timis"},
    {"value":40, "nume":"Tulcea"},
    {"value":35, "nume":"Vaslui"},
    {"value":50, "nume":"Valcea"},
    {"value":37, "nume":"Vrancea"}
];

window.onload = function(){
    var selectObject = document.getElementById("jud");
    for (var i = 0; i < judetePrefix2.length; i++){
        var opt = document.createElement("option");
        opt.value = judetePrefix2[i].value;
        opt.innerHTML = judetePrefix2[i].nume;
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
