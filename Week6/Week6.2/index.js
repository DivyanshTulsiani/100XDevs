const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "ilivetolivehappy"

const app = express()

let users = []

app.use(express.json())


app.get('/',function(req,res){

  //or use __dirname + Week6/Week6.2....
  res.sendFile("/Users/divyanshtulsiani/Desktop/Dev/100XDevs/Week6/Week6.2/Assignment/index.html");
})

app.post('/signup',function(req,res){
  console.log("Hi i am bhosdamon")
  const username = req.body.username
  const password = req.body.password
  console.log(username)

  users.push({
    username: username,
    password: password
  })

  res.status(200).json({
    message: "you are signed up!!"
  })
})

app.post('/signin',function(req,res){
  const username = req.body.username
  const passowrd = req.body.passowrd

  let founduser = null

  founduser = users.find(function(u){
    if(u.username === username && u.passowrd === passowrd){
      return true
    }
  })

  if(founduser){
    const token = jwt.sign({
      username: founduser.username
    },JWT_SECRET)
  
    res.json({
      token: token
    })
  }
  else{
    res.status(403).json({
      message: "user not found"
    })
    return false;
  }
  console.log(users)

})
//auth middleware function

//sice in future we would need to to verify the token agian and agian thus we can use auth middleaware to reduce this repeating logic 

function auth(req,res,next){
  //req,res are smame here as they are in other places
  const token = req.headers.token

  //verify is best as we would have decoded the hacker could have stole our password and his
  //token would have worked but verify only succeds if jwtsecret is same which helps us even
  //if passsword is leaked it wont get verify
  const decodedInformation = jwt.verify(token,JWT_SECRET)

  if(decodedInformation.username){
    req.username = decodedInformation.username
    next()
  }
  else{
    res.json({
      message: "You are not signed in"
    })
  }

}
// app.use(auth())

app.get('/me',auth,function(req,res){

  // const token = req.headers.token
  // const decodedInformation = jwt.verify(token,JWT_SECRET)

  // const username = decodedInformation.username

  // if(username){
  //   for(let i=0;i<users.length;i++){
  //     if(users[i].username === username){
  //       res.json({
  //         username: username,
  //         password: users[i].password
  //       })
  //     }
  //   }
  // }

  //after auth middleware
  //but here is a very imp thing th next function does not have access to 
  //username as earlier we were exteracting it in this function only but that
  //part is now done in the auth  middlewatr4e hence we would have to send it further from auth to next funciton 
  //by modifying the req res objects

  for(let i=0;i<users.length;i++){
    if(users[i].username === req.username){
      res.json({
        username: req.username,
        password: users[i].password
      })
    }
  }


})

app.listen(4000)