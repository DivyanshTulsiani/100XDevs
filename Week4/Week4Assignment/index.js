const fileobject = require("fs");
const express = require('express');
const {v4: uuidv4} = require('uuid');
const bodyparser = require('body-parser');
const { compileFunction } = require("vm");


const app = express()

//we will use aync await syntax to do this
//we will hanlde errors using try catch statements
//as we know internal working of promises

//do function bnane hai read todos 
//dusra write to a file

const FILENAME = "todos.json";

// async function readtodos(){
//   try{
//     const data = await fileobject.readFile(FILENAME,'utf-8');
//     return JSON.parse(data || []);
//   }
//   catch(err){
//     // alert("Some error occured")
//     return [];
//   }
// }

function readtodos(){
  return new Promise(function(resolve,reject){
      fileobject.readFile(FILENAME,'utf-8',function(err,data){
        if(!err){
          resolve(JSON.parse(data));
        }
        else{
          reject(err);
        }
    });
  })
}

// async function writetodos(todos){
//   try{
//     const data = await fileobject.writeFile(FILENAME,JSON.stringify(todos,null,2));
//   }
//   catch(err){

//   }
// }

function writetodos(data){
  return new Promise(function(resolve,reject){
    fileobject.writeFile(FILENAME,JSON.stringify(data),function(err){
      if(!err){
        resolve();
      }
      else{
        reject();
      }
    })
  })
}

app.use(bodyparser.json());

let todoarray = [];
readtodos().then(function(data){
  todoarray = data;
});
// app.get('/todos',async function(req,res){
//   const todos = readtodos();
//   res.json(todos);
// });


app.get('/todos',function(req,res){
  readtodos().then(function(data){
    let userdata = data;
    res.status(200).json(userdata);
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({error:"unable to retrieve data"});
  })
})


// app.post('/todos',async function(req,res){
//  let currtodos = await readtodos();
//  let newtodo = {
//   id: currtodos.length + 1,
//   task: req.body.mytask,
//   completed: false
//  };
//  currtodos.push(newtodo);
//  await writetodos(currtodos);

//  res.status(201).json(newtodo);
// })

app.post('/todos',function(req,res){
  let tododata = req.body.task;
  let status = req.body.stat;
  let tododataid = uuidv4();
  console.log("Id for your todo is as follows");
  let newtodo = {
  task: tododata,
  id: tododataid,
  statuscode: status
 }
 todoarray.push(newtodo);
  writetodos(todoarray).then(function(){
    console.log("Your todo has succesfully been updated with id " + tododataid);
    res.status(201).json({id:tododataid,task:tododata});
  })

  .catch(function(err){
    res.status(500).json({error:"failed to post data try again"});
  }
)


})


app.put('/todos/:id',function(req,res){
  let reqid = req.params.id;
  let statusoftodo = req.body.stat;
  const todoindexfound = todofinder(reqid);

  if(todoindexfound === -1){
    return res.status(404).json({error:"todo not found"});
  }

  let updateddata = req.body.task;
  todoarray[todoindexfound].task = updateddata
  todoarray[todoindexfound].statuscode = statusoftodo

  writetodos(todoarray).then(function(){
    res.status(201).json({updation: "Your todo has succesfully been updated"});
  })
  .catch(function(){
    res.status(500).json({error:"An error occured while finding your todo"});
  })



})

function todofinder(idgiven){
  readtodos().then(function(data){
    todoarray = data;
  });
    for(let i =0;i<todoarray.length;i++){
      if(todoarray[i].id === idgiven){
        return i;
      }
    }
    return -1;
}

app.delete('/todos/:id',function(req,res){
    let reqid = req.params.id;
    const todoindexfound = todofinder(reqid);

    if(todoindexfound === -1){
      return res.status(404).json({error:"todo not found"});
    }
    todoarray.splice(todoindexfound,1);
    writetodos(todoarray).then(function(){
      res.status(201).json({status:"your todo is succesfully deleted"});

    })
    .catch(function(){
      res.status(500).json({error:"your todo could not be deleted"});
    })
})

//delete all 

app.listen(3000)