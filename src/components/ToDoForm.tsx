import { KeyboardEvent, useState } from 'react'
import { Input } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        userInput: userInput,
        completed: false,
        created: Timestamp.now()
      })
      setUserInput('')
    } catch (err) {
      alert(err)
    }
    addTask(userInput)
    setUserInput('')
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUserInput(e.currentTarget.value)
  }
  const handleKeyPress = (
    e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === 'Enter') handleSubmit(e)
  }
  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Input
        sx={input}
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter a task..."
        disableUnderline={true}
      />
      <Button
        sx={button}
        variant="contained"
        onClick={handleSubmit}
        className="addTask"
        name="addTask"
      >
        Add
      </Button>
    </Box>
  )
}

// Styles
const input = {
  width: '100%',
  padding: '8px',
  borderRadius: '4px 0 0 4px',
  border: '2px solid #ce93d8'
}

const button = {
  position: 'absolute',
  width: '40px',
  padding: '13px',
  ml: '3px',
  borderRadius: '3px',
  cursor: 'pointer',
  outline: 'none'
}

export default ToDoForm
