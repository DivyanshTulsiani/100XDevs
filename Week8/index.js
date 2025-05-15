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


//hume user aur admin ka jwt password diff rkhna chahiye since even if humara jwt userid aur admin id se bana hai jo randomissed hai par vovo same bhi 
//hoskti hai agr glti se bhi same hogyi even thoiigh do diff table hai to chances are extemeny low but agar same hogyi
//to sice humara jwt password bhi same hoga to dono side same tpoken milega phir toh user admin  ke endpoints ko bhi acces krlega

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


