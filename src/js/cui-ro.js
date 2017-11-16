
function hasTva(){
    var tva = document.getElementById("tva").value;
    if (tva === "Da"){
        return true;
    }
    else {
        return false;
    }
}

function copyCif() {
    document.getElementById("newCIF").select();
    document.execCommand("copy");
    var element = document.getElementById("copyCIF");
    element.innerHTML= "✔";
    setTimeout(function(){
        element.innerHTML = "copiaza CIF-ul";
    },250);
}

function generateCIF(){
    var cifGenerator = new RoCifGenerator();
    var newCIF = cifGenerator.generate(hasTva());
    document.getElementById("newCIF").value = newCIF; 
}
