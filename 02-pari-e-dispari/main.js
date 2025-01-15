// - l’utente sceglie pari o dispari e inserisce un numero da 1 a 5
// - generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// - sommiamo i due numeri
// - stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// - dichiariamo chi ha vinto

// chiediamo all'utente di scegliere pari o dispari
let sceltaUtente = prompt("Scegli pari o dispari", "Pari");
console.log (`Hai scelto ${sceltaUtente}`);

// chiediamo all'utente di scegliere un numero tra 1 e 5
let numeroUtente = parseInt(prompt("Scegli un numero tra 1 e 5", "2"));
console.log (`Hai scelto il numero ${numeroUtente}`);

// creiamo una funzione per generare un numero da 1 a 5 per il computer
function numeroRandom () {
    return Math.floor(Math.random() * 5) + 1;
}

// assegniamo il numeroRandom al valore della variabile numeroComputer
let numeroComputer = numeroRandom();
console.log (`Il numero del computer è ${numeroComputer}`);

// creiamo la funzione con la somma dei due numeri
function somma (numeroUtente, numeroComputer) {
    return numeroUtente + numeroComputer;
}

// assegniamo il valora somma alla variabile sommaNumeri
let sommaNumeri = parseInt(somma (numeroUtente, numeroComputer));
console.log(`La somma dei due numeri è ${sommaNumeri}`);

// condizione if se la somma è pari o dispari con stampa vincitore
if ((sommaNumeri % 2 == 0 && sceltaUtente.toLowerCase() === "pari") || (sommaNumeri % 2 !== 0 && sceltaUtente.toLowerCase() === "dispari")) {
    console.log (`Hai vinto!`);
} else {
    console.log (`Ha vinto il computer!`);
}