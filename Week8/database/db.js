const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId



const MONGOOSE_URI = process.env.MONGOOSE_URI

// await mongoose.connect(MONGOOSE_URI)




const users = new Schema({
  email: {type: String, unique: true},
  password: String,
  firstname: String,
  lastname: String
})


//these users admin are basically equivalent to tables in an rdbms
const admin = new Schema({
  email: {type: String,unique: true},
  password: String,
  firstname: String,
  lastname: String
})

const courses = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
})

const purchases = new Schema({
  course_id: ObjectId,
  userId: ObjectId
})

const userModel = mongoose.model('users',users)
const adminmodel = mongoose.model('admin',admin)
const coursesModel = mongoose.model('courses',courses)
const purchasesModel = mongoose.model('purchases',purchases)

module.exports = {
  userModel: userModel,
  adminModel: adminmodel,
  coursesModel: coursesModel,
  purchasesModel: purchasesModel
}