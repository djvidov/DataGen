
var listaCodJudete = [
    {"value":01, "nume":"Alba"},
    {"value":02, "nume":"Arad"},
    {"value":03, "nume":"Arges"},
    {"value":04, "nume":"Bacau"},
    {"value":05, "nume":"Bihor"},
    {"value":06, "nume":"Bistrita-Nasaud"},
    {"value":07, "nume":"Botosani"},
    {"value":08, "nume":"Brasov"},
    {"value":09, "nume":"Braila"},
    {"value":40, "nume":"Bucuresti"},
    {"value":41, "nume":"Bucuresti S1"},
    {"value":42, "nume":"Bucuresti S2"},
    {"value":43, "nume":"Bucuresti S3"},
    {"value":44, "nume":"Bucuresti S4"},
    {"value":45, "nume":"Bucuresti S5"},
    {"value":46, "nume":"Bucuresti S6"},
    {"value":10, "nume":"Buzau"},
    {"value":51, "nume":"Calarasi"},
    {"value":11, "nume":"Caras-Severin"},
    {"value":12, "nume":"Cluj"},
    {"value":13, "nume":"Constanta"},
    {"value":14, "nume":"Covasna"},
    {"value":15, "nume":"Dambovita"},
    {"value":16, "nume":"Dolj"},
    {"value":17, "nume":"Galati"},
    {"value":52, "nume":"Giurgiu"},
    {"value":18, "nume":"Gorj"},
    {"value":19, "nume":"Harghita"},
    {"value":20, "nume":"Hunedoara"},
    {"value":21, "nume":"Ialomita"},
    {"value":22, "nume":"Iasi"},
    {"value":23, "nume":"Ilfov"},
    {"value":24, "nume":"Maramures"},
    {"value":25, "nume":"Mehedinti"},
    {"value":26, "nume":"Mures"},
    {"value":27, "nume":"Neamt"},
    {"value":28, "nume":"Olt"},
    {"value":29, "nume":"Prahova"},
    {"value":30, "nume":"Satu Mare"},
    {"value":31, "nume":"Salaj"},
    {"value":32, "nume":"Sibiu"},
    {"value":33, "nume":"Suceava"},
    {"value":34, "nume":"Teleorman"},
    {"value":35, "nume":"Timis"},
    {"value":36, "nume":"Tulcea"},
    {"value":37, "nume":"Vaslui"},
    {"value":38, "nume":"Valcea"},
    {"value":39, "nume":"Vrancea"}
];

window.onload = function(){
    var selectObject = document.getElementById("judet");
    for (var i = 0; i < listaCodJudete.length; i++){
        var opt = document.createElement("option");
        opt.value = listaCodJudete[i].value;
        opt.innerHTML = listaCodJudete[i].nume;
        selectObject.appendChild(opt);
    }
}

var SexMasculin = 1;
var SexFeminin = 2;
var Between1800And1899 = 2;
var Between1900And1999 = 0;
var Between2000And2099 = 4;

function getSexValue(sexString, anFull) {
    var currentSex;
    if(sexString === "masculin"){
        currentSex = SexMasculin;
    }
    else if(sexString === "feminin"){
        currentSex = SexFeminin;
    }
    var sexValue;
    if (anFull >= 1800 && anFull <= 1899) {
        sexValue = Between1800And1899 + currentSex;
    }
    else if ( anFull >= 1900 && anFull <= 1999 ) {
        sexValue = Between1900And1999 + currentSex;
    }   
    else {
        sexValue = Between2000And2099 + currentSex;
    }
    return sexValue;
}

function generateCnp(sexValue, anFull, luna, zi, judet) {
    var cifre = Math.floor(Math.random() * 900) + 100;
    var anShort = anFull.substring(2);
    var cnp = sexValue + anShort + luna + zi + judet + cifre;
    var control = parseInt(cnp.substr(0,1) * 2 + cnp.substr(1,1) * 7 + cnp.substr(2,1) * 9 + 
        cnp.substr(3,1) * 1 + cnp.substr(4,1) * 4 + cnp.substr(5,1) * 6 + 
        cnp.substr(6,1) * 3 + cnp.substr(7,1) * 5 + cnp.substr(8,1) * 8 + 
        cnp.substr(9,1) * 2 + cnp.substr(10,1) * 7 + 9) % 11;
    if (control === 10) {
        return cnp + 1;
    } 
    return cnp + control;
}

// generare zile in functie de luna si an;
function generateMonthDays(daysNr){
    var selectObject = document.getElementById("zi");
    var i;
    for (var i = 1; i <= daysNr; i++){
        while( i<=9 ) {
            var opt = document.createElement("option");
            opt.value = "0"+i;
            opt.innerHTML = "0"+i;
            selectObject.appendChild(opt);
            i++;
        }
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        selectObject.appendChild(opt);
    }
}

function verifyBisect(selectedYear) { // stabilire an bisect
    if(((selectedYear % 4 == 0) && (selectedYear % 100 != 0)) || (selectedYear % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

// stabilire zile luna pentru generat
function getMonth(){ 
    var selectedMonth = parseInt(document.getElementById("luna").value);
    var selectedYear = parseInt(document.getElementById("an").value);
    var isBisect = verifyBisect(selectedYear);

    if([1, 3, 5, 7, 8, 10, 12].includes(selectedMonth)){
        generateMonthDays(31);
    }
    else if ([4, 6, 9, 11, 8, 10, 12].includes(selectedMonth)){
        generateMonthDays(30);
    }
    else if((selectedMonth ===2) && (isBisect === true)){
        generateMonthDays(29);
    }
    else{
        generateMonthDays(28);
    }
}

// golire lista
function removeOptions(selectBox){ 
    for(var i = selectBox.options.length - 1 ; i >= 0 ; i--){
        selectBox.remove(i);
    }
}

// golire si generare
function fillDays(){ 
    getMonth(removeOptions(document.getElementById("zi")));
}

//verificare an (sa nu fie mai mare ca anul curent)
function verifyYear(an){
    var anInt = parseInt(an);
    var d1 = new Date();
    d1.setFullYear(anInt);    
    var d2 = new Date();
    if (an.length !== 4 ){
        alert("Introduceti anul din 4 cifre !");
        return false;
    }
    else if(Date.parse(d1) > Date.parse(d2)){
        alert("Anul introdus nu poate fi mai mare ca data curenta !");
        return false; 
    }
    else {
        return an;
    }
}

function customGenerateCnp() {
    var sex = document.getElementById("sex").value;
    var an = verifyYear(document.getElementById("an").value);
    var luna = document.getElementById("luna").value;
    var zi = document.getElementById("zi").value;
    var judet = document.getElementById("judet").value;
    var cnp = generateCnp(getSexValue(sex, an), an, luna, zi, judet);
    document.getElementById("generare").value = cnp;
}