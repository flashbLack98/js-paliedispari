/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */



const btnPari = document.querySelector(".pari");
const btnDispari = document.querySelector(".dispari");

function numCasuale() {
    return Math.ceil(Math.random() * 5);
}


function indiceParita(n) {

    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function gioco(scelta) {
    //L'UTENTE SCEGLIE UN NUMERO DA 1 A 5
    const numUtente = prompt("Scegli un numero da 1 a 5");
    console.log("numero utente " + numUtente);
    //se il numero è minore di 0 o superiore di 5 o se è una stringa il risultato è nullo

    //GENERIAMO UN UN NUMERO PER IL COMPUTER DA 1 A 5
    const numComputer = numCasuale();
    console.log("numero del computer " + numComputer);



    // SOMMIAMO I DUE NUM
    const sommaNum = parseInt(numUtente) + numComputer;
    console.log("somma dei due numeri " + sommaNum);
    /*   function sommaNum() {
          parseInt(numUtente) + numComputer;
      }; */


    //CAPIAMO SE IL RISULTATO E' PARI O DISPARI
    const pari = indiceParita(sommaNum);
    console.log("il numero è pari? " + pari);


    if (scelta === "pari" && pari) {

        alert("hai schiacciato pari e il numero è pari hai vinto");

    } else if (scelta === "dispari" && !pari) {

        alert("hai schiacciato dispari e il numero è dispari hai vinto");

    } else {
        alert("hai perso");
    }

    //SE SCHIACCI PARI E IL NUMERO E' PARI : HAI VINTO
    //SE SCHIACCI DISPARI E IL NUMERO E' DISPARI : HAI VINTO
    //SE SCHIACCI PARI E IL NUMERO E' DISPARI : HAI PERSO




}



//L'UTENTE DEVE SCEGLIERE PARI O DISPARI
btnPari.addEventListener("click", function () {
    console.log("BOTTONE PARI");

    gioco("pari");

});


btnDispari.addEventListener("click", function () {
    console.log("BOTTONE DISPARI");

    gioco("dispari");
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


