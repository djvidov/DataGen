
var listaJudete = {
    "nume":[
        "Alba","Arad","Arges","Bacau","Bihor","Bistrita-Nasaud","Botosani","Brasov","Braila","Buzau",
        "Caras-Severin","Cluj","Constanta","Covasna","Dambovita","Dolj","Galati","Gorj","Harghita","Hunedoara",
        "Ialomita","Iasi","Ilfov","Maramures","Mehedinti","Mures","Neamt","Olt","Prahova","Satu Mare",
        "Salaj","Sibiu","Suceava","Teleorman","Timis","Tulcea","Vaslui","Valcea","Vrancea","Giurgiu",
        "Calarasi","Bucuresti"
    ],
    "value" : [
        "01","02","03","04","05","06","07","08","09","10",
        "11","12","13","14","15","16","17","18","19","20",
        "21","22","23","24","25","26","27","28","29","30",
        "31","32","33","34","35","36","37","38","39","52",
        "51","42"
    ]
}

window.onload = function generateJudet(){
    var selectObject = document.getElementById("judet");
    var i;
    for (var i = 0; i < listaJudete.nume.length; i++){
        var opt = document.createElement("option");
        opt.value = listaJudete.value[i];
        opt.innerHTML = listaJudete.nume[i];
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