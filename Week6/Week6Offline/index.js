const jwt = require('jsonwebtoken')
const JWT_SECRET = "liveandletlive"
const zod = require('zod')


const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username,password){

  const usernameResponse = emailSchema.safeParse(username)
  const passwordResponse = passwordSchema.safeParse(password)
  

  if(usernameResponse.success && passwordResponse.success){
    const token = jwt.sign({
      username: username
    },JWT_SECRET)

    return token
  }
  else{
    return null;
  }

}


function verifyJwt(token){

  //veirfy is not a binary functiopn it will throe an error and end the prog execution\\
  //thus we should use try catch here
  //as we need a output here and ned the program to keep running

  let ans = true;
  try{
    const verify = jwt.verify(token,JWT_SECRET)
  }
  catch(e){
    ans = false
  }

  return ans;

  // if(verify){
  //   return true;
  // }
  // else{
  //   return false;
  // }


}

function decodeJwt(token){
  
  const decode = jwt.decode(token)
  if(decode){
    return true;
  }
  else{
    return false;
  }
}

const ans = si