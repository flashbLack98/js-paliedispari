/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const parola = prompt("inserire una parola");
console.log(parola);

function parolaPali(scelta) {
    const parolaScomposta = parola.split("");
    console.log(parolaScomposta);

    const parolaReverse = parolaScomposta.reverse();
    console.log(parolaReverse);

    const parolaUnita = parolaReverse.join("");
    console.log(parolaUnita);

    if (parola === parolaUnita) {
        alert("la tua parola è palindroma");
    } else {
        alert("la tua parola non è palindroma");
    }

}

const parolaDaControllare = parolaPali(parola);