function palindrome(checkPalin){
    var kata = '';
     for(var z = checkPalin.length-1; z >= 0; z--){
      kata+=checkPalin[z];
    }
     if(kata == checkPalin){
         console.log("true")
       }else if(kata !== checkPalin){
         console.log("false")
     }
 }
 
 console.log(palindrome("kasur rusak")) //true
 console.log(palindrome("haji ijah"))//true
 console.log(palindrome("nabasan"))//false
 console.log(palindrome("nababan"))//true
 console.log(palindrome("jakarta"))//false

 //no 14
 function balikString(kebalikan){
    var word = '';
      for(var a = kebalikan.length-1; a >= 0; a--){
       word+=kebalikan[a];
        }
    return word;
  }
  
  console.log(balikString("abcde"));//edcba
  console.log(balikString("rusak")); //kasur
  console.log(balikString("racecar"));//racecar
  console.log(balikString("haji")); //ijah


//no 15
// var i=1;
// var j=1;
// var panjang=10;
// var lebar =10;
// var pagar ="";

// while(j<=lebar){
//     while(i<=panjang){
//         pagar+=
//         i++
//     }
//     console.log(pagar);
//     pagar='';
//     i=1;
//     j++;
// }

var isi='';
var angka=101;
function ularTangga(){
      while(angka > 10){
      angka-=1
      process.stdout.write(angka + '\t')
  }
}
console.log(ularTangga()); 

//No 16

function DescendingTen(a, b){
  // while(angka > 91){
  //   angka--;
  //   process.stdout.write(angka + '\t')
var angka='';
  if(a < b){
    for(var i = a; i <= b; i++){
        angka.push(i);
    }
  // }else if(startNum>=finishNum){
  //   for(var j=startNum; j >= finishNum; j--){
  //       angka.push(j);
  //   }

  }return angka;
}

console.log(DescendingTen(100)); // 100 99 98 97 96 95 94 93 92 91
console.log(DescendingTen(10)); //10 9 8 7 6 5 4 3 2 1 
console.log(DescendingTen()); //-1

