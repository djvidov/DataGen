function generateCIF(){
    var tva = document.getElementById('tva').value;
    var CIFtoDisplay = document.getElementById('newCIF')
    var CIF6n = Math.floor (Math.random() * 900000) + 100000;
    var CIF7n = Math.floor (Math.random() * 9000000) + 1000000;
    var CIF8n = Math.floor (Math.random() * 90000000) + 10000000;
    var CIF9n = Math.floor (Math.random() * 900000000) + 100000000;

    var chosenCIF = Math.random();
    if (chosenCIF < 0.2475) {
        chosenCIF = CIF6n;
    } 
    else if(chosenCIF > 0.2475 && chosenCIF < 0.495) {
        chosenCIF = CIF7n;
    } 
    else if (chosenCIF > 0.495 && chosenCIF < 0.7425){
        chosenCIF = CIF8n;
    }
    else {
        chosenCIF = CIF9n;
    }
    
    var k = chosenCIF.toString();

    if (chosenCIF == CIF6n){
        var keyNr = parseInt(k.charAt(5))*2+parseInt(k.charAt(4))*3+parseInt(k.charAt(3))*5+parseInt(k.charAt(2))*7+parseInt(k.charAt(1))*1+parseInt(k.charAt(0))*2;
    }
    else if (chosenCIF == CIF7n){
        var keyNr = parseInt(k.charAt(6))*2+parseInt(k.charAt(5))*3+parseInt(k.charAt(4))*5+parseInt(k.charAt(3))*7+parseInt(k.charAt(2))*1+parseInt(k.charAt(1))*2+parseInt(k.charAt(0))*3;
    }
    else if (chosenCIF == CIF8n){
        var keyNr = parseInt(k.charAt(7))*2+parseInt(k.charAt(6))*3+parseInt(k.charAt(5))*5+parseInt(k.charAt(4))*7+parseInt(k.charAt(3))*1+parseInt(k.charAt(2))*2+parseInt(k.charAt(1))*3+parseInt(k.charAt(0))*5;    
    }
    else {
        var keyNr = parseInt(k.charAt(8))*2+parseInt(k.charAt(7))*3+parseInt(k.charAt(6))*5+parseInt(k.charAt(5))*7+parseInt(k.charAt(4))*1+parseInt(k.charAt(3))*2+parseInt(k.charAt(2))*3+parseInt(k.charAt(1))*5+parseInt(k.charAt(0))*7;
    }

    keyNr = (keyNr * 10)%11;
    if(keyNr==10){
    keyNr = 0}

    var chosenCIFk = chosenCIF.toString() + keyNr.toString();

    if (tva == 'Da'){
        CIFtoDisplay.innerText = 'RO'+chosenCIFk;
    }
    else{
        CIFtoDisplay.innerText = chosenCIFk;
    }
}