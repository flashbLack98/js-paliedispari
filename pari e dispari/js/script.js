/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */



const btnUp = document.querySelector(".pari");
const btnDown = document.querySelector(".dispari");

function numCasuale() {
    Math.ceil(Math.random() * 5);
}



//L'UTENTE DEVE SCEGLIERE PARI O DISPARI
btnUp.addEventListener("click", function () {
    console.log("freccia su");

    //L'UTENTE SCEGLIE UN NUMERO DA 1 A 5
    const numUtente = prompt("Scegli un numero da 1 a 5");
    console.log("numero utente " + numUtente);
    //se il numero è minore di 0 o superiore di 5 o se è una stringa il risultato è nullo

    //GENERIAMO UN UN NUMERO PER IL COMPUTER DA 1 A 5
    const numComputer = Math.ceil(Math.random() * 5);
    console.log("numero del computer " + numComputer);

    //GENERIAMO UN UN NUMERO PER IL COMPUTER DA 1 A 5 CON UNA FUNZIONE
    //const numComputer = numCasuale();

    // SOMMIAMO I DUE NUM
    const sommaNum = parseInt(numUtente) + numComputer;
    console.log("somma dei due numeri " + sommaNum);;

    //CAPIAMO SE IL RISULTATO E' PARI O DISPARI
    const indicePari = sommaNum % 2 === 0;
    console.log(sommaNum % 2 === 0);


    if (indicePari) {
        alert("hai vinto");
    } else {
        alert("hai perso");
    }

});


btnDown.addEventListener("click", function () {
    console.log("freccia giù");

    //L'UTENTE SCEGLIE UN NUMERO DA 1 A 5
    const numUtente = prompt("Scegli un numero da 1 a 5");
    console.log("numero utente " + numUtente);
    //se il numero è minore di 0 o superiore di 5 o se è una stringa il risultato è nullo

    //GENERIAMO UN UN NUMERO PER IL COMPUTER DA 1 A 5
    const numComputer = Math.ceil(Math.random() * 5);
    console.log("numero del computer " + numComputer);

    // SOMMIAMO I DUE NUM
    const sommaNum = parseInt(numUtente) + numComputer;
    console.log("somma dei due numeri " + sommaNum);;

    //CAPIAMO SE IL RISULTATO E' PARI O DISPARI
    const indicePari = sommaNum % 2 === 0;
    console.log(sommaNum % 2 === 0);


    if (!indicePari) {
        alert("hai vinto");
    } else {
        alert("hai perso");
    }
});



/*


console.log("numero utente " + numUtente);
//se il numero è minore di 0 o superiore di 5 o se è una stringa il risultato è nullo


//GENERIAMO UN UN NUMERO PER IL COMPUTER DA 1 A 5
const numComputer = Math.ceil(Math.random() * 5);
console.log("numero del computer " + numComputer);


// SOMMIAMO I DUE NUM
const sommaNum = parseInt(numUtente) + numComputer;
console.log("somma dei due numeri " + sommaNum);;


//CAPIAMO SE IL RISULTATO E' PARI O DISPARI
const indicePari = sommaNum % 2 === 0;
console.log(sommaNum % 2 === 0);


//DICHIARIAMO IL VINCITORE
//se l'utente sceglie pari e il num è pari :vince
// se l'utente sceglie dispari e il num è dispari :vince

//se no perde

if (pari) && (indicePari) {
    alert("hai vinto");
} else if (dispari && !indicePari) {
    alert("dispari hai vinto");
} else {
    alert("hai perso");
} */


