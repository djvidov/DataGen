    
function verifyLength(telNoStr){
    var chAt1 = parseInt(telNoStr.charAt(1));
    if (telNoStr.length !== 10 ){
        alert("Numarul de telefon trebuie sa fie format din 10 cifre !");
        return false;
    }
    else {
        return telNoStr;
    }
}

function verifyOperator(telNoStr){
    var chAt0 = parseInt(telNoStr.charAt(0));
    var chAt1 = parseInt(telNoStr.charAt(1));
    if (chAt0 !== 0 || chAt1 !== 7){
        alert("Format incorect!\nNumarul trebuie sa respecte formatul: 07...");
        return false;
    }
    else if(parseInt(telNoStr.substr(0,3)) === 72 || parseInt(telNoStr.substr(0,3)) === 73 ){
        return "Vodafone";
    }
    else if(parseInt(telNoStr.substr(0,3)) === 74 || parseInt(telNoStr.substr(0,3)) === 75 ){
        return "Orange";
    }
    else if(parseInt(telNoStr.substr(0,3)) === 76){
        return "Telekom";
    }
    else if(parseInt(telNoStr.substr(0,3)) === 77){
        return "RCS & RDS";
    }
}

function verifyTelNo(){
    var telNoStr = verifyLength(document.getElementById("telNo").value);
    var operator = verifyOperator(telNoStr);
    document.getElementById("operator").value = operator;
    

}
