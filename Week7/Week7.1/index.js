const express = require('express')
const  {UserModel , TodoModel} = require("./db")
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')
const JWT_SECRET = "livetolivehappy"

const app = express()

async function db() {
  const p = await mongoose.connect("mongodb+srv://divyanshtulsiani01:Divyansh080405@cluster0.zok4lb4.mongodb.net/todo-app-database")
  if(!p.ok){
    console.log("Invalid credentials")
  }
}

db();

app.use(express.json());

app.post('/signup',async function(req,res){

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  //async function hai yaar await to dalenge agr await nhi dalengwe to sidhi baat
  //hai uske aage jo likha hai vo directly run hojaega control await hi nhi krega 
  //hmari iss call ke liye basically we are awaiting for the resukt and properly 
  //conteol structure aage trabhi jaye jab hamri ye walu req succesful ya fail ho pehi hi na aage ajaey 
  //yaa iske alava agr hum aur kisi trike se control krna chahe to vese krle


  await UserModel.create({
    email: email,
    password: password,
    name: name
  })

  res.status(200).json({
    message: "You have signed up"
  })
})


//all database calls are async as think this call is goint to an extr
//extrernall server somewhere in mumbai banglore or evn a diff country
//this is an async operation thus we use async await and we get a promise
//in return 


app.post('/signin',async function(req,res){
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password
  })

  console.log(user);

  if(user){
    const token =  jwt.sign({
      id: user._id
    },JWT_SECRET)

    res.json({
      token: token
    })
  }
  else{
    req.status(403).json({
      message: "Incorrect credentials"
    })
  }

})

app.post('/todo',auth,function(req,res){
  const userId = req.userId
  res.json({
    userId: userId
  })
})

app.get('/todos',auth,function(req,res){
  const userId = req.userId

  res.json({
    userId: userId
  })
})

function auth(req,res,next){
  const token = req.headers.token;

  const decodeData = jwt.verify(token,JWT_SECRET)

  if(decodeData){
    req.userId = decodeData.id;
    next();
  }
  else{
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
}

app.listen(3000)