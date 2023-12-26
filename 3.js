// Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
// Utilizzare setTimeout per simulare un'operazione asincrona.
function delayedPromise() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve ('Perchè esiste questo esercizio?');
            } else {
                reject ('I dunno');
            }
        }, 2000)
    })
}

delayedPromise()
.then ((data) => {
    console.log(data);
})
.catch ((error) => {
    console.log(error)
});
