const jwt = require('jsonwebtoken')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()


require('dotenv').config()

app.use(express.json())
app.use(cors())

const MONGOOSE_URI = process.env.MONGOOSE_URI

const userRouter = require("./routes/users")
const courseRouter = require("./routes/course")
const adminRouter = require("./routes/admin")

app.use("/api/v1/user",userRouter)

app.use("/api/v1/course",courseRouter)

app.use("/api/v1/admin", adminRouter)












app.listen(3000,async function () {

  try{
    await mongoose.connect(MONGOOSE_URI)
    console.log("connected")
  }
  catch(e){
    console.log(e)
  }
  
})


