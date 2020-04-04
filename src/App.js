import React, {useState,useRef, useEffect} from 'react';
import './App.css';
import TodoList from './TodoList'

function App() {
const [todos, setTodos] = useState([{id: 1, name: 'bleh', complete: true}]);

  return (
    <>
    <input type="text" />
    <button>Add</button>
    <button>Clear Completed tasks</button>
    <div>0 Tasks to be done</div>
    <TodoList todos={todos}/>
    </>
  )
}

export default App;
