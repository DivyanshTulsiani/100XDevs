const { Router } = require('express')
const { purchasesModel } = require('../database/db')
const  { coursesModel } = require('../database/db')
const { userMiddleware } = require('../middleware/user')


const courseRouter = Router()


courseRouter.get("/purchase",userMiddleware,async function(req,res){

  const userId = req.userId
  const course_id = req.body.course_id
  
  //ideally isse pehle hume payment hu ya nhi vo check krna chahiye 
  try{
    await purchasesModel.create({
      userId: userId,
      course_id: course_id
    })
    res.json({
      message: "course bought succesfully" 
    })
  }
  catch(e){
    console.log(e)
    res.status(500).json({
      message: "error purchasing course"
    })
  }

})


// courseRouter.get()


courseRouter.get('/preview',async function(req, res){

  try{
    const courses = await coursesModel.find({})
    res.json({
      courses
    })
  }
  catch(e){
    console.log(e)
  }

})






module.exports = courseRouter