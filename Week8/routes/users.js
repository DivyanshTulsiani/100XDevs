const jwt = require('jsonwebtoken')
const { Router } = require('express')
const mongoose = require('mongoose')

const { userMiddleware } = require('../middleware/user')
const JWT_SECRET = process.env.JWT_SECRET

const { userModel, adminModel,purchasesModel, coursesModel } = require('../database/db')


const userRouter = Router()


userRouter.post('/signup',async function(req,res){

  const {  email, password, firstname, lastname } = req.body

  try{
   const response =  await userModel.create({
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname 
  
    })


      res.json({
        message: "you haved signed up"
      })
  }
  catch(e){
    res.status(500).json({
      error: e,
      message: "Error in signing up"
    })
  }


})


userRouter.post('/signin',async function(req,res){

  const {email, password} = req.body; 

  //.find kroge to epty array milegi jo truue hogi to bug aaega
  
  const user = await userModel.findOne({
    email: email,
    password: password
  })

  if(user){
    const token = jwt.sign({
      id: user._id
    },JWT_SECRET)
    res.json({
      message: "You have succesfully signed in",
      token: token
    })
  }

  else{
    res.status(500).json({
      message: "Error signing in"
    })
  }
  
})

userRouter.get('/purchases',userMiddleware,async function(req,res){

  const userId = req.userId

  try{
    const purchases = await purchasesModel.find({
      userId: userId
    })

    const coursesData = await coursesModel.find({
      _id: { $in: purchases.map( (x) => x.course_id)}
    })

    res.json({
      purchases,
      coursesData
    })
  }
  catch(e){
    // console.log(e)
  }
})




module.exports = userRouter