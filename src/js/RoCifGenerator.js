
function RoCifGenerator () {

    this.randomPart = function() {
        var percentage100 = 0.9999;
        var percentage25 = percentage100 / 4;
        var percentage50 = percentage100 / 2;
        var percentage75 = percentage25 * 3;
    
        var randomDistribution = Math.random();
        var randomCif;
        if (randomDistribution < percentage25) {
            randomCif = Math.floor (Math.random() * 900000) + 100000;
        } 
        else if(randomDistribution < percentage50) {
            randomCif = Math.floor (Math.random() * 9000000) + 1000000;
        } 
        else if (randomDistribution < percentage75){
            randomCif = Math.floor (Math.random() * 90000000) + 10000000;
        }
        else {
            randomCif = Math.floor (Math.random() * 900000000) + 100000000;
        }
        return randomCif.toString();
    };

    this.generateValidationChar = function(cifString) {
        var cifLength = cifString.length;
        var validationChar = 0;
        if (cifLength === 6 ){
            validationChar = parseInt(cifString.charAt(5)) * 2 + parseInt(cifString.charAt(4)) * 3 + 
            parseInt(cifString.charAt(3)) * 5 + parseInt(cifString.charAt(2)) * 7 + parseInt(cifString.charAt(1)) * 1 + 
            parseInt(cifString.charAt(0))*2;
        }
        else if (cifLength === 7){
            validationChar = parseInt(cifString.charAt(6)) * 2 + parseInt(cifString.charAt(5)) * 3 + 
            parseInt(cifString.charAt(4)) * 5 + parseInt(cifString.charAt(3)) * 7 + parseInt(cifString.charAt(2)) * 1 + 
            parseInt(cifString.charAt(1)) * 2 + parseInt(cifString.charAt(0)) * 3;
        }
        else if (cifLength === 8){
            validationChar = parseInt(cifString.charAt(7)) * 2 + parseInt(cifString.charAt(6)) * 3 + 
            parseInt(cifString.charAt(5)) * 5 + parseInt(cifString.charAt(4)) * 7 + parseInt(cifString.charAt(3)) * 1 + 
            parseInt(cifString.charAt(2)) * 2 + parseInt(cifString.charAt(1)) * 3 + parseInt(cifString.charAt(0)) * 5;    
        }
        else {
            validationChar = parseInt(cifString.charAt(8)) * 2 + parseInt(cifString.charAt(7)) * 3 + 
            parseInt(cifString.charAt(6)) * 5 + parseInt(cifString.charAt(5)) * 7 + parseInt(cifString.charAt(4)) * 1 + 
            parseInt(cifString.charAt(3)) * 2 + parseInt(cifString.charAt(2)) * 3 + parseInt(cifString.charAt(1)) * 5 + 
            parseInt(cifString.charAt(0)) * 7;
        }
        validationChar = (validationChar * 10) % 11;
        if(validationChar === 10) {
            validationChar = 0;
        }
        return validationChar.toString();
    };

    this.generate = function(hasTva) {
        var cif;
        var randomPartCif = this.randomPart();
        var validationChar = this.generateValidationChar(randomPartCif);
        return hasTva ? "RO" + randomPartCif + validationChar : randomPartCif + validationChar;
    };
    
}
