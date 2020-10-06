console.log('No 1 Fungsi Arrow')
//const golden = function goldenFunction(){
//     console.log("this is golden!!")
//   }
   
//   golden()
let golden=()=>{
    console.log("This is golden!!")
}
golden();


console.log('No 2 Objek literal')
//soal
// const newFunction = function literal(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       fullName: function(){
//         console.log(firstName + " " + lastName)
//         return 
//       }
//     }
//   }
   
//   //Driver Code 
//   newFunction("William", "Imoh").fullName() 

const newFunction=(firstName, lastName)=>{
    let fullName;
    return{
        fullName: function(){
            console.log(firstName+ " "+ lastName)
            return;
        }
    }
} 
newFunction("William", "Imoh").fullName() 


console.log('No 3 Destructuring')
//soal
// const newObject = {
//     firstName: "Harry",
//     lastName: "Potter Holt",
//     destination: "Hogwarts React Conf",
//     occupation: "Deve-wizard Avocado",
//     spell: "Vimulus Renderus!!!"
//   }
// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const destination = newObject.destination;
// const occupation = newObject.occupation;

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation} = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation)


console.log('No 4 Array Spreading')
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined = west.concat(east)

const combined=[west, east]
//Driver Code
console.log(combined)

console.log('No. 5 - Template Literal')
const planet = "earth"
const view = "glass"
// var before = 'Lorem ' + view + 'dolor sit amet, ' +  
//     'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +
//     'incididunt ut labore et dolore magna aliqua. Ut enim' +
//     ' ad minim veniam'
 
const before ='Lorem '+ `${view}` + 'dolor sit amet, ' +
'consecterur adipsicing elit,' + `${planet}` + 'do eiusmod tempor '+
'incididunt ut labore et dolore magna aliqua. Ut enim' + 'ad minim veniam'

// Driver Code
console.log(before) 


