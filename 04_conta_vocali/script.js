/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(stringa) {
    let contatore = 0;
    
    // Per ogni lettera controllo se è una vocale
    for (i = 0; i < stringa.length ; i++) {
        if (stringa[i] === "a" || stringa[i] === "e" || stringa[i] === "i" || stringa[i] === "o" || stringa[i] === "u") {
            contatore +=1;
        }
    }

    return contatore;
}

// Invoca la funzione qui e stampa il risultato in console
const num = contaVocali(word);
console.log("La parola " + word + " contiene " + num + " vocali ");


//Risultato atteso se si passa 'javascript': 3 (a, a, i)