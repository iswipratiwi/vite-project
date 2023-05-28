import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'

const DUMMY_TODO = [
  {
    id: nanoid(),
    title: "Belajar React",
    isComplete: false
  }
]

function App() {
  const [Todos, setTodos] = useState(DUMMY_TODO)
  const [newTodo, setNewTodo] = useState('')

function addNewTodo(){
  const updatedTodos = [...Todos]
  const objTodo = {
    id: nanoid(),
    title: newTodo,
    isCompleted: false
  }

  updatedTodos.push(objTodo)
  setTodos(updatedTodos)
  setNewTodo('')
}

function completeTodo(targetTodoid) {
  const updatedTodos = Todos.map(todo => {
    if (todo.id === targetTodoid) {
      todo.isCompleted = !todo.isCompleted
    }

    return todo
  })

  setTodos(updatedTodos)

  //console.log (Todos) --> cek true false di console
}

  return (
    <>
      <h1>Todo App</h1>
      <input 
        type='text' 
        placeholder='Mau mengerjakan apa?' 
        value={newTodo} 
        onChange={event => setNewTodo(event.target.value)}
      />
      <button onClick={() => addNewTodo()}>Create</button>
      <ul>
        {
          Todos.map((todo) => (
            <li key = {todo.id} 
            className='todo-item' 
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>
              <input type='checkbox'onChange={() => completeTodo(todo.id)}/> 
              {todo.title}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
