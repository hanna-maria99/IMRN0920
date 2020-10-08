//no. 1 animal class
//release 0, setter getter

class Animal {
    constructor(name){
        this.name = name;
        this.legs=4;
        this.cold_blooded=false;
    }
    get namaBinatang(){
        return this.name;
    }
    set namaBinatang(x){
        this.name = x;
    }

}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false


//release 1
class Ape extends Animal{
    yell(){
        console.log("Auooo")
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

class Frog extends Animal{
    jump(){
        console.log("hop hop")
    }
}
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 


//No. 2
class Clock {
    constructor(template, timer){
        this.template = template;
        this.timer = timer;
        this.start;
        this.stop;
    }

    render=()=> {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        var output = template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }

      stop=()=>{
          clearInterval(this.timer);
      }

      start=()=>{
          this.render;
          this.timer = setInterval(this.render,1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 