
function removeDouble0(phoneNumberStr){
    var checkFor00 = phoneNumberStr.substr(0,2);
    if(checkFor00 === "00"){
        var noWithout00 = phoneNumberStr.replace("00", "+");
        return noWithout00;
    }
    else {
        return phoneNumberStr;
    }
}

function verifyPhoneNumber(phoneNumberStr){
    var noWithout00 = removeDouble0(phoneNumberStr);
    var ISDcodes = [93, 355, 213, 1684, 376, 244, 1264, 672, 1268, 54, 374, 297, 61, 43, 994, 1242, 973, 880, 1246, 375, 32, 501, 229, 1441, 975, 591, 387, 267, 55, 246, 1284, 673, 359, 226, 257, 855, 237, 1, 238, 1345, 236, 235, 56, 86, 61, 61, 57, 269, 682, 506, 385, 53, 599, 357, 420, 243, 45, 253, 1767, 1809, 1829, 1849, 670, 593, 20, 503, 240, 291, 372, 251, 500, 298, 679, 358, 33, 689, 241, 220, 995, 49, 233, 350, 30, 299, 1473, 1671, 502, 441481, 224, 245, 592, 509, 504, 852, 36, 354, 91, 62, 98, 964, 353, 441624, 972, 39, 225, 1876, 81, 441534, 962, 7, 254, 686, 383, 965, 996, 856, 371, 961, 266, 231, 218, 423, 370, 352, 853, 389, 261, 265, 60, 960, 223, 356, 692, 222, 230, 262, 52, 691, 373, 377, 976, 382, 1664, 212, 258, 95, 264, 674, 977, 31, 599, 687, 64, 505, 227, 234, 683, 850, 1670, 47, 968, 92, 680, 970, 507, 675, 595, 51, 63, 64, 48, 351, 1787, 1939, 974, 242, 262, 40, 7, 250, 590, 290, 1869, 1758, 590, 508, 1784, 685, 378, 239, 966, 221, 381, 248, 232, 65, 1721, 421, 386, 677, 252, 27, 82, 211, 34, 94, 249, 597, 47, 268, 46, 41, 963, 886, 992, 255, 66, 228, 690, 676, 1868, 216, 90, 993, 1649, 688, 1340, 256, 380, 971, 44, 1, 598, 998, 678, 379, 58, 84, 681, 212, 967, 260, 263];
    var justNumber = noWithout00.match(/[0-9]+/g).join(""); //numar cu prefix international fara + si fara () . -  etc
    var totalDigits = justNumber.length;
    var extractedISDcode1 = justNumber.substring(0, totalDigits - 10); // numere din 12 caractere cu prefix international
    var extractedISDcode2 = justNumber.substring(0, totalDigits - 9); //// numere din 11 caractere cu prefix international
    var last10Digits = justNumber.slice(-10); // pentru alte verificari viitoare in functie de tara, gen potrivire cu un format anume, 0x.. , 07xx, verificarea prefixelor operatorilor etc
    var getRouPrefix = last10Digits.substr(0, 4); //extragere prefix de Romania
    var rouMobilePrefix = /(07[2-6]\d|077[0-4]|0788|0799)/g; //regex pentru prefixele RO

    if (totalDigits >= 10 && totalDigits <= 16) { //majoritatea numerelor de telefon au intre 10 si 16 caractere (cu prefix international inclus)
        if (ISDcodes.includes(parseInt(extractedISDcode1)) || ISDcodes.includes(parseInt(extractedISDcode2)) ) { // verifica pt cod international
            if(getRouPrefix.match(rouMobilePrefix) && totalDigits === 11){ //pt Romania
                return "valid RO cu prefix int.";
            }
            else if (ISDcodes.includes(parseInt(extractedISDcode1)) && extractedISDcode1 != 40){
                return "posibil valid (numar strain)";
            }
            else{
                return "ERR:prefix RO dar numar invalid";
            }  
        } 
        else if (getRouPrefix.match(rouMobilePrefix)){ // verificare prefixe Romania ... ( ar mai trebui o conditie ??? )
            return "valid RO fara prefix int";
        }
        else if(totalDigits ===10 && !(getRouPrefix.match(rouMobilePrefix))){
            return "ERR:prefix RO incorect";
        }
        else {
            return "ERR:invalid 2 - prefix int incorect";
        }
    }
    else{
        return "ERR:format incorect";
    }
}

function getAndShow(){
    var phoneNumberStr = document.getElementById("telNo").value;
    var vaildOrNot = verifyPhoneNumber(phoneNumberStr);
    var boolValid = true;
    if(vaildOrNot.substr(0,3) === "ERR"){
        boolValid = false;
    }
    
    document.getElementById("operator").value = vaildOrNot;
}


// function verifyLength(phoneNumber){
//     if (phoneNumber.length !== 10 ){
//         return false;
//     }
//     else {
//         return true;
//     }
// }

// function verifyOperator(telNoStr){
    
//     if (telNoStr.substr(0,2) === "07" || telNoStr.substr(0,2) === "02" || 
//         telNoStr.substr(0,2) === "03"){
//         //length != 10 => lunginea trebuie sa fie 10
//         return "";
//     }
//     else if(telNoStr.substr(0,4) === "+407" || telNoStr.substr(0,4) === "+402" || 
//     telNoStr.substr(0,4) === "+403") {
//         //lenth != 12 => lunginea trebuie sa fie 12
//         return "";
//     }
//     else if(telNoStr.substr(0,5) === "00407" || telNoStr.substr(0,5) === "00402" || 
//     telNoStr.substr(0,5) === "00403") {
//         //length != 13 => lunginea trebuie sa fie 13
//         return "";
//     }
//     return "format incorect";
// }

// function verifyTelNo(){
//     //0720.645.507
//     //0720-645-507
//     //0720 645 507
//     //(0720)-645-507
//     //+40720.645.507
//     //+40720-645-507
//     //+40720 645 507
//     //+4(0720)-645-507
//     //0040720.645.507
//     //0040720-645-507
//     //0040720 645 507
//     //004(0720)-645-507
//     //"004(0720)-645-507".replace("(", "").replace(")", "").replace("-", "").replace(" ", "").replace(".", "");

//     var phoneNumberStr = document.getElementById("telNo").value;
//     var cleanedNumber = phoneNumberStr.replace(/[(]/g, "").replace(/[)]/g, "").replace(/[-]/g, "").replace(/[ ]/g, "").replace(/[.]/g, "");
    
//     var hasLength = verifyLength(telNoStr);
//     if(!hasLength)
//         alert("Numarul de telefon trebuie sa fie format din 10 cifre fara spatii !");
//     var operator = verifyOperator(telNoStr);
//     document.getElementById("operator").value = operator;
// }