// const fs = require("fs");

// fs.readFile("b.txt","utf-8",function(err,data){
//   if(err){
//     console.log("Error detected",err.message);
//   }
//   else{
//     console.log(data);
//   }
// })

// let c=0;
// for(let i=0;i<10000000000;i++){
//   c++;
// }

//since an expensive cpu op is being done the async taks went to webapi and when it was 
//completed it was sent to the queue but was not called by the evnet loop as an expensive
//opn was being done by the cpu hence the thread was busy


// const fs = require("fs");

// fs.writeFile("a.txt","Hello i am div yee","utf-8",function(err,data){
//   if(err){
//     console.log("Error detetcted",err.message);
//   }
//   else{
//     console.log(data);
//   }

// })

const fs = require("fs");
let datafile = "";
fs.readFile("a.txt","utf-8",function(err,data){
  if(err){
    console.log("Error detected",err.message);
  }
  else{
    datafile = data;
    datafile = cleans(datafile);
    cleanit(datafile);
  }
})


function cleans(str){
  let newstr = "";
  let counter = 0;
  let i=0;
  while(i<str.length){
    if(str[i] != " " && counter === 0){
      newstr += str[i];
      i++;
    }
    else if(str[i] != " " && counter >= 1){
      newstr += str[i];
      counter = 0;
      i++;
    }
    else if(str[i] === " "){
      if(counter === 0){
        counter += 1;
        newstr += str[i];
      }
      else{
        counter += 1;
      }
      i++;
    }
  }
  return newstr;
}

function cleanit(datafile){
  fs.writeFile("a.txt",datafile,"utf-8",function(err,data){
    if(err){
      console.log("error detected",err.message);
    }
    else{
      console.log("data succesfully cleaned");
    }
  })
}