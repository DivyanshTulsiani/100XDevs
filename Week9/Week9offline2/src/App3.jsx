import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react';

//lists are the same as we did earlier using map we rendered an array
//entirely one by one

//keys are a diff thing using keys we can increase the performance of rendering
//a list by giving keys if we remove amy elemnt from it place
//react can be smart instead of rendering it entirely again 
//it can simply remove that one since it exacty knows its key 
//this can be a major performance upgrade

function App(){
  return(
    <div>
      {[
        <Todo key={1} title = {"Go to gym"} done = {false}/>,
        <Todo key={2} title={"Eat food"} done = {true}/>  
      ]}


      <ClassCounter/>
      
      
    </div>
    
  )

}

function Todo(props){
  return(
    <div style = {{background: "Gray"}}>
      {props.title} 
      {props.done ? "Done!" : "Not Done"}
    </div>
  )
}

class ClassCounter extends Component {
  state = { count: 0 };

  increment = () => {
      this.setState({ count: this.state.count + 1 });
  };

  render() {
      return (
          <div>
              <p>Count: {this.state.count}</p>
              <button onClick={this.increment}>Increment</button>
          </div>
      );
  }
}

export default App
