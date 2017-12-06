
function getRandom(minVal, maxVal) {
    var zecimalsStr = document.getElementById("zecimalsNr").value;
    var zecimalsInt = parseInt(zecimalsStr);
    var getInt = document.getElementById("hasZecimals").value;
    if (getInt === "Nu"){
    var min = parseInt(minVal);
    var max = parseInt(maxVal);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else{
        var min = parseInt(minVal);
        var max = parseInt(maxVal);
        return (Math.random() * (max - min ) + min).toFixed(zecimalsInt);
    }

}


function showNumber(){
    var minVal = document.getElementById("minValue").value;
    var maxVal = document.getElementById("maxValue").value;
    var random = getRandom(minVal, maxVal);
    document.getElementById("newRandom").value = random;
}

