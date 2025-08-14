// interface user{
//   name: string
//   age: string
// }
//diff can be seen in how we declare them
// type user = {
//   firstName: string
//   lastName: string
//   age: number
// }
// //usecase is quite similar but types are not able to get implemented
// //here we are proving User1 a user type
// let User1: user = {
//   firstName: "Diko",
//   lastName: "Tima",
//   age: 19
// }

// console.log(User1.firstName)

//one thing we can not do in interfaces is that 
//we can not union or intersection in interfaces
//but we can in types
type user = {
  name: string
  age: number
  
}

type Student = {
  name: string
  age: number
  grade: string
  parentName: string
}

type Employee = {
  name: string;
  startDate: string;
};

type Manager = {
  name: string;
  department: string;
};
//taking intersection in type
//and means ki dono properties honi chahiye
type TeamLead = Employee & Manager;

let e: Employee = {
  name: "dima",
  startDate: "01-01-01"
}
let m: Manager = {
  name: "diko",
  department: "Elec"
}
//teamlead mai dono aaengi since and op tha to dono aaengi
let t: TeamLead = {
  name: "ji",
  startDate: "24242",
  department: "tech"
}

//in union yaa to ek hi hongi ya dono ki hongi

type Gooduser = {
  name: string;
  startDate: string;
};

type Baduser = {
  name: string;
  department: string;
};

//in this we may have everything or any one like a or operator
type Teamer = Gooduser | Baduser
let g: Gooduser = {
  name: "dima",
  startDate: "01-01-01"
}
let b: Baduser = {
  name: "diko",
  department: "Elec"
}
//teamlead mai dono aaengi since and op tha to dono aaengi
let h: Teamer = {
  name: "ji",
  startDate: "24242",
  department: "tech"
}

//can also define a custom type using interface to describemy array
function getMax(nums : number[]): number{
  let maxValue:number = -10000000000;
  
  for(let i = 0 ; i<nums.length; i++){
    const value = nums[i]
    if(value !== undefined &&  value > maxValue){
      maxValue = value
    }
    
  }
  return maxValue;
}

getMax([1,2,3,2,3,1])