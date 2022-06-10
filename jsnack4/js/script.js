// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Creo due array con un numero di elementi differente
let array1 = [10, 5, 8, 94, 64, 73];
let array2 = [7, 5];

// Stampo in console il numero di elementi presenti nei due array
console.log('length di array1 INIZIALE: ', array1.length);
console.log('length di array2 INIZIALE: ', array2.length);

// Ciclo FINCHE' il numero di elementi presenti nei due array non sarà uguale
// Per ogni elemento:
while (array1.length !== array2.length) {
    // SE la lunghezza dell'array1 è minore di quella dell'array2
    // PUSHO nell'array1 un elemento random
    if (array1.length < array2.length) {
        array1.push(Math.random());
    // ALTRIMENTI sarà la lunghezza dell'array2 ad essere minore di quella dell'array1
    // Quindi PUSHO nell'array2 un elemento random
    } else {
        array2.push(Math.random());        
    }
}

// Stampo in console la lunghezza degli array quando è uguale per entrambi
console.log('length di array1 FINALE: ', array1.length);
console.log('length di array2 FINALE: ', array2.length);
