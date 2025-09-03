/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function estraiInizialiNomi (array) {

    let iniziali = [];
    let elemento;
    let lettera;

    for (let i = 0 ; i < array.length ; i++) {

        elemento = array[i];        // Copio l'elemento corrente dell'array nella variabile elemento
        lettera = elemento[0];      // Estraggo la prima lettera dalla stringa contenuta in elemento
        iniziali.push(lettera);     // Aggiungo la lettera ricavata al nuovo array "iniziali"
    }
    
    return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(estraiInizialiNomi(names));

// console.log(estraiInizialiNomi(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]