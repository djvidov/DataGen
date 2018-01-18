    
function verifyLength(phoneNumber){
    if (phoneNumber.length !== 10 ){
        return false;
    }
    else {
        return true;
    }
}

function verifyOperator(telNoStr){
    
    if (telNoStr.substr(0,2) === "07" || telNoStr.substr(0,2) === "02" || 
        telNoStr.substr(0,2) === "03"){
        //length != 10 => lunginea trebuie sa fie 10
        return "";
    }
    else if(telNoStr.substr(0,4) === "+407" || telNoStr.substr(0,4) === "+402" || 
    telNoStr.substr(0,4) === "+403") {
        //lenth != 12 => lunginea trebuie sa fie 12
        return "";
    }
    else if(telNoStr.substr(0,5) === "00407" || telNoStr.substr(0,5) === "00402" || 
    telNoStr.substr(0,5) === "00403") {
        //length != 13 => lunginea trebuie sa fie 13
        return "";
    }
    return "format incorect";
}

function verifyTelNo(){
    //0720.645.507
    //0720-645-507
    //0720 645 507
    //(0720)-645-507
    //+40720.645.507
    //+40720-645-507
    //+40720 645 507
    //+4(0720)-645-507
    //0040720.645.507
    //0040720-645-507
    //0040720 645 507
    //004(0720)-645-507
    //"004(0720)-645-507".replace("(", "").replace(")", "").replace("-", "").replace(" ", "").replace(".", "");

    var telNoStr = document.getElementById("telNo").value;
    var hasLength = verifyLength(telNoStr);
    if(!hasLength)
        alert("Numarul de telefon trebuie sa fie format din 10 cifre fara spatii !");
    var operator = verifyOperator(telNoStr);
    document.getElementById("operator").value = operator;
}
