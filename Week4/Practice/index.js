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

app.post('/',function(req,res){
  

})

app.listen(3000);