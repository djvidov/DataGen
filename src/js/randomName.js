
function generateName() {

    var nume = ["Niță", "Pop", "Popa", "Popescu", "Ionescu", "Nemeș", "Stan", "Dumitrescu", "Dima", "Gheorghiu", "Ioniță","Marin","Tudor", 
    "Dobre", "Barbu", "Nistor", "Florea", "Ene", "Dinu", "Georgescu", "Stoica", "Diaconu", "Diaconescu", "Mazilescu","Ababei", "Marinescu", 
    "Nistor", "Mocanu", "Oprea", "Voinea", "Dochioiu", "Albu", "Tabacu", "Manole", "Cristea", "Toma", "Stănescu", "Preda", "Pușcașu", "Tomescu"];

    var prenume = ["Ana", "Alexandru", "Mihaela", "Andreea", "Elena", "Adrian", "Andrei", "Alexandra", "Mihai", "Ionut", "Cristina", "Florin", "Daniel", "Cristina-Maria",
    "Marian", "Marius", "Cristian", "Daniela", "Alina", "Maria", "Daniel-Georgian", "Marian-Andrei", "Marius-Andrei", "Ioana", "Constantin", "Nicoleta", 
    "Georgiana", "Mariana", "Bogdan", "Vasile", "Gabriel", "Gabriela", "Nicolae", "Gheorghe", "George", "Ioan", "Valentin", "Adriana", "Ionela", "Catalin", 
    "Stefan", "Ion", "Florentina-Ramona", "Anca-Iulia", "Anamaria", "Simona", "Iulian", "Roxana", "Oana", "Irina", "Cristian-Vasile", ",Daniela-Elena", "Florin-Andrei",
    "Alina-Livia", "Maria-Elena", "Vasile-Ion", "Gabriel-Ionut", "Diana", "Mirela", "Iuliana", "Madalina", "Raluca", "Ionel", "Lucian", "Cosmin", "Sorin", 
    "Loredana", "Claudia", "Monica", "Ramona-Maria", "George-Andrei", "Ana", "Ciprian", "Corina", "Laura", "Vlad Razvan", "Radu", "Liliana", "Valentina", 
    "Viorel", "Iulia", "Claudia-Elena", "Monica-Larisa", "Ramona", "Ana-Ioana", "Ciprian-Andrei", "Corina-Maria", "Laura-Cristina", "Vlad-Alexandru", "Razvan-Andrei", 
    "Radu-George", "Liliana-Elena", "Valentina-Andreea", "Viorel-Marin", "Iulia-Ioana", "Andrei-Marius", "Alexandra-Maria", "Mihai-Cristian", "Ionut-Marius"];

    var fullName = nume[Math.floor(Math.random() * 40)] +" "+ prenume[Math.floor(Math.random() * 100)]
    document.getElementById("newName").value = fullName
}

function copyCif() {
    document.getElementById("newName").select();
    document.execCommand("copy");
    var element = document.getElementById("copyCIF");
    element.innerHTML= "✔";
    setTimeout(function(){
        element.innerHTML = "copiaza CIF-ul";
    },250);
}
