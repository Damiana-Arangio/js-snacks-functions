/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const filtraIniziali = (array, carattere) => {

    let nomiFiltrati = [];
    let elemento;

    for (let i = 0; i < array.length; i++) {

        elemento = array[i];                    // Copio l'elemento corrente dell'array nella variabile "elemento"
        if (elemento[0] === carattere) {         // Controllo se il primo carattere della stringa è uguale al carattere cercato
            nomiFiltrati.push(elemento)         // Aggiungo la stringa contenuta in elemento al nuovo array "nomiFiltrati"
        }
    }

    return nomiFiltrati;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(filtraIniziali(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
