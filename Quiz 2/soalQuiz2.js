// //no. 1 SOAL CLASS SCORE (10 poin + 5 Poin ES6)

// class Score{
//     constructor(subject,email){
//         this.subject = subject;
//         this.email=email;
//         this.points=[1,2,3,4,5,6,7]
//     }

//     hitung=()=>{
//         var total=0;
//         for(var i= 0 ; i < this.points.length ; i++){
//             total += this.points[i]
//         }
//         var aver = total/this.points.length;
        
//     console.log(aver)   
//     }  
// }
// var nilai = new Score();
// nilai.hitung();


// //no. 2 Create Score
// const data = [
//     ["email", "quiz-1", "quiz-2", "quiz-3"],
//     ["abduh@mail.com", 78, 89, 90],
//     ["khairun@mail.com", 95, 85, 88],
//     ["bondra@mail.com", 70, 75, 78],
//     ["regi@mail.com", 91, 89, 93]
//   ]
  
// function viewScores(data, subject){
//     var dataArr=[];
//     var namaSubject = subject;

//     if(data.length <=0){
//         return [];
//     }

//     for(var i = 0; i<data.length;i++){
//         var isi ={};
        
//         isi.email= data[i][0];
//         isi.subject= data[i][1];
//         isi.nilai = data[i][2];

//         dataArr.push(isi);
//     }
//     return dataArr;
// }

// console.log(viewScores(data, "quiz-1"))
// console.log(viewScores(data, "quiz-2"))
// console.log(viewScores(data, "quiz-3"))

//no. 3 Recap Score
var data = [
    ["abduh@mail.com", 85.7],
    ["khairun@mail.com", 89.3],
    ["bondra@mail.com", 74.3],
    ["regi@mail.com", 91]
] 

const recapScore=(data)=>{
    var datas = data.length;
     for(var i=0; i< datas ;i++){
        var nilai = data[i][1];
        var predikat='';

        if(nilai > 70){
            predikat= "participant"
        }
        else if(nilai > 80){
            predikat = "graduate"
        }
        else if(nilai > 90){
            predikat = "honour"
        }   

        var email = [i] + "Email: " + data[i][0]
        var avgScore = "Rata-rata: " + data[i][1]
        var pred = "Predikat: " + predikat

        console.log(email)
        console.log(avgScore)
        console.log(pred)
     }  
}   
recapScore(data);