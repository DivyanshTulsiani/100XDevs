const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { adminMiddleware } = require('../middleware/admin')

 const adminRouter = Router()


const JWT_SECRET_ADMIN = process.env.JWT_SECRET_ADMIN
 const { adminModel } = require("../database/db")
 const { coursesModel } = require("../database/db")


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

 adminRouter.post('/course',adminMiddleware,async function(req,res){

  const adminId = req.userId;

  const  { title,description,imageUrl,price } = req.body

  try{
    const course = await coursesModel.create({
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
      creatorId: adminId
  
    })

    res.json({
      message: "Course created succesfully"
    })
  }
  catch(e){
    console.log(e);
    res.status(500).json("You are not signed in")
  }


 })

 adminRouter.put('/course',adminMiddleware,async function(req,res){
    const adminId = req.userId;

    const {title,description,imageUrl,price,courseId} = req.body

    try{
      const course = await coursesModel.updateOne({
        _id: courseId,
        creatorId: adminId
      },{
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
    
      })
      res.json({
        message: "Course updated succesfully"
      })
    }
    catch(e){
      res.json({
        error: e
      })
    }



 })


 adminRouter.get('/course/bulk ',adminMiddleware,async function(req,res){

  const adminId = req.userId

  try{
    const courses = await coursesModel.find({
      creatorId: adminId
    })
    res.status(200).json({
      message: "All courses sent"
    })

  }
  catch(e){
    console.log(e)
    res.status(500).json({
      error: "Unable to access the courses"
    })
  }

 })



 module.exports = adminRouter