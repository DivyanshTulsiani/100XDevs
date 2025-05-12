const { Router } = require('express')


const courseRouter = Router()


courseRouter.get("/purchase",async function(req,res){
  res.json({
    message: "Hi i am from course/purchase" 
  })
})


// courseRouter.get()









module.exports = courseRouter