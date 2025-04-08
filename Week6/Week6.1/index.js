const express = require('express');
const JWT_SECRET = "somethingrandom"
const jwt = require('jsonwebtoken')

const app = express();
app.use(express.json())

const users = [];



//should return a random long string
// function generateToken() {
//   let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   let token = "";
//   for (let i = 0; i < 32; i++) {
//       // use a simple function here
//       token += options[Math.floor(Math.random() * options.length)]; //floor 11.5 -> 11
//   }
//   return token;
// }

app.post('/signup',function(req,res){
  //input validations using zod we will look after some time
    const username = req.body.username
    const password = req.body.password
    //right know someone can sign in twice but we will add more check in future

    users.push({
      username: username,
      password: password
    })

    res.status(200).json({
      message: "You are signed up"
    })
    console.log(users)
})


//stores username passowrd and current token 

app.post('/signin',function(req,res){
  const username = req.body.username;
  const password = req.body.password
  
  let foundUser = null;
  //like map and filter find is also a function u can fdo this 
  //can be done by loop aswell
  //users is an array u is the object and it checks 
  //each object in the array
  //this return the object in the arrray which match the conditoins

  //.find basically iterateds alll elements present in the array
  foundUser = users.find(function(u){
    if(u.username == username && u.password == password){
      return true;
    }
  })

  if(foundUser){
    // const token = generateToken()

    //JWT app
    //sign function takes two arg what to encode and how to encode (secret variabel)
    const token = jwt.sign({
      username: username
    },JWT_SECRET)

    // since JWT is stateless wwe dont have to store it

    // foundUser.token = token

    res.json({
      token : token
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

app.get('/me',function(req,res){
  const token = req.headers.token

  const decodedInformation = jwt.verify(token,JWT_SECRET)
  //when i encoded it it was basically an object which had an username key

  const username = decodedInformation.username

  //now in current scenario we needed paassword as well but 
  //letss say we wanted to accesas other info only for which we will now hit the database
  //but it decreases one roundtrip of our as earlier we woul have searhced the database for the token
  //and then get the other detail 
  //after which we accesed other info

  //but this way we now decreased one step as token alreasady had our username stored after decrypting
  //so our one rondtrip of checking token and getting sername and password gets reduced  
  let   foundUser = null;


  for(let i=0;i<users.length;i++){
    if(users[i].username == username){
      foundUser = users[i];
    }

  //after jwt 

    if(foundUser){
      res.json({

        username : foundUser.username,
        password: foundUser.password
      })
    }
    else{
      res.json({
        message: "Unauthorized"
      })
    }

  }
})

 //tokens thatbnow we are creating are stateful which means the token gets stored
 //in  out aaray or evntually database where we use it again to verify
 
 //but JWTs are stateless whcih means we dont need to stopre them anywhere
 //they themselves contain the username and password in them 
 //the backend or basically our server just decodes them to identify the user which


 //SO WHATS THE BENEFIT
//jwt basically prevents 1 round trip from the backenf server and db for any user request

//jwt can be stored in a cookie header or a normal auth header

//It is encoded not encrypted

//imp question
//do we have to go to the database to check if the jwt is right???

//the answer is no 
//once the user signin again after signup wwe chck with the datab that are his 
//crediantials right but once they are  verified we change the username of the user 
//into a jwt and send this jwt back to the user once the user sends a /me request to us
//the user send s only the jwt which is converred agian into the usernae now sice 
//we can clearly knoe that this username is right as this jwt was uniquely made for 
//that user only hence it lets it use  the endpoint 

//on the othert hand if we used tokens while we signed in the database woul now be given 
//our token which will be used in future when we used /me endpoint but it will call the 
//database to check but using jwt we will avoid this call

app.listen(4000);