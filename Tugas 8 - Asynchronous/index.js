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

//Jawaban
let t=10000;
let i=0;

function panggil(){
    readBooks(t, books[i], function(sisaWaktu){
        t=sisaWaktu
        i++
        if(i < books.length)
        panggil()
    })
}
panggil()

