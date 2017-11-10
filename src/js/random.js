function getRandom() {
    var minStr = document.getElementById("minValue").value;
    var min = parseInt(minStr);
    var maxStr = document.getElementById("maxValue").value;
    var max = parseInt(maxStr);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showNumber(){
    var random = getRandom();
    document.getElementById("newRandom").value = random;
}