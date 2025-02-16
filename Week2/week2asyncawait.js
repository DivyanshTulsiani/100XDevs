function setTimeoutPromisified(duration){
  return new Promise(function(resolve){
    setTimeout(resolve,duration);
  });
}


//* async function === a function that does a aync task by using promise 
// just a reminder to make u think this way  */

// function callback(){
//   console.log("1 second has passed");
// }
// setTimeoutPromisified(5000).then(callback);


//now our problem statement is 
//log hi after 1 sec
//log hello 3 sec after hi
//log hello there 5 sec after hello

// setTimeout(function(){
//   console.log("hi");
//   setTimeout(function(){
//     console.log("hello")
//     setTimeout(function(){
//       console.log("hello there")
//     },5000);
//   },3000)
// },1000)

// setTimeoutPromisified(1000).then(function(){
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function(){
//     console.log("hello");
//     setTimeoutPromisified(5000).then(function(){
//       console.log("hi there");
//     })
//   })
// })

// console.log("outside it");

// //we can clearly see that promise version looks better 
// //but we can improve this even more

// setTimeoutPromisified(1000).then(function(){
//   console.log("hi");
//   return setTimeoutPromisified(3000);
// }).then(function(){
//   console.log("hello");
//   return setTimeoutPromisified(5000);
// }).then(function(){
//   console.log("hi there");
// })

//while we were sorting a string

//lets say
// let s = "divyansh";

// const sorted = s.split("").sort().join("");
// console.log(sorted);

//as we can see we create a chain of operation we know
//s.split would give me a array which we will be able to sort
//and then .sort would give us an array which we would join
//to make a string


//on similar note we know settimeout promisified returns
//us a promise which we then use to call function inside .then
//we know the internal working

//similary we can return the settimeoutpprom with the given time
//it would return a promise and then add the .then outside

// async function solve(){
//   await setTimeoutPromisified(1000);
//   console.log("hi");
//   await setTimeoutPromisified(3000);
//   console.log("hello");
//   await setTimeoutPromisified(5000);
//   console.log("hi there");
// }

// solve();

// console.log("this is below solve function");

//the code presented above is just a syntactically sweeter
//verison of writing the same code using promises above
//it does the same thing but the syntax becomes way easier 
//to understand

//we may think this is sync code especially the way it is wriiten
//but eve out here it logs this is below solve func before
//even when it is writen below solve function

//under the hood it is same as writing settimeout and then doing
//.then()

//anonymous function play a huge role in writing code this way
//instead of writing it outside and giving the name there 
//we simply define the anonymous function right inside the 
//the .then part
// setTimeoutPromisified(1000).then(function(){
//   console.log("hi");
//   return setTimeoutPromisified(3000);
// }).then(function(){
//   console.log("hello");
//   return setTimeoutPromisified(5000);
// }).then(function(){
//   console.log("hi there");
// })

//even this performs the same bck to back async tasks
//as the promisified version does
//righting this is just a syntactically sweeter way
//all actions happen one after another with the given time
//humari problem hi yeh thi ki hume back to back ek ke baaf ek
//async task krna tha plainly async setimeout likhumga toh vo web api mai ek sath chle jaenge aur time sbka sath mai shuru hoga back to back nhi aaenge
//isliye hi to callback hell aaya->>>> uske baad hum promisified verion pe gye---->fir promise chaining sikhi usse syntax thda better hogya----->fir hum aaye aync await pe jo issse bhi acha syntax hai par under the hood same hi cheez hai

// async function solve(){
//   await setTimeoutPromisified(1000);
//   console.log("hi");
//   await setTimeoutPromisified(3000);
//   console.log("hello");
//   await setTimeoutPromisified(5000);
//   console.log("hi there");
// }

// solve();

// console.log("this is below solve function");

//kisi ka bhi promisifeid version bnane ka kya mtlb hai?
//basically vo function samer kaam kre by using promises
//it returns a initial proxy value 
//function return a promise jisme hum ek function pass krte hai
//jisme actual async tasks hotr hai agr succedd hojaye to 
//jo func promise ko diya tha uske bhi jo pehli arguument pe function
//hai usse call krdenge basically resolve

//promisified version of readfile

const fs = require("fs");


function readfileAsync(){
  return new Promise(function(resolve,reject){
    fs.readFile("a.txt","utf-8",function(err,data){
      if(err){
        reject(err);
      }
      else{
        resolve(data);
      }
    })
  })
}
//bhai naam se frk nhi pdta Promise ke andar jo function hai
//jisme aync task hote hai
//uski pehli arg resolve hoti hai kuch bhi naam dede
//dusri arh reject hoti hai kuch bhi naam dede
// .then succesfull hone pe call hoga
// .catch fail hone pe call hoga

readfileAsync().then(function(x){
  console.log("data has been taken succesfully" + x);
}).catch(function(y){
  console.log("there has been an error detected" + y.message);
})

//now what has changed we have now added a reject argument function
//pehle hum promise ko ek function dete the jisme aync tasks hote the
//iss function ki pehli argument resolve hoti thi jo call hohati
//thi if opn successfull ho to

//ab hum iss function mai resolve ke sath reject bhi dallenge
//jaise .then resolve ko callback ke equal krt tha vaise hi 
//.catch bhi reject ko ek callback ke equal krta hai jisme erroe detected vegra aur neccesary cheeze hoti hai

//agr succesfull task hota hai to resolve call hoga 
//ab .then already resolve ko kisi succs wale callback ke equal kr chuka hai
//to agr resolve call hoga mtlb callback call hoga with neccesary details the way u pass them

//ese hi .catch reject ko reject wale callback ke equal krdeti hai
//agr reject call hua to vo wala callback call hojaega with neccesary details