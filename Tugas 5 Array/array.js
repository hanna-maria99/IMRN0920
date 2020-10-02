console.log(" = NOMOR 1 = ")
//No. 1 Range
//Jika parameter pertama dan kedua tidak diisi 
//maka function akan menghasilkan nilai -1

function range(startNum, finishNum){
    var angka=[];    
    if(startNum < finishNum){
        for(var i = startNum; i <= finishNum; i++){
            angka.push(i);
        }
    }else if(startNum>=finishNum){
        for(var j=startNum; j >= finishNum; j--){
            angka.push(j);
        }
    }else if(startNum <= finishNum){
        for(var k=startNum; k>finishNum; k++){
            angka.push(k);
        }
    }else if(startNum >= finishNum){
        for(var m=startNum; m>= finishNum; m--){
            angka.push(m);
        }
    }
    return angka;
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
//console.log(range()) // -1 

console.log(" = NOMOR 2 = ")
//soal no. 2 Range with Step

function rangeWithStep(startNum, finishNum, step){
    var kosong=[];
    if(startNum <= finishNum){
        for(var o = startNum; o <= finishNum; o+=step){
            kosong.push(o);
        }
    }else if(startNum <= finishNum, step==3){
        for(var p = startNum; p <= finishNum; p+=step){
            kosong.push(p);
        }
    }else if(startNum >= finishNum){
        for(var q=startNum; q>= finishNum; q-=step){
            kosong.push(q);
        }
    }
    return kosong;
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log(" = NOMOR 3 = ")
//no. 4 Sum of Range
//Jika parameter 3 tidak diisi makan step = 1

function sum(startNum, finishNum, step){
    var sums = [];
    if(startNum <= finishNum){
        for(var i = startNum; i <= finishNum; i++){
            sums.push(i);
        }
        var total = sums.reduce(function(a,b){
            return a + b;
        });
    }else if(startNum >= finishNum){
        for(var j = startNum; j >= finishNum; j--){
            sums.push(j);
        }
        var total = sums.reduce(function(a,b){
            return a + b;
        });
    }
    return total;
}

console.log(sum(1,10)) // 55
//console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
//console.log(sum(20, 10, 2)) // 90
// console.log(sum(1)) // 1
// console.log(sum()) // 0 

console.log(" = NO. 4 = ")
// No.4 Array Multidimensi 

function dataHandling(){
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ] 
    
    for(var a=0; a< input.length; a++ ){
        var isidata = input[a];
            console.log(
                "Nomor ID: " + input[a][0] + "\n",
                "Nama Lengkap: " + input[a][1]  + "\n",
                "TTL : " + input[a][2] + " " + input[a][3]  + "\n",
                "Hobi: " +input[a][4]    
            )       
    }
}console.log(dataHandling());

console.log(" = NO. 5 = ");
//no. 5 Balik Kata

function balikKata(balik){
    var kata = '';
    for(var z = balik.length-1; z >= 0; z--){
        kata+=balik[z];
    }return kata;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log(" = NO. 6 = ")
//no. 6 Metode Array
function dataHandling2(){
    var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

    input.splice(4,1,"Pria", "SMA International Metro")
    console.log(input);
    
    var dateTgl = input[3].split("/")   
    var formatting = dateTgl.join("-")

    var Namabulan = dateTgl[1];
    switch(Namabulan){
        case '01':
            month="Januari";
            break;
        
        case '02':
            month="February";
            break;
        
        case '03':
            month="Maret";
            break; 
        
        case '04':
            month="April";
            break;
        
        case '05':
            month="Mei";
            break;
    
        case '06':
            month="Juni";
            break;

        case '07':
            month="Juli";
            break;
        
        case '08':
            month="Agustus";
            break;
        
        case '09':
            month="September";
            break;

        case '10':
            month="Oktober";
            break;
        
        case '11':
            month="November";
            break;
        
        case '12':
            month="Desember";
            break;
    }
    console.log(month);
    
    var sorted = dateTgl.sort(function(v1, v2)
    {
        return v2-v1
    });
    console.log(sorted);

    console.log(formatting);

    var ambilNama= input[1].slice(0,15)
    console.log(ambilNama)

}console.log(dataHandling2());

