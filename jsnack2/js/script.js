// Calcola la somma e la media dei primi 10 numeri.

// CREO LA VARIABILE PER LA SOMMA
let somma = 0;

// SCORRO I PRIMI 10 NUMERI
// PER OGNI NUMERO:
for (i = 0; i < 10; i++) {    
    // FACCIO LA SOMMA
    somma += i+1;
}

// CALCOLO LA MEDIA DELLA SOMMA DEI NUMERI
const media = somma/10;

// STAMPO IN CONSOLE LA SOMMA E LA MEDIA DEI PRIMI 10 NUMERI
console.log('somma: ', somma);
console.log('media: ', media);
