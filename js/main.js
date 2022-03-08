//^Descrizione:
/*  Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l 'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma. */

const numberList = document.getElementById("number-generate");
let time = 0;
let clock;
let createNumber = [];


document.getElementById("random-number").addEventListener('click', function () {
    numberList.innerHTML = "";
    for (let i = 0; i < 2; i++) {
        let number = Math.floor((Math.random() * 50) + 1);
        createNumber.push(number);
        numberList.innerHTML = createNumber;
    }
    setTimeout(cronometro, 3000);
});


function cronometro() {
    numberList.innerHTML = "";

    let diff = 0;

    for (let i = 0; i < createNumber.length; i++) {
        let number = parseInt(prompt("quale è il primo numero generato?"));

        diff = i

        if (createNumber[i] === number) {
            document.getElementById("number-right").innerHTML = `hai indovinato ${i+1} numero/i`;
            numberList.innerHTML += `<p>hai indovinato il numero ${createNumber[i]}</p>`;
        } else {
            numberList.innerHTML += `<p>non hai indovinato il numero ${createNumber[i]}</p>`;
            document.getElementById("number-wrong").innerHTML = `non hai indovinato ${i+1} numero/i`;
        }
    }
}









/* function generateRandomUnique(blacklist, min, max) {
    //crezione della variabile che controlla il numero valido
    let check = false;
    let randomInt;
    //il ciclo continua finchè trova un numero valido
    while (!check) {
        //genero un numero
        randomInt = (Math.floor(Math.random() * ((max + 1) - min) + min));
        //se il numero non è presente nella lista
        if (!blacklist.includes(randomInt)) {
            //se trovo un numero presente esco dal ciclo while
            check = true;
        }
    }
    return randomInt;
}

const listNumber = [];

//funziona che genera  5 numeri
function generateNumber(number) {
    //creo un array per contenere i numeri
    const numberList = [];
    //per ogni numero ne genero una nuova in un'altra cella
    for (let i = 0; i < number; i++) {
        //aggiungo la funzione che crea i numeri
        numberList.push(generateRandomUnique(numberList, 1, 20));
    }
    return numberList;
}

function generateInnerNumber(number) {
    const numberGenerate = document.getElementById("number-generate");
    numberGenerate.innerHTML = "";
    numberGenerate.innerHTML = generateNumber();

}

document.getElementById("random-number").addEventListener('click', function () {

    generateInnerNumber()
}) */