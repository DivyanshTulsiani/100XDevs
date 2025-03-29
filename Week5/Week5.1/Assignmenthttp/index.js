const express = require('express');

const app = express();


//while visiting a website we send a bunch of http requests to the ip of that site or the domain matched 
//to the ip of the site ,,,this requests returns us a bunch of html css and jsjthat is respoinle for what 
//we see on out browser window 
//one server handles multiple processes on different ports locolhost:3000 and 8000 etc
//this way we  dont need multiple servers 
//the first request is sent by me but other than that there are many backgrounfd request as well which we donr see 

//Headers
//headers are key value pairs and as the name suggests are sent above all other metadata
//headers sepcify some basic requrements of the user he needs before acccesing any thing further 
//the best example is authorization and cookoes JWT json web token our id and password is sent as a cookie to the browser 
//someone having our cookie may access through our account for some time


//Fetch as we previously know is an inbuilt api in the browser which initself is an async process or say is a function which returns a 
//promise both of the implementation are mentioned in index.html async await and promisified approach 

//fetch initself takes metadata 
// fetch("some links"){
//   method :"get/post"
//   headers:{
//     cookie" "smthg"
//   }
//     body:{
//       data:
//     }
// }



app.get('/multiply',function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const ans = a * b;
  res.status(200).json({answer: ans});
})

app.get('/add',function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const ans = a + b;
  res.status(200).json({answer: ans});
})

app.get('/subtract',function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const ans = a - b;
  res.status(200).json({answer: ans});
})

app.get('/divide',function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const ans = a / b;
  res.status(200).json({answer: ans});
})

//another way to give inputs
app.get('/add/:a/:b',function(req,res){
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const ans = a + b;
  res.status(200).json({answer: ans});
})

app.listen(3000);
