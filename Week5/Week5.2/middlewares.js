//middlewares are functions that are able to change req res cycles and also 
//delegate the next function by using next()
//essentially express is just a chain of middleares hapenig one after other acc
//to the way they are designed 


//the biiggest use of middlewares ois authentication think it as the middleware function
//checks wether or not the person trying to enter the appp is justified aand then calls the next 
//after calling the next the function supposed starts

const express = require('express')
const app = express()


let requestcount = 0;

function reqinc(req,res,next){
  requestcount = requestcount + 1;
  console.log("Total no of request are" + requestcount);
  next()

}

//here reqinc has a next function when the middleware does its jobmentioned 
///int the function body t calls the next function and we had mentioned in the 
//app.get that the middleware comes before the main faunction of ours

//we can always do the same thing by mentioning ita as a function int ht 
//maIN DUfunctio itself but this way we wont get req res

//by using this way we wil; be able to modify the req and res object 


//main usage
//here we see this as an authentication middleware and if  we find an anomaly
//we stop the reqres cycle
//these are likes gates where we are checking and if we find anything wrong we stop
//the cycle by not calliing next function

//if you are using a middleware do one of the two things if denied give res.json

//or atleast call thwe middleware jdb dbs

function reqinc(req,res,next){
  requestcount = requestcount + 1;
  if(req.header.cookie ==== "google"){
    next()
  }
  res.json({
    msg; "request not given"
  })
  console.log("Access denied");
}





app.get('/multiply', reqinc ,function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const ans = a * b;
  res.status(200).json({answer: ans});
})

app.get('/add',reqinc ,function(req,res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const ans = a + b;
  res.status(200).json({answer: ans});
})

///where we might not require a middleware

///we might no need to count request coming from an admin 

app.get('/admin',)



app.listen(3000)