//No. 1 
function teriak(){
    console.log("Halo Sanbers!");    
}
teriak();

//No. 2
var num1 = 12
var num2 = 4

function kalikan(){
    return num1*num2
}
var kali = kalikan();
console.log(kali);

//No. 3
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"

function introduce(){
    return(name, age,address,hobby);
}
var kenalan = introduce();
console.log("Nama saya " + name + ", umur saya " + age + ", alamat saya di "+ address + ", dan saya punya hobby yaitu "+ hobby+ "!");



//Mini quiz 
// //soal: 
// var panjang = 29;
// var lebar = 12;
// var tinggi = 8;
// total = panjang*lebar*tinggi
// console.log(total)
//jawaban:
function volume(panjang, lebar, tinggi){
    hasil = panjang * lebar * tinggi
    console.log(hasil)
}volume(29,12,8)