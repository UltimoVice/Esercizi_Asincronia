// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.
function runCallbacks(callbacks) {
  //....
  callbacks.forEach(call => call())
}
function firstCallback() {
  //...
  console.log('Prima');
}
function secondCallback() {
  //...
  console.log('Seconda');
}

function thirdCallback() {
  //...
  console.log('Terza');
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);