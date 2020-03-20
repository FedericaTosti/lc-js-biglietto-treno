// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.


// messaggio all'utente
alert("Gentile passeggero la ringraziamo per averci scelto")


// creazione variabile km
var km;
// creazione variabile anni
var anni;

// chiedi all'utente km e età
km = parseInt(prompt("Quanti km deve percorrere?"));

anni = parseInt(prompt("Quanti anni ha?"));


// creazione variabile costoBiglietto
var costoBiglietto = km * 0.21;

console.log(costoBiglietto);

// in caso di sconti (if else)
if (anni <= 17) {
  costoBiglietto = costoBiglietto * 0.8;
} if (anni > 65 ){
  costoBiglietto = costoBiglietto * 0.6;
}

// stampo il risultato
document.getElementById('biglietto').innerHTML = "Il prezzo del suo biglietto è: " + costoBiglietto.toFixed(2) + "€";
