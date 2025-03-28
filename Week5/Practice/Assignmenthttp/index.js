const express = require('express');

const app = express();


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
