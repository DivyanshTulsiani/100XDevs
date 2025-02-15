function addtodo(){
  const val = document.querySelector("input");
  const inpvalue = val.value;
  console.log(inpvalue);
}

// let ctr = 0;
// function update(){
//   // const ele = document.getElementById(".toptodo");
//   const ele = document.querySelectorAll("h4")[0];
//   // console.log(ele);
//   ele.innerHTML = ctr;
//   console.log(ctr);
//   ctr = ctr + 1;
// }
// setInterval(update,1000);


function deletetodo(x){
  const element = document.getElementById("todo"+x);
  console.log(element);
  element.parentNode.removeChild(element);
}