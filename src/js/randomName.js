
nume = {
    ro: ["Popescu", "Niță", "Pop", "Popa", "Ionescu", "Nemeș", "Stan", "Dumitrescu", "Dima", "Gheorghiu", "Ioniță","Marin","Tudor", 
    "Dobre", "Barbu", "Nistor", "Florea", "Ene", "Dinu", "Georgescu", "Stoica", "Diaconu", "Diaconescu", "Mazilu","Andrei", "Marinescu", 
    "Nistor", "Mocanu", "Oprea", "Voinea", "Dochioiu", "Albu", "Tabacu", "Manole", "Cristea", "Toma", "Stănescu", "Preda", "Pușcașu", "Tomescu"],

    en: ["Clarkson", "Hamill", "Ridley", "Stevard", "Lewis", "White", "Brown", "Taylor", "Evans"],

    fr: ["Chloé", "Juliette", "Caroline", "	Antoine", "Louis", "Matthieu", "Mélanie", "Fanny", "Cédric", "Angélique"]
}

prenume = {
    ro: ["Ana", "Alexandru", "Mihaela", "Andreea", "Elena", "Adrian", "Andrei", "Alexandra", "Mihai", "Ionut", "Cristina", "Florin", "Daniel", "Cristina-Maria",
    "Marian", "Marius", "Cristian", "Daniela", "Alina", "Maria", "Daniel-Georgian", "Marian-Andrei", "Marius-Andrei", "Ioana", "Constantin", "Nicoleta", 
    "Georgiana", "Mariana", "Bogdan", "Vasile", "Gabriel", "Gabriela", "Nicolae", "Gheorghe", "George", "Ioan", "Valentin", "Adriana", "Ionela", "Catalin", 
    "Stefan", "Ion", "Florentina", "Anca-Iulia", "Anamaria", "Simona", "Iulian", "Roxana", "Oana", "Irina", "Cristian-Vasile", "Daniela-Elena", "Florin-Andrei",
    "Alina-Livia", "Maria-Elena", "Vasile-Ion", "Gabriel-Ionut", "Diana", "Mirela", "Iuliana", "Madalina", "Raluca", "Ionel", "Lucian", "Cosmin", "Sorin", 
    "Loredana", "Claudia", "Monica", "Ramona-Maria", "George-Andrei", "Ana", "Ciprian", "Corina", "Laura", "Vlad Razvan", "Radu", "Liliana", "Valentina", 
    "Viorel", "Iulia", "Claudia-Elena", "Monica-Larisa", "Ramona", "Ana-Ioana", "Ciprian-Andrei", "Corina-Maria", "Laura-Cristina", "Vlad-Alexandru", "Razvan-Andrei", 
    "Radu-George", "Liliana-Elena", "Valentina-Andreea", "Viorel-Marin", "Iulia-Ioana", "Andrei-Marius", "Alexandra-Maria", "Mihai-Cristian", "Ionut-Marius"],

    en: ["Mitchel", "Jennifer", "Mark", "George", "Hannah", "Linda", "Emma", "Andrew", "Kenneth", "Anthony", "William", "Susan"],

    fr: ["Martin", "Thomas", "Laurent", "Dupont", "Roussel", "Sanchez", "Jean", "Leroux", "Vidal", "Lacroix", "Charles"]
}

function getNameOrigin(){
    var getNmOrigin = document.getElementById("nameOrigin").value;
    return getNmOrigin;
}

function getSurnameOrigin(){
    var getSnOrigin = document.getElementById("nameOrigin").value;
    return getSnOrigin;
}

function generateName() {
    var nameOrigin = getNameOrigin();
    var nameOriginArr = nume[nameOrigin];
    var prenumeOrigin = getSurnameOrigin();
    var prenumeOriginArr = prenume[prenumeOrigin];
    var fullName = nameOriginArr[Math.floor(Math.random() * nameOriginArr.length)] +" "+ prenumeOriginArr[Math.floor(Math.random() * prenumeOriginArr.length)] // returneaza un undefined pe perenume ...
    document.getElementById("newName").value = fullName;
}

function copyFunction(newValue, copyValue) {
    document.getElementById(newValue).select();
    document.execCommand("copy");
    var element = document.getElementById(copyValue);
    element.innerHTML= "✔";
    setTimeout(function(){
        element.innerHTML = "copiaza";
    },250);
}
