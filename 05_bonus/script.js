/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluta(name) {
    const dataOggi = new Date();            // Restituisce un oggetto data con la data e l'ora correnti.
    const orario = dataOggi.getHours();     // Restituisce l'orario corrente, come numero (0-23), dell'oggetto "dataOggi"
    
    if (orario >= 6 && orario <= 13) {      // Orario compreso nel range 6-13
        return "Buongiorno " + name;
    }

    else if (orario > 13 && orario <= 17) {
        return "Buon pomeriggio " + name;
    }

    else {
        return "Buonasera " + name;
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluta(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.