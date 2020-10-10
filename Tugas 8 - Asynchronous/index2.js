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


//jawaban :
async function asyncCall(){
    let t = 10000;
    for(let i =0; i< books.length;i++){
        t = await readBooksPromise(t, books[i])
        .then(function (sisaWaktu)
        {
            return sisaWaktu;
        })
        .catch(function(sisaWaktu){
            return sisaWaktu;
        })
    }
    console.log("selesai")
}
asyncCall();
