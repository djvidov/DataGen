
function getRandom(minVal, maxVal, zecimalsStr, nrSeries) {
    var stringNr = "";
    var i;
    var intNr;
    var intToString;
    var seriesInt = parseInt(nrSeries);
    var zecimalsInt = parseInt(zecimalsStr);
    var min = parseInt(minVal);
    var max = parseInt(maxVal);
    if (zecimalsInt === 0 && seriesInt === 0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else if (zecimalsInt != 0 && seriesInt === 0 ){
        return (Math.random() * (max - min ) + min).toFixed(zecimalsInt);
    }
    else if (seriesInt != 0 && zecimalsInt === 0){
        
        for (i = 1 ; i <= seriesInt; i ++){
            intNr = Math.floor(Math.random() * (max - min + 1)) + min;
            intToString = intNr.toString() ;
            stringNr = stringNr +" "+ intToString;
        }
        return stringNr;
    }
    else{
        for (i = 1 ; i <= seriesInt; i ++){
            intNr = (Math.random() * (max - min ) + min).toFixed(zecimalsInt);
            intToString = intNr.toString() ;
            stringNr = stringNr +" "+ intToString;
        }
        return stringNr;
    }
}

function showNumber(){
    var minVal = document.getElementById("minValue").value;
    var maxVal = document.getElementById("maxValue").value;
    var zecimalsStr = document.getElementById("zecimalsNr").value;
    var nrSeries = document.getElementById("nrSeries").value;
    var random = getRandom(minVal, maxVal ,zecimalsStr, nrSeries);
    document.getElementById("newRandom").value = random;
}
