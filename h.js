// function sum(a,b){
//   return parseInt(a)+b;
// }

// let a ="5";
// let b=6;
// let ans = sum(a,b);
// console.log(ans);
 
// function sum(n){
//   let i=1;
//   let a =0;
//   while(i<=n)
//   {
//     a += i;
//     i++;
//   }
//   return a;
// }

// n=5;
// const ans = sum(n);
// console.log(ans);

// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);

//synchronous code

// 1. har cheez line by line execute hogi 
// 2. pehle hum sum function pe aaenge abo vo bas memory mai store hoga run nhi hoga
// 3. fir hum niche aaenge vha pe sum function call ho jaaega vhi single thread ab upar jaegi
// 4. ab upar se execute krna shuru kregi ab pure function ko execute krega fir vps ContentVisibilityAutoStateChangeEvent
// 5. ab agar vps function call hoga to fir upar jaega and ese hi sinhgle line by line thread chlti jaegi

//functional arguments

// function sum(a,b)
// {
//   return a+b;
// }
// function divide(a,b)
// {
//   return a/b;
// }

// function oper(a,b,op)
// {
//   return op(a,b);
// }

// const data = oper(5,6,sum);
// const data1 = oper(5,6,divide);
// console.log(data);
// console.log(data1);

//these are functional arguments 
//basically those function which can take another function as an argument
//these are functional arguments
//here op is that function we just have to pass it in oper and it does the job
//it takes another function as an argument and uses it initself


//I/0  heavy operations 

// const fs = require("fs");
//this imports an external library like we do in cpp #include <stdio.h>
// const contents = fs.readFileSync("a.txt", "utf-8");

//here u can understand it as fs is an object which has 
//read file sync as an key so we acces the key and our function 
//gets accesed where we then just have to give the args
//here read file sync is the key corresponding to the function stored in the fs object

// console.log(contents);

//fs is a module which we are importing 

// const data = fs.readFileSync("a.txt","utf-8");
// const data2 = fs.readFileSync("b.txt","utf-8");

// console.log(data);
// console.log(data2);

//name of obj can be diff irt can be const fsa = require("fs")
//fs is a ext library file system
//this lets us interact withinv

//utf 8 is one way to represent the data from other file into english
//if we do not write it it would display some type of data which we will
//not understand it is an arg of that function

// const fs = require("fs");

// const data = fs.readFileSync("a.txt","utf-8");
// console.log(data);
// console.log("hi i am div");

//the code written above is synchronous code simply means that all the actions 
//would have happen one by one  like we discussed earlier
//for the I/O taks the thread would wait for the readfilesync function to access data and 
//then store it inside data
//but this is an disadvantage as this task does not depend on the cpu and depends on 
//some external factoror the I/O here it would stay idle until it gets the value

//but in a real world situatipon when there are multiple task and we dont have to 
//remain for the entire timeline of the task then we switch to doing multiple taks at the same time
//then context switch as they get completed

//This process is called Asynchronous in js

// const fs = require("fs");
// function print(err,data)
// {
//   console.log(data);
// }
// fs.readFile("a.txt","utf-8",print);

// fs.readFile("b.txt","utf-8",print);

// console.log("Done!");
// //output
// // Done!
// // hi there
// // hi from b.txt

//this is what asynchronous prog is the thread when it reached 
//now what exactly happened
//if we would have done it the old way synchronous it would have waited for 
//the read file sync to obtain the data and do I/O task it would have printed
//hi there -> hi from b.txt -> Done!
//this would have happened line by line 
//but this is an disadvantage as we have to wait for the I/O ops and cpu remain idle
//but as we know by async we can context switch as we have done above

//out here when the thread reaches readfile it does not have to remain there 
//the task keeps on happening by the I/O and we dont have to remain idle
//it goes to the next line 
//out here we have a function print it is a functional argument as we know from before

//when the file gets read it callbacks the print 

//callbacks-> basically when the heavy task of I/O operation got completed
//it called the print function which printed that text

//by this way it kept runnning and we did not have to wait for it 
//we moved to the next line 

//this is also the reason why done got loggged before these two as our thread was 
//able to reach it while those two kept happening 
//this increases our performance
 


// const fs = require("fs");
// function print(err,data)
// {
//   console.log(data);
// }
// //lets say takes 1000ms
// fs.readFile("a.txt","utf-8",print);

// fs.readFile("b.txt","utf-8",print);
// let c=0;
// //lets say this takes 3000ms
// for(let i=0;i<100000000;i++)
// {
//   c += 1;
// }
// console.log(c);
// console.log("Done!");

//now what happens we now know that the thread does not has to wait for the I/O tasks to happen 
//and can proceed further on doing other cpu intensive tasks rather than being idle here 
//but what if the other task takes even more time than the I/O tasks

//now what would happen
//option 1
//hi there
//hello from b.txt
//10000000 smthg
///Done!

//option 2
//10000000 smthg
//Done!
//hi there
//hello from b.txt

//its prints option 2

//this might seem suprising but this is the nature of async js
//even if the I/O tasks had been completed in the background while we were still doing some other cpu tasks
//we did not go there as our thread was busy so we simply cant go back we will first finish this task and 
//then move on ahead
//hence it gets added in a queue which gets called when we finish rest of the tasks

//so whats the benfit???


//you might think since the i/o task keep happening in the backhground and our threads gets 
//to do other cpu intensive task but evn if the async task gets comp in background 
//it would still be stuck in quuee it would enter call stack only when all other cpu taks have 
//ended basically end line of the code where thread gets free again

//this still is an advantage as in sync the total time would have been sum of both i/o + cpu

//but here total time is the one which is larger wetheer it is i/0 or cpu



// function print(err,data)
// {
//   console.log(data);
// }
// //lets say takes 1000ms
// fs.readFile("a.txt","utf-8",print);

// fs.readFile("b.txt","utf-8",print);
// let d=0;
// //lets say this takes 3000ms
// for(let i=0;i<100000000;i++)
// {
//   d += 1;
// }
// console.log(d);
// console.log("Done!");
// for(let i=0;i<100000000;i++)
// {
//   d += 1;
// }
// for(let i=0;i<100000000;i++)
// {
//   d += 1;
// }
// console.log(d);
// console.log("Done!");

// console.log("hi");

// function timeout()
// {
//   console.log("Click the button");
// }

// setTimeout(timeout,2000);
// let a = 0;
// for(let i=0;i<1000000;i++)
// {
//   a += 1;
// }
// console.log(a);
// console.log("hi this is div");

//is case mai bhi settimeout async hai vo timeout fn ko tbhi call krega jab 1000ms passs ho jaenge
//yha par bhi hum jo loop lenge vo jada time lega par phir bhi loop ke baad wali statements pehle 
//execute hongi jo ki cpu extensive hai since hamari thread hi free nhi hogi

//setime out background mai chlega->>> jab complete hojaega to web api se queue ke andar aaega 
//aur phir tab execute hoga jab thread free hogi yani baki cpu extensive tasks hojaenge
//to phitr vo quuer se htke call stack mai aa jaega

//so this timeout only gaurantees when it would go from webapi to queue
//the fact that whether it would enter call stack depends whether the thread is free or not 
//hence in these cases it was executing the other cpu intensive tasks

//what makes a function async

//anything you offload to webapi or borwoser api 
//which makes it io intensive 
//is called asyncgronous

//event loop
//whenever the call stack becomes empty it pulls the func
//from callback queue

//jab tak cpu free nhi hota tb tk quue kisi bhi async function ko 
//stack pe nhi lapaegi

//agr multiple async function ho toh jo kam time lega vo pehle
//call back quues mai jaega hence pehle execute hoga call stack mai bhi
//phir matter nhi krta ki kaunsa  pehle likha gya tha

//in vague sense cpu extensive tasks or callstack just does not
//get empty because we reach an empty ;ine 
//it gets empty whem we finish all cpu tasks or end line of the code
//after tghe the async code from quue gets pulled into the call stack

//error first callback 

// const fs = require("fs");

// function print(err,data)
// {
//   if(err){
//     console.log("some error occured")
//   }
//   else{
//     console.log(data);
//   }
// }

// fs.readFile("a.txt","utf-8",print);

// console.log("hi am div");

//these aync functions have something called error first callback
//this is the way these are designed the main async function calls the callback function 
//if data is not found it defines the error as smthg as a obj but otherwise err is null
//and data is fed whatever the file had 

//this is there design and we have to follow it 

//so to summarise aync func keep running in the background so thread does not remain idle 
//and do other cpu intensive tasks it gets free only at the end lineof the code 
//and then event loop pushes it into the call stack
//time in settimeout only gaurantees when will the callback go from webapi to quuee not when it
//will enter call stack

// class Rectangle{
//   constructor(width,height,color){
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }
//   area(){
//     const area = this.width * this.height;
//     return area;
//   }
//   paint(){
//     console.log("painting with this color" + this.color);
//   }
// }

// const rect = new Rectangle(2,4,"red");
// const area = rect.area();
// rect.paint();
// console.log(area);


const date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());

//maps in js are similar to maps in cpp and the primitive 
//objects in js
const map = new Map();
map.set("name", "div");
map.set("age",19);
console.log(map.get("name"));
bjbjbbjkjk
