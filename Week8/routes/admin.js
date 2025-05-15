const { Router } = require('express')
const jwt = require('jsonwebtoken')

 const adminRouter = Router()


const JWT_SECRET_ADMIN = process.env.JWT_SECRET_ADMIN
 const { adminModel } = require("../database/db")


 adminRouter.post('/signup',async function(req,res){
  const {  email, password, firstname, lastname} = req.body

  try{
   const response =  await adminModel.create({
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

 adminRouter.post('/signin',async function(req,res){
  const {email, password} = req.body; 

  //.find kroge to epty array milegi jo truue hogi to bug aaega
  
  const admin = await adminModel.findOne({
    email: email,
    password: password
  })

  if(admin){
    const token = jwt.sign({
      id: admin._id
    },JWT_SECRET_ADMIN)
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

 adminRouter.post('/course',async function(req,res){
  res.json({
    message: "you have signed in"
  })
 })

 adminRouter.put('/course',async function(req,res){
  res.json({
    message: "you have signed in"
  })
 })


 adminRouter.get('/course/bulk ',async function(req,res){
  res.json({
    message: "you have signed in"
  })
 })



 module.exports = adminRouter