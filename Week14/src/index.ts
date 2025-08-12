let x: number = 1;

// x = "harkirat";
//will geta n error if i write the above thing
// index.ts:3:1 - error TS2322: Type 'string' is not assignable to type 'number'.

// 3 x = "harkirat";
 //type inferencing even if we dont write 
//number explicitly typescript would still infer it a number
//this is a good feature 
console.log(x)

//if we do not specifically mention any type to firstname and say any
//then that will give u squigly line but we can make it any menaing we may
//enter anything it may be number or string like js

//but we will declare it as a string

function greet(firstname: string){
  console.log("Hello " + firstname);
}

greet("Himo")

//the typescript compiler is smart ebough that even if we dont mention this
//specific datatype it wont give an error and know that it would return a number

function sum(a: number,b:number): number{   
  return a + b
}

let ans = sum(1,2);
console.log(ans);

function isLegal(age: number): boolean{
  if(age > 18){
    return true;
  }
  else{
    return false;
  }
}

let res = isLegal(19)

//this is a function that takes another fn as an input
//in this case we can mention the as fn: ()=>void we can write what 
//that funtion  takes as input and there type in the brackets and => "mention what the fn return in this case void"

function delayedCall(fn: () => void){
  setTimeout(fn,1000);
}

function log(){
  console.log("This got logged after 1 second")
}

delayedCall(log)

//how to mention when we have an object??

//well for oobjcts u can 


//we can create interfaces for types that are not so converntional
//like an object in an object we casnt directly mention the type 
//thats where interfaces help us
function gree(user: userType){
  console.log("hello" + user.name)  
}

interface userType{
  name: string,
  age: number
}

let user: userType = {
  name: "Div",
  age: 20
}


//type is leting us do a join here
type  SumInput = string | number

//in types we can = while assigning which we cant incaser of a interface

function sum2(a:SumInput, b:SumInput){
    
}
//inshort interfaces are wqay we define our unique objects into a type
//type in ts are ways we can union or intersect these interfaces into one single tyep
//types also lets us do intersections 
interface Employee{
  name: string,
  age: number
}

interface Manager{
  name: String,
  department: String
}

type TeamLead = Employee & Manager

let t: TeamLead = {
  name: "Div",
  age: 21,
  department: "Tech"
}