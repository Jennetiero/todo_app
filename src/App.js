import { useState } from 'react'
import { nanoid } from 'nanoid'
import Box from '@mui/material/Box'
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      // Get current date
      const elapsedDate = Date.now()
      const date = new Date(elapsedDate).toUTCString()
      const newItem = {
        id: nanoid(),
        task: userInput,
        complete: false,
        date
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  return (
    <Box sx={mainBox} className="App">
      <header>
        <h1>List of tasks: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => (
        <ToDo todo={todo} key={todo.id} removeTask={removeTask} />
      ))}
    </Box>
  )
}

// Styles
const mainBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

export default App
