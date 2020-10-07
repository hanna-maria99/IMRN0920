// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini

function baca(){
  waktu = 10000;
  books.forEach(
      buku => readBooks(waktu, buku, (spent) => {
         // if(waktu > books.timeSpent){
            //  for(var i=0; i > waktu ; i++){
            //    console.log(spent)
            // }
         // }
        }))
    }
baca();

