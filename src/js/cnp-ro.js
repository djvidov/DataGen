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

function customGenerateCnp() {
    var sex = document.getElementById("sex").value;
    var an = verifyYear(document.getElementById("an").value);
    var luna = document.getElementById("luna").value;
    var zi = document.getElementById("zi").value;
    var judet = document.getElementById("judet").value;
    var cnp = generateCnp(getSexValue(sex, an), an, luna, zi, judet);
    document.getElementById("generare").innerText = cnp;
}

// generare zile in functie de luna;
function generateDays(){ 
    var selectedMonth = document.getElementById("luna").value;
    var intMonthValue = parseInt(selectedMonth);
    var selectObject = document.getElementById("zi");
    if(intMonthValue === 1  || intMonthValue === 3 || intMonthValue === 5 || intMonthValue === 7 || 
    intMonthValue === 8 || intMonthValue === 10  || intMonthValue === 12 ){
        for (var i = 1; i <= 31; i++){
            while( i<=9 ) {
                var opt = document.createElement('option');
                opt.value = "0"+i;
                opt.innerHTML = "0"+i;
                selectObject.appendChild(opt);
                i++;
            }
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            selectObject.appendChild(opt);
        }
    }
    if (intMonthValue === 4 || intMonthValue === 6 || intMonthValue === 9 || intMonthValue === 11){
        for (var i = 1; i <= 30; i++){
            while( i<=9 ) {
                var opt = document.createElement('option');
                opt.value = "0"+i;
                opt.innerHTML = "0"+i;
                selectObject.appendChild(opt);
                i++;
            }
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            selectObject.appendChild(opt);
        }
    }
    else if (intMonthValue === 2){
        for (var i = 1; i <= 28; i++){
            while( i<=9 ) {
                var opt = document.createElement('option');
                opt.value = "0"+i;
                opt.innerHTML = "0"+i;
                selectObject.appendChild(opt);
                i++;
            }
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            selectObject.appendChild(opt);
        }
    }
}

// golire lista
function removeOptions(selectBox){ 
    var i;
    for(i = selectBox.options.length - 1 ; i >= 0 ; i--){
        selectBox.remove(i);
    }
}

// golire si generare
function fillDays(){ 
    generateDays(removeOptions(document.getElementById("zi")));
}

//verificare An (sa nu fie mai mare ca anul curent)
function verifyYear(an){
    var anInt = parseInt(an);
    var d1 = new Date();
    d1.setFullYear(anInt);    
    var d2 = new Date();
    if (an.length != 4 ){
        alert("Introduceti anul din 4 cifre !")
        return false;
    }
    else if(Date.parse(d1) > Date.parse(d2)){
        alert("Anul introdus nu poate fi mai mare ca data curenta !")
        return false; 
    }
    else {
        return an;
    }
}