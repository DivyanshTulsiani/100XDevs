const bcrypt = require("bcrypt")
const express = require('express')
const  {UserModel , TodoModel} = require("./db")
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')

const { z } = require("zod")


require('dotenv').config();

const app = express()
const JWT_SECRET = process.env.JWT_SECRET
const mongoose_uri = process.env.MONG_URI
async function db() {
  const p = await mongoose.connect(mongoose_uri)
  if(!p.ok){
    console.log("Invalid credentials")
  }
}

db();

app.use(express.json());

app.post('/signup',async function(req,res){

  const requiredBody = z.object({
    email: z.string().min(5).max(100).email(),
    password: z.string().min(6).max(100),
    name: z.string().min(3).max(100)

  })

  const parsedDataSuccess = requiredBody.safeParse(req.body)

  if(!parsedDataSuccess.success){
    res.json({
      message: "Incorrect format",
      error: parsedDataSuccess.error
    })
  }

  //async function hai yaar await to dalenge agr await nhi dalengwe to sidhi baat
  //hai uske aage jo likha hai vo directly run hojaega control await hi nhi krega 
  //hmari iss call ke liye basically we are awaiting for the resukt and properly 
  //conteol structure aage trabhi jaye jab hamri ye walu req succesful ya fail ho pehi hi na aage ajaey 
  //yaa iske alava agr hum aur kisi trike se control krna chahe to vese krle

  const password = req.body.password
  const email = req.body.email
  const name = req.body.name
  //we will implemnt hashing + salting to protect our evne more 
  //salting is bascially adding some extra contents tpo the password
  //before it sis hashed as people can have same passwords and jhackers
  //can compare these passwords of people with prerecorded data called as rainbow tables
  //this extra content added makes every hash unique 

  //whn the user los in agian we store the salt with th user on the databse
  //this is then combined with thwe password given vy the ser to login 
  //and hashing algo is used agin this hashed password is compared 
  //to the hashed password in the databse and then user is given access

  //this hashing + salting can be done by bcrypt 
  try{
    const hashedpassword = await bcrypt.hash(password,5)


    await UserModel.create({
      email: email,
      password: hashedpassword,
      name: name
    })
  
    res.status(200).json({
      message: "You have signed up"
    })
  }
  catch(e){
    console.log(e)
    res.status(403).json({
      message: "User already exists"
    })
  }
 
})


//all database calls are async as think this call is goint to an extr
//extrernall server somewhere in mumbai banglore or evn a diff country
//this is an async operation thus we use async await and we get a promise
//in return 




app.post('/signin',async function(req,res){
  const email = req.body.email;
  const password = req.body.password;

  //if some func gives an error enclosde it in a try catch statement

  try{
    const user = await UserModel.findOne({
      email: email
    })
  
    if(!user){
      res.status(403).json({
        message: "User does not exist"
  
      })
    }
  
    //password sane hoskta hta par hmne salt bhi store kiya hai ye function salt ko dekhke fir compare krta hai ki 
    //kya user valid ha ya nhi it does the job of tking the salt out from there and hashing it agian with users request 
    //and checks that with stored hashed password
  
    const passwordmatch = await bcrypt.compare(password,user.password)
  
    console.log(user);
  
    if(passwordmatch){
      const token =  jwt.sign({
        id: user._id
      },JWT_SECRET)
  
      res.json({
        token: token
      })
    }
    else{
      res.status(403).json({
        message: "Incorrect credentials"
      })
    }
  }
  catch(e){
    console.log(e)
    res.status(403).json({
      message: "User already exists"
    })
  }

})

app.post('/todo',auth,async function(req,res){
  const userId = req.userId

  await TodoModel.create({
    title: req.body.title,
    done: false,
    userId: userId

  })
  res.json({
    userId: userId
  })
  res.json({
    message: "todo  created"
  })
})

app.get('/todos',auth,async function(req,res){
  const userId = req.userId

  const todos = await TodoModel.find({
    userId: userId
  })


  res.json({
    todos
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