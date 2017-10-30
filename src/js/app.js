var SexMasculin = 1;
var SexFeminin = 2;
var Between1800And1899 = 2;
var Between1900And1999 = 0;
var Between2000And2099 = 4;

function generareCnp() {
    var sex = document.getElementById("sex").value;
    var an = document.getElementById("an").value;
    var luna = document.getElementById("luna").value;
    var zi = document.getElementById("zi").value;
    var judet = document.getElementById("judet").value;
    var cnp = generareCNP(sex, an, luna, zi, judet);
    document.getElementById("generare").innerText = cnp;
}

function generareCNP(sexString, anFull, luna, zi, judet) {
    var currentSex;
    if(sexString == "masculin"){
        currentSex = SexMasculin;
    }
    else if(sexString == "feminin"){
        currentSex = SexFeminin;
    }
    var sex;
    if (anFull >= 1800 && anFull <= 1899) {
        sex = Between1800And1899 + currentSex;
    }
    else if ( anFull >= 1900 && anFull <= 1999 ) {
        sex = Between1900And1999 + currentSex;
    }   
    else {
        sex = Between2000And2099 + currentSex;
    }
    var cifre = Math.floor(Math.random() * 999) + 001;
    var anShort = anFull.substring(2);
    var cnp = sex + anShort + luna + zi + judet + cifre;
    var control = (cnp.substr(0,1) * 2 + cnp.substr(1,1) * 7 + cnp.substr(2,1) * 9 + 
        cnp.substr(3,1) * 1 + cnp.substr(4,1) * 4 + cnp.substr(5,1) * 6 + 
        cnp.substr(6,1) * 3 + cnp.substr(7,1) * 5 + cnp.substr(8,1) * 8 + 
        cnp.substr(9,1) * 2 + cnp.substr(10,1) * 7 + 9) % 11;
    if (control == 10) {
        cnp = cnp + 1;
    } 
    return cnp + control;
}
