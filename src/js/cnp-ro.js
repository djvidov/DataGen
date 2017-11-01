var SexMasculin = 1;
var SexFeminin = 2;
var Between1800And1899 = 2;
var Between1900And1999 = 0;
var Between2000And2099 = 4;

function customGenerateCnp() {
    var sex = document.getElementById("sex").value;
    var an = document.getElementById("an").value;
    var luna = document.getElementById("luna").value;
    var zi = document.getElementById("zi").value;
    var judet = document.getElementById("judet").value;
    var cnp = generateCnp(getSexValue(sex, an), an, luna, zi, judet);
    document.getElementById("generare").innerText = cnp;
}

function getSexValue(sexString, anFull) {
    var currentSex;
    if(sexString == "masculin"){
        currentSex = SexMasculin;
    }
    else if(sexString == "feminin"){
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
    var control = (cnp.substr(0,1) * 2 + cnp.substr(1,1) * 7 + cnp.substr(2,1) * 9 + 
        cnp.substr(3,1) * 1 + cnp.substr(4,1) * 4 + cnp.substr(5,1) * 6 + 
        cnp.substr(6,1) * 3 + cnp.substr(7,1) * 5 + cnp.substr(8,1) * 8 + 
        cnp.substr(9,1) * 2 + cnp.substr(10,1) * 7 + 9) % 11;
    if (control == 10) {
        return cnp + 1;
    } 
    return cnp + control;
}
