
function showEmail(){ 
    var email = new EmailGenerator();
    var newEmail = email.generate();
    document.getElementById("newEmail").value = newEmail; 
}

function copyEmail() {
    document.getElementById("newEmail").select();
    document.execCommand("copy");
    var element = document.getElementById("copyEmail");
    element.innerHTML= "✔";
    setTimeout(function(){
        element.innerHTML = "copiaza adresa";
    },250);
}