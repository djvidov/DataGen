
function getRandom(minVal, maxVal ,zecimalsStr) {
    var zecimalsInt = parseInt(zecimalsStr);
    var min = parseInt(minVal);
    var max = parseInt(maxVal);
    var getInt = document.getElementById("hasZecimals").value;
    if (getInt === "Nu"){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else{
        return (Math.random() * (max - min ) + min).toFixed(zecimalsInt);
    }
}


function showNumber(){
    var minVal = document.getElementById("minValue").value;
    var maxVal = document.getElementById("maxValue").value;
    var zecimalsStr = document.getElementById("zecimalsNr").value;
    var random = getRandom(minVal, maxVal ,zecimalsStr);
    document.getElementById("newRandom").value = random;
}

