
function generateCIF(){
    var CIFfull = CIFtva(generateCIFdata(CIFlength()));
    document.getElementById('newCIF').innerText = CIFfull; 
}


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
}

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

    keyNr = (keyNr * 10)%11;
    if(keyNr==10){
    keyNr = 0}

    var chosenCIFk = chosenCIF.toString() + keyNr.toString();

    return chosenCIFk;
}

function CIFtva (chosenCIFk){
    var tva = document.getElementById('tva').value;
    if (tva == "Da"){
        return "RO"+chosenCIFk
    }
    else {
        return chosenCIFk
    }
}