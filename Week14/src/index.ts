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

// let user: userType = {
//   name: "Div",
//   age: 20
// }


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

//having an object having a object inside it and making a 
//datatype out of it

interface User{
  name: string,
  age: number,
  address: {
    city: string,
    country: string,
    pincode: number
  }
}

let user: User = {
  name: "Div",
  age: 20,
  address: {
    city: "Gur",
    country: "India",
    pincode: 112121
  }
}

function isLeg(user: User): boolean{
  return user.age >= 18

}

let anst: boolean = isLeg(user)

console.log(anst)


interface People{
  name: string,
  age: number,
  greet: () => string
}

let Peo: People = {
  name: "Tim",
  age: 19,
  greet: () => {
    return "hi"
  }
}


let greeting = Peo.greet()
console.log(greeting)

interface People2{
  name: string;
  age: number
}

//interfaces in js or ts are like the ones in java in java we cannot have 
//multiple inheritance this is where interfaces save the day
//even in ts/js a class can implement a interface just like before
//this class may further be used to extend or have other classes inherit it

class Employee implements People2{
  //we dont have to write this again but have to metion paublu
  // name: string;
  // age: number;
  constructor(public name: string,public age: number){
    this.name = name;
    this.age = age;
  }
}
let User2 = new Employee("hima", 29)

console.log(User2.name)


// interface Vote{
//   name: string,
//   age: number,
//   isLegal(): boolean
// }

// //apparently cabt add fn in here we have to define them within the class
// //cant add them from object????

// class Voter implements Vote{
//   constructor(public name: string,public age: number){
//     this.age = age,  
//     this.name = name
//   }
//   isLegal = ()=>{
//       return this.age >= 18
//   }
  
// }

// class Voter2 extends Voter{
//   constructor(name: string,age: number){
//     super(name,age)
//   }
// }


//we can implement or actually extend using an abstract class aswell
//one thing diff in these two is that for abstract classes we can
//have default fn too like hello here

//the diff in types and interfaces is that for interfaces we cant actually
//implement them to a class

abstract class Vote{
  name: string
  constructor(name: string){
    this.name = name
  }

  abstract greet: () => string
  hello(){
    console.log("hi there")
  }
}
//one important thing here to remember is that we have to write public
//so as to get those variables of abstract class or interface declared in
//the place where we implement it
class Voter extends Vote{
  constructor(public name: string){
    super(name)
    this.name = name
  }

  greet = () => {
    return "Hi"
  }
} 

//IMPPPPPPPPPPPPPPPPPPPP

//interrfaces abd types behave a little differently than we think

//in interfaces the intersection and union looks like they are not behaving as
//they should intersection feels more like union

//THIS IS BCS IN TYPESCRIPT THESE TYPES ARE A SET OF VALUES
//MEANING
//when i write 
type Baby = {
  name: string
  age: number
}
//the above baby type is set of values all sets that have name age are 
//valid baby type if there is anything extra that is allowed too
//this means it is a set of

//{{name: age:  },{name: age: car: },{name: age: dance:},{name age modelname insurance}}
//all the above ones can be termed as as valid baby types 

type Car = {
  modelname: string
  insurance: boolean
}

//similarly for the above one as long as we have the req modelname and insurance
//it does not matter if we have extras those extras are all allowed

// {{name age modelname insurance}} this would also be here and we saqw it 
//can be present in baby too
//this means when now we take intersection

//our intersection type would have 
// {name age modelname insurance}
//all these are valid baby & car
//now it sounds not that intuitive as how can we have both when intersecting
//but when we see how ts behave under the hood we realise its actual
//meaning

//similary when we do union in this case we can have all the ones present
//in baby and all the ones in the car we have 
//{name age} {modelname insurance} {name age modelname insurace} {name age happy dance}
//all these are valid baby | car

//IMPP

//when i create an interface and add exta thing like i did in case of
//type it will give me an error
//but the thing is if i add an extra param  and refer to that to an 
//intermediary point it would not give me an error

interface point2d{
  x: number
  y: number
}

const intermed = {x:1, y:1, name: "hiko",age: 29}
const r: point2d = intermed
// direct assinging would give error name does not exist
// let r: point2d = {x:1, y:1, name: "hiko",age: 29}