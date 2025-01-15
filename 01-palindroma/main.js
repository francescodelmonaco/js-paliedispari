// - chiedere all’utente di inserire una parola
// - creare una funzione per capire se la parola inserita è palindroma

// chiediamo all'utente la parola
let parola = prompt("Inserisci una parola", "Anna");

// creiamo la funzione di reverse della parola inserita dopo averla trasformata in caratteri minuscoli in modo da bypassare le maiuscole, e di controllo tra parola reversata e parola inserita
function controlloPalindromo (parola) {
    let parolaMinuscola = parola.toLowerCase();
    let parolaReverse = parolaMinuscola.split("").reverse().join("");
    return parolaReverse === parolaMinuscola;
}

// condizione if per la stampa della risposta
if (controlloPalindromo (parola)) {
    console.log (`La parola ${parola} da te inserita è palindroma`);
} else {
    console.log (`La parola ${parola} da te inserita non è palindroma`);
}