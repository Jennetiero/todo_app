import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Box from '@mui/material/Box'
import {
  doc,
  updateDoc,
  deleteDoc,
  query,
  collection,
  onSnapshot
} from 'firebase/firestore'
import { db } from '../src/firebase'
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'
import NavBar from './components/NavBar'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = []
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArray)
    })
    return () => unsub()
  }, [])

  const addTask = (userInput: string) => {
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

  const handleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), { completed: !todo.completed })
  }

  const removeTask = async (id: any) => {
    await deleteDoc(doc(db, 'todos', id))
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  return (
    <Box sx={mainBox} className="App">
      <NavBar total={todos.length} />
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => (
        <ToDo
          todo={todo}
          key={todo.id}
          removeTask={removeTask}
          handleComplete={handleComplete}
        />
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
