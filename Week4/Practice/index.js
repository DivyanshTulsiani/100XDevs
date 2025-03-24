const express = require('express')

const app = express();

const users = [{
  name: 'John',
  kidneys: [{
    healthy: true
  },{
    healthy: false
  }]
}];

app.use(express.json());


function checkkidney(johnkidneys){
  let count = 0;
    for(let i=0;i<johnkidneys.length;i++){
      if(johnkidneys[i].healthy == true){
        count++;
      }
    }
    return count;
}

//query params
app.get("/",function(req,res){
  const johnkidneys = users[0].kidneys;

  const numberofkidneys = johnkidneys.length;
  let numberofhealthykidneys = 0;
  numberofhealthykidneys = checkkidney(johnkidneys)

  const numberofunhealthykidneys = johnkidneys.length - numberofhealthykidneys;

  res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys
  })
})

//body is used more for post to take req from user

//adds a new kidney
app.post('/',function(req,res){
  const status = req.body.ishealthy;

  users[0].kidneys.push({healthy: status});

  res.json({
    msg: "Your kidney has been added"
  })

})

//updates all kidneys to be healthy

app.put('/',function(req,res){
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({msg: "All kidneys updated"})
})

//deletes all unhealthy kidneys
app.delete('/',function(req,res){
  
})
app.listen(3000);