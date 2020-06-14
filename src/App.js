import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  render(){
    return(
      <div>
         <div className="container">
          <div className="row">
          <Todoinput />
           <TodoList />
           </div>
         </div> 
      </div>
    )
  }
}

export default App;
