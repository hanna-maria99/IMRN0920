//no. 1 while-loop

console.log("LOOPING PERTAMA ");

var genap = 0;

while(genap < 20){
    genap+=2
    console.log( genap + "- I love coding")
}

// console.log("LOOPING KEDUA");
var angka = 22;

while(angka > 2 ){
    angka-=2;
    console.log( angka + "- I will become a mobile developer")
}

//no. 2 for-loop
//Syarat:
// A. angka ganjil = Santai
// B. angka genap = Berkualitas
// C. kelipatan 3 dan ganjil = I love coding

for(var angkaGjp=1; angkaGjp <=20; angkaGjp++){
    //for(var kelipatanGjl = 0; kelipatanGjl <= 20; kelipatanGjl+=2)
    if((angkaGjp%2)==1){
        console.log(angkaGjp + ' - Santai');
    }else if((angkaGjp%2)===0){
        console.log(angkaGjp + ' - Berkualitas');
     }else if((kelipatanGjl%3)==0){
     //   console.log(kelipatanGjl + ' - I Love Coding')
    }
}

//No. 3 Membuat Persegi
var hasil1="";

for(var i=0; i<=4 ; i++){
    for(var j=0; j<8; j++){
       if(i==0){
           hasil1+= "#"
       }
    } console.log(hasil1);
}

//No. 4 Membuat tangga 
var hasil2="";

for(var i=0; i<7 ; i++){
    for(var j=0; j<1; j++){
       hasil2 += "#"
    } console.log(hasil2);
}

//No. 5 Membuat Papan Catur
var hasil5= "";

for(var catur1=0; catur1<8; catur1++){
    for(var catur2 = 0; catur2<8; catur2++)
        if((catur1%2)==1){
            if((catur2%2==2)){
                hasil5 =hasil5+" "
            }else{
                hasil5 =hasil5+" "
            }
        }
        else{
            if(catur2%2==0){
                hasil5 =hasil5+"#"
            }else{
                hasil5=hasil5+" "
            }
        }hasil5=hasil5+"\n"
    }console.log(hasil5)

    