
//arrow fns same thing
function sum(a,b){
  return a+b;
}

const ans = (a,b) => {
  return a+b;
}

//whenever we need to modify array we can use transform function
const input = [1,2,3,4,5];

function transform(i){
  return i*2;
}

const answer = input.map(transform);
console.log(answer);

//filter 
//give all even numbers
const arr = [3,5,6,6,9,10]

function filterlogic(n){
  if(n % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}

const newarr = arr.filter(filterlogic)

console.log(newarr)