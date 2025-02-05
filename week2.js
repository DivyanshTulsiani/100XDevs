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


function waitfor3S(resolve){
  setTimeout(resolve,3000);
}

function main(){
  console.log("main is called");
}

waitfor3S(main);

//so the thing above is just a wrapper for settimeot
//we pass the main function as an arg in waitfor 3s func 
//where waitfor3s just passses this into settimeout 
//hence main gets called after 3s
//which could have been done directly by settimeout
//hence this is just a wrapper for settimeot