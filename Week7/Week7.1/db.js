const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId

const User = new Schema({
  email: {type: String, unique: true},
  password: String,
  name: String
})

const Todo = new Schema({
  title: String,
  done: Boolean,
  userId: ObjectId

})

//these models make ur life very easy u define the schema above
//and define them in yout model with the name of collection that u have in the mongodb server
//now u export these to your main index.js file where u can use this 
//model to send data to your mongo db databaser and collection

//u dont have to get into the complex wroking behind that 

const UserModel = mongoose.model('users',User)
const TodoModel = mongoose.model('todos',Todo)

module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel
}