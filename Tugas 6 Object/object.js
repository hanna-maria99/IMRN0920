//no. 1 Array to Object

var people = [ 
        ["Bruce", "Banner", "male", 1975], 
        ["Natasha", "Romanoff", "female"] 
        ]

var biodata={}
    biodata.fullname={
        names:["Bruce", "Banner","Natasha","Romanoff","Tony","Stark","Pepper","Pots"]
    }
    biodata.gender={
        gender:['male','female']
    }
    biodata.age={
        age:[1975,"", 1980, 2023]
    }


var person = ["firstName", "lastName", "gender", "age"]

function arrayToObject(arr) {
    var now = new Date()
    var thisYear = now.getFullYear() // 2020 (tahun sekarang)

    for(var i=0; i<people.length;i++){
        var objek={};
        var nama='1. ' + biodata.fullname.names[0] +" "+ biodata.fullname.names[1] + ":"
         objek[person[0]] = biodata.fullname.names[0],
         objek[person[1]] = biodata.fullname.names[1],
         objek[person[2]] = biodata.gender.gender[0]
         if(biodata.age.age===''){
            objek[person[3]] = "Invalid Birth Year"
         }else if(biodata.age.age[0] < 2020){
            objek[person[3]] = (thisYear - biodata.age.age[0])
         }
    }console.log(nama,objek)

    for(var i=0; i<people.length;i++){
        var objek={};
        var nama='2. ' + biodata.fullname.names[2]+" "+ biodata.fullname.names[3] + ":"
         objek[person[0]] = biodata.fullname.names[2],
         objek[person[1]] = biodata.fullname.names[3],
         objek[person[2]] = biodata.gender.gender[1]
         if(biodata.age.age[1]===''){
            objek[person[3]] = "Invalid Birth Year"
         }else if(biodata.age.age[1] < 2020){
            objek[person[3]] = (thisYear -biodata.age.age[1])
         }
    }console.log(nama,objek)

    for(var i=0; i<people.length;i++){
        var objek={};
        var nama='3. ' + biodata.fullname.names[4] +" "+ biodata.fullname.names[5]+ ":"
         objek[person[0]] = biodata.fullname.names[4],
         objek[person[1]] = biodata.fullname.names[5],
         objek[person[2]] = biodata.gender.gender[0]
         if(biodata.age.age[3]===''){
            objek[person[3]] = "Invalid Birth Year"
         }else if(biodata.age.age[2]< 2020){
            objek[person[3]] = (thisYear - biodata.age.age[2])
         }
    }console.log(nama,objek)

    for(var i=0; i<people.length;i++){
        var objek={};
        var nama='4. ' + biodata.fullname.names[6] +" "+ biodata.fullname.names[7]+ ":"
         objek[person[0]] =biodata.fullname.names[6],
         objek[person[1]] = biodata.fullname.names[7],
         objek[person[2]] = biodata.gender.gender[1]
         if(biodata.age.age[3] >thisYear){
            objek[person[3]] = "Invalid Birth Year"
         }else if(biodata.age.age[3] < 2020){
            objek[person[3]] = (thisYear - biodata.age.age[3])
         }
    }console.log(nama,objek)
}
//no. 2 Shopping Time
var tokoX={
    Stacattu:1500000,
    Zoro: 500000,
    HnN: 250000,
    Uniklooh: 175000,
    caseHp: 5000
}
var barang={}
    barang.namaBarang={
        namaBrg:['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    }

var member={}
    member.memberId={
        memberId:['1820RzKrnWn08','', '82Ku8Ma742',"234JdhweRxa53"]
    }
    member.money={
        money:["2475000", "2475000","15000"]
    }

function shoppingTime(memberId, money) {
    var belanja={}
    var listPurchased=[];

    if(memberId===''){
        console.log("Mohon maaf, toko X hanya berlaku untuk member saja")
    }else if(memberId == member.memberId[0-3] || member.money < money){
        console.log("Mohon maaf, uang tidak cukup")
    }else if(memberId == "1820RzKrnWn08" || member.money.money[1]==total){
        var total= tokoX.Stacattu+ tokoX.Zoro+ tokoX.HnN +tokoX.Uniklooh + tokoX.caseHp
        for(var i=0; i<total.sum; i++){
            listPurchased[i]+= barang.namaBarang.namaBrg[0]
        }

    }return listPurchased;
}

  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


  //No. 3 Naik angkot
  function naikAngkot(listPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    angkot=[];
    listPenum={};
    listPenum2={};

    listPenumpang={};
    listPenumpang.nama={
        name:["Dimitri", "Icha"]
    }
    duit={};
    duit.money={
        duit:[2000, 8000]
    }
    peran = ["penumpang", 'naikDari', "tujuan", "bayar: "]


    listPenum[peran[0]] = listPenumpang.nama.name[0]
    listPenum[peran[1]] = rute[1]
    listPenum[peran[2]] = rute[5]
    listPenum[peran[3]] = duit.money.duit[1]

    listPenum2[peran[0]] = listPenumpang.nama.name[1]
    listPenum2[peran[1]] = rute[0]
    listPenum2[peran[2]] = rute[1]
    listPenum2[peran[3]] = duit.money.duit[0]

    angkot.push(listPenum, listPenum2)

    return angkot;

}
 console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]

