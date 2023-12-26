// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.
function fetchDataFromAPI() {
  //....
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true === true) {
            resolve ('name: "John", age: 30');
        } else {
            reject('Error');
        }
    }, 1000)
  })
}

const check = fetchDataFromAPI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });



  