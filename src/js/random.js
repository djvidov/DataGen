
function getRandom(minVal, maxVal) {
    var min = parseInt(minVal);
    var max = parseInt(maxVal);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showNumber(){
    var minVal = document.getElementById("minValue").value;
    var maxVal = document.getElementById("maxValue").value;
    var random = getRandom(minVal, maxVal);
    document.getElementById("newRandom").value = random;
}