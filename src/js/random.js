
function getRandom(minVal, maxVal, zecimalsStr, zecimals) {
    var zecimalsInt = parseInt(zecimalsStr);
    var min = parseInt(minVal);
    var max = parseInt(maxVal);
    if (zecimals === false){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else{
        return (Math.random() * (max - min ) + min).toFixed(zecimalsInt);
    }
}

function hasZecimals(){
    var hasZecimals = document.getElementById("hasZecimals").value;
    if (hasZecimals === "Da"){
        return true;
    }
    else {
        return false;
    }
}

function showNumber(){
    var minVal = document.getElementById("minValue").value;
    var maxVal = document.getElementById("maxValue").value;
    var zecimalsStr = document.getElementById("zecimalsNr").value;
    var zecimals = hasZecimals();
    var random = getRandom(minVal, maxVal ,zecimalsStr, zecimals);
    document.getElementById("newRandom").value = random;
}
