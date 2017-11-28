
function getRandom(minVal, maxVal) {
    var getInt = document.getElementById("zecimale").value;
    if (getInt === "Nu"){
    var min = parseInt(minVal);
    var max = parseInt(maxVal);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else{
        var min = parseInt(minVal);
        var max = parseInt(maxVal);
        return (Math.round(Math.random() * 100) / 100 * (max - min ) + min).toFixed(2);
    }

}


function showNumber(){
    var minVal = document.getElementById("minValue").value;
    var maxVal = document.getElementById("maxValue").value;
    var random = getRandom(minVal, maxVal);
    document.getElementById("newRandom").value = random;
}

