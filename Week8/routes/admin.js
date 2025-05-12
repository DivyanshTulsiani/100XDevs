const { Router } = require('express')


 const adminRouter = Router()

 const { adminModel } = require("../database/db")


 adminRouter.post('/signup',async function(req,res){
  res.json({
    message: "you have signed up"
  })
 })

 adminRouter.post('/signin',async function(req,res){
  res.json({
    message: "you have signed in"
  })
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