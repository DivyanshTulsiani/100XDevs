const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors");

//express has bodyparser initself but  u could use it ndependently by 
//requiring it above

//we need a middleware by default we cannot extract data from body
//thus the need of a middleware arrises call express.jspn  which parser 
//parses the data which lets us use req.body


// app.use(express.json())

// app.post("/sum", function(req, res) {
//   const a = parseInt(req.body.a);
//   const b = parseInt(req.body.b);

//   res.json({
//       ans: a + b
//   })
// });


//Cors CROSS ORIGIN RESOURCE SHARING
//cors is by default restricted in nodejs 
//for ex we cannot fetch resources meaning call an api from our one server 
//to another duee to cors this is for security 

//as lets say from the 100xdevs site from the frontend (which is on say server a)
// i cannot call hdfcbanck.co.in  backend which is server b as this is a security threat

//but what is i wanted my website to interact with my backend to do so we have cors

app.use(express.json())
app.use(cors())
// app.use(cors({
//   domains: [ ]
// }));

app.post("/sum", function(req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
      ans: a + b
  })
});


app.listen(3000)