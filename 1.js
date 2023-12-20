// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
    //...
    if (typeof a === 'number' && typeof b === 'number') {
        const result = a + b
        callback(null, result);
    } else {
        callback(new Error('Errore'), null)
    }
    // result = a + b;
  
    // callback(result)
};
  
function displayResult(error, result) {
    //....
    if (error) {
        console.log(error.message)
    } else {
        console.log(result)
    }
    
}
  
performOperation('r', 3, displayResult);
