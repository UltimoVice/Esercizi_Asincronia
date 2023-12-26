// Crea una catena di Promises per simulare un'operazione asincrona in più fasi. -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
// La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

function fetchUserData() {
    //....
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve( { id: 1, name: 'John' } )
                return 'Utente'
            } else {
                reject('Utente non trovato')
            }
        }, 500)
    })
}
  
function fetchUserPosts(userId, userName) {
    //....
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        if (userId === 1 && userName === 'John') {
            resolve (['Post 1', 'Post 2', 'Post 3'])
        } else {
            reject ('Post non trovati');
        }
    }, 1000)
})
}
  
fetchUserData()
  .then((userData) => {
      console.log(userData);
      return fetchUserPosts(userData.id, userData.name);
  })
  .then((userPosts) => {
      console.log(userPosts);
  })
  .catch((error) => {
      console.error(error);
  });