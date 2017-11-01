
function generateFIX(){
    var oper = document.getElementById("operator").value;
    var jud = document.getElementById("jud").value;
    var phoneFixToDisplay = document.getElementById("newPhF")

    var rndm6 = Math.floor (Math.random() * 900000) + 100000;
    var rndm7 = Math.floor (Math.random() * 9000000) + 1000000; //pt fix bucuresti

    if (oper == "vdf") {
        phoneFixToDisplay.innerText = "0372"+ rndm6
    } 
    else if(oper == "org") {
        phoneFixToDisplay.innerText = "0374"+ rndm6
    } 
    else if (oper == "romtl" && jud == "alba") {
        phoneFixToDisplay.innerText = "0258"+ rndm6
    } 
    else if (oper == "digi" && jud == "alba") {
        phoneFixToDisplay.innerText = "0358"+ rndm6
    } 
    else if (oper == "romtl" && jud == "arad") {
        phoneFixToDisplay.innerText = "0257"+ rndm6
    } 
    else if (oper == "digi" && jud == "arad") {
        phoneFixToDisplay.innerText = "0357"+ rndm6
    }
    else if (oper == "romtl" && jud == "arges") {
        phoneFixToDisplay.innerText = "0248"+ rndm6
    } 
    else if (oper == "digi" && jud == "arges") {
        phoneFixToDisplay.innerText = "0348"+ rndm6
    }
    //continuare cu celelalte judete
}

function generateMobil(){
    var operM = document.getElementById("operatorM").value;
    var phoneMobileToDisplay = document.getElementById("newPhM");

    var rndm7 = Math.floor (Math.random() * 9000000) + 1000000; 
    var choseMobPref = Math.random(); // pt alegerea aleatorie a cifrei de dupa "07..." pt operatorii mobili cu cate doua intrevale (072x -073x vdf) (074x - 075x orange)
    if (operM == "vdfM" && choseMobPref < 0.495){
        phoneMobileToDisplay.innerText = "072"+ rndm7
    }
    else if(operM == "vdfM" && choseMobPref >= 0.495){
        phoneMobileToDisplay.innerText = "073"+ rndm7
    }
    else if (operM == "orgM" && choseMobPref < 0.495){
        phoneMobileToDisplay.innerText = "074"+ rndm7
    }
    else if(operM == "orgM" && choseMobPref >= 0.495){
        phoneMobileToDisplay.innerText = "075"+ rndm7
    }
    else if(operM == "tlk"){
        phoneMobileToDisplay.innerText = "076"+ rndm7
    }
    else{
        phoneMobileToDisplay.innerText = "077"+ rndm7   
    }
}