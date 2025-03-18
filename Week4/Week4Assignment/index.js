const fs = require("fs");

const express = require('express');
const app = express()

app.get('/',function(req,res){
  res.send("hi there how are you");
})

app.get("/div",function(req,res){
  res.send("this request was for div");
})

app.listen(3000)