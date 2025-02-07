//so the normal way by whjich we encountered async functions was
// function callback(){
//   console.log("3 seconds have passed");
// }
// setTimeout(callback,3000);

//so we know the internal working and what basically it does is call
//the callback function after 3 seconds have passed

//but we can do it in a better way 
//a syntactically better way by using promises

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

//for now dont worry about the part above just focus what is writtern 
//below

// function callback() {
// 	console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)

//this does the same thing setTImeoutPromisified is a function 
//taking seconds in ms as input and returns an object of class promise
//this object then calls our callback function using .then
//so this does the same thing as our settimeout did but has a 
//few advantages


// function waitfor3S(resolve){
//   setTimeout(resolve,3000);
// }

// function main(){
//   console.log("main is called");
// }

// waitfor3S(main);

//so the thing above is just a wrapper for settimeot
//we pass the main function as an arg in waitfor 3s func 
//where waitfor3s just passses this into settimeout 
//hence main gets called after 3s
//which could have been done directly by settimeout
//hence this is just a wrapper for settimeot

// function random(){

// }

// let p = new Promise(random);
// console.log(p);

//it logs out Promise pending 
//as the orignal defination says we can see promise tells us about the 
//eventual completion 
//for this eventual completion hum Promise ka object initialise krvate vkt
//usme ek function pass krte ab iss function ke andar bhi ek function use
//hota hai jisko hum resolve kehte hai--> jab yeh resolve function call hoga
//tab promise ko pta chl jaega ki ab hum task krskete hai
//iske baad vo .then ka use krke jiss function ko call krna chahta tha vo call hojaega
//ab vo jo resolve function tha vo actually setitime out hi use kr rha tha
//par humare end user ko vo nhi dikhega

// function random(resolve){
//   resolve();
// }

// let p = new Promise(random);

// function callback(){
//   console.log("This has been executed")
// }
// p.then(callback);

//in this case jis fucntion pe humara promise depend  krtaa tha uska bhi jo pehla resolve function tha 
//vo instantly call hogya to promise instantly clearance milgyi aur use p.thn ko instantly execute krdiya

// function random(resolve){
//   setTimeout(resolve,3000);
// }

// let p = new Promise(random);

// function callback(){
//   console.log("This has been executed")
// }
// p.then(callback);

//ab is case mai humara promise jis random func pe depend krta tha uska bhi jo pehla resolve function tha 
//vo settimeout ki vjh se 3000ms ke baad call hua to humare promise ko 3s ke baad clearance milli 
//hence humara callback function bhi 3s ke baad call hua 
//toh ek trh se humne setimeout ko bina use kre promise ko use krke asynchronoulsy casllback kiya 
//yeh sb directly callback se hoskta tha par hum isse promise se krenge to better rhega

// const fs = require("fs");

// function readThefile(finalvalue){
//   fs.readFile("a.txt","utf-8",function(err,data){
//     finalvalue(data);
//   })
// }

// function readfile(){
//   return new Promise(readThefile);
// }

// const p = readfile();



// function abfinaldo(v){
//   console.log(v);
// }
// p.then(abfinaldo)

// console.log("hi this should be printed first");

// function thissetstime(timer){
//   setTimeout(timer,3000);
// }

// function settimeoutpromisified(){
//   return new Promise(thissetstime)
// }

// const p = settimeoutpromisified()

// function finalvalue(){
//   console.log("timer has finished");
// }

// p.then(finalvalue)


//now lets write our own promisec class and understand its funcitionality

// class Promise2{
//   constructor(fn){
//     function afterdone(){
//       this.resolve();
//     }
//     fn(afterdone);
//   }
//   then(callback){
//     this.resolve = callback;
//   }
// }

//general schema
//promise class -> implementation of a promisified async function -> using promisifie functions


//now lets write our own promisified verison of fs.read file
// const fs = require("fs");
// function ReadTheFileNow(resolve){
//     fs.readFile("a.txt","utf-8",function (err,data){
//       resolve(data);
//     });
// }

// function readfile(){
//   return new Promise(ReadTheFileNow);
// }
// const p = readfile();

// function callback(cont){
//   console.log(cont);
// }

// p.then(callback);
class Promise2{
  constructor(fn){
    function afterdone(){
      this.resolve();
    }
    fn(afterdone);
  }
  then(callback){
    this.resolve = callback;
  }
}

console.log("hi this should be printed first");

function thissetstime(timer){
  setTimeout(timer,3000);
}

function settimeoutpromisified(){
  return new Promise2(thissetstime);
}

let p = settimeoutpromisified()

function finalvalue(){
  console.log("timer has finished");
}

p.then(finalvalue)