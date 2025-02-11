function setTimeoutPromisified(duration){
  return new Promise(function(resolve){
    setTimeout(resolve,duration);
  });
}

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

setTimeoutPromisified(1000).then(function(){
  console.log("hi");
  return setTimeoutPromisified(3000);
}).then(function(){
  console.log("hello");
  return setTimeoutPromisified(5000);
}).then(function(){
  console.log("hi there");
})

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

