var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
waktu = 10000; 
function readBooksPromise(){
        readBooksPromise()
        .then(function(selesai){
        console.log(selesai);
            })
        .catch(function(habis){
            console.log(habis);
        })
}
readBooksPromise()
