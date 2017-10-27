function generareCnp() {
    var s = document.getElementById("sex").value;
    var an = document.getElementById("an").value;
    if(s == "masculin" ){
        if (an >= 1800 && an <= 1899) {
            sex = 3;
        }
        else if ( an >= 1900 && an <= 1999 ) {
            sex = 1;
        }   
        else {
            sex = 5;
        }
    }

    if(s == "feminin") {
        if( an >= 1800 && an <= 1899) {
            sex = 4;
        } 
        else if( an >= 1900 && an <= 1999) {
            sex = 2;
        }
        else {
            sex = 6;
        }
    }    
       
    var cifre = Math.floor(Math.random() * 999) + 001;
    var an1 = an.substring(2);
    var luna = document.getElementById("luna").value;
    var zi = document.getElementById("zi").value;
    var jud = document.getElementById("judet").value;
    var cnp = sex + an1 + luna + zi + jud + cifre;

    var control = (cnp.substr(0,1) * 2 + cnp.substr(1,1) * 7 + cnp.substr(2,1) * 9 + 
        cnp.substr(3,1) * 1 + cnp.substr(4,1) * 4 + cnp.substr(5,1) * 6 + 
        cnp.substr(6,1) * 3 + cnp.substr(7,1) * 5 + cnp.substr(8,1) * 8 + 
        cnp.substr(9,1) * 2 + cnp.substr(10,1) * 7 + 9) % 11;
    
    if (control == 10) {
        cnp = cnp + 1;
    } 
    cnp = cnp + control;
    
    document.getElementById("generare").innerText = cnp;
}
