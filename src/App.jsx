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
  const [error, setError] = useState('')

function addNewTodo(){
  if (newTodo.length === 0) {
    setError('Todo tidak boleh kosong')
  } else {
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

function handleChange(event) {
  setNewTodo(event.target.value)
  setError('')
}

  return (
    <>
      <h1>Todo App</h1>
      <input 
        type='text' 
        placeholder='Mau mengerjakan apa?' 
        value={newTodo} 
        onChange={event => handleChange(event)}
      />
      <button onClick={() => addNewTodo()}>Create</button>
      {
        error.length > 0 ? (
          <p>{error}</p>
        ) : null
      }
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
