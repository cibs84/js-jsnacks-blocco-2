// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// Creo array dove salvare i numeri inseriti dall'utente
const userNumbers = [];
// Creo variabile per la somma
let somma = 0;

// Creo un ciclo while che si eseguirà fino a che la somma non sarà 50
while (somma < 50) {
    // Chiedo all’utente un numero
    let userNumber = parseInt( prompt('Inserisci un numero:') );
    // Inserisco il numero dell'utente nell'array
    userNumbers.push( userNumber );
    // Creo la somma dei numeri inseriti dall'utente
    somma += userNumber;
}

