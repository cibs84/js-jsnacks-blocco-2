// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Creo variabile dove salvo la somma dei numeri inseriti dall'utente
let sum = 0;


// -------- ESERCIZIO CON IL CICLO FOR -------- 


// Chiedo di inserire 5 numeri che andrò poi a sommare
// Per ogni numero:
for (i = 0; i < 5; i++) {
    // Chiedo di inserire un numero
    let userNumber = parseInt( prompt(`${i+1}/5 - Inserisci un numero`) );
    // Sommo il numero inserito agli altri già forniti
    sum += userNumber;
}

// Stampo in console la somma dei numero inseriti dall'utente
console.log('Somma con ciclo FOR: ', sum);


// -------- ESERCIZIO CON IL CICLO WHILE -------- 

// Resetto la variabile 'sum' che contiene il valore elaborato nel precedente ciclo 'for'
sum = 0;

// Creo variabile da utilizzare nel ciclo while
let j = 0;

// Chiedo di inserire 5 numeri che andrò poi a sommare
// Per ogni numero:
while (j < 5) {
    // Chiedo di inserire un numero    
    let userNumber = parseInt( prompt(`${j+1}/5 - Inserisci un numero`) );
    // Sommo il numero inserito agli altri già forniti
    sum += userNumber;
    // Incremento di 1 la variabile 'j' per rendere la condizione avverabile e permettere la conclusione del ciclo
    j++;
}

// Stampo in console la somma dei numero inseriti dall'utente
console.log('Somma con ciclo WHILE: ', sum);