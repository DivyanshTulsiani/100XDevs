const express = require("express")


const app = express()

let reqcount  = 0;
function reqcounter(req,res,next){
  reqcount = reqcount + 1;
  next();
}

app.get("/total",function(req,res){
  res.status(200).json({
    RequestCount : reqcount
  })
})

app.use(reqcounter)

app.get("/sum", function(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
      ans: a + b
  })
});

app.get("/multiply", function(req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
      ans: a * b
  })
});

app.get("/divide", function(req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
      ans: a / b
  })

});

app.get("/subtract", function(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
      ans: a - b
  })
});


app.listen(3000)