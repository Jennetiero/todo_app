import { KeyboardEvent, useState } from 'react'
import { Input } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

function ToDoForm({pendingTasks}) {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (userInput !=='' && pendingTasks.findIndex(item=>item.userInput===userInput) === -1){
    setUserInput('')
    try {
      await addDoc(collection(db, 'tasks'), {
        userInput: userInput,
        completed: false,
        created: Timestamp.fromDate(new Date())
      })
    } catch (err) {
      alert(err)
    }
  } 
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
    <Box
      width={'100%'}
      textAlign="center"
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Input
        sx={{ ...input, borderColor: userInput ? '#3880ff' : '#84a8e8' }}
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter a task..."
        disableUnderline={true}
        autoComplete="off"
      />
      <Button
        style={{
          backgroundColor: userInput && pendingTasks.findIndex(item=>item.userInput===userInput) === -1 ? '#3880ff' : '#84a8e8',
          color: 'white'
        }}
        sx={button}
        variant="contained"
        onClick={handleSubmit}
        className="addTask"
        name="addTask"
        disabled={userInput && pendingTasks.findIndex(item=>item.userInput===userInput) === -1? false : true}
      >
        Add
      </Button>
    </Box>
  )
}

// Styles
const input = {
  width: '30%',
  padding: '8px',
  borderRadius: '4px 0 0 4px',
  border: '2px solid'
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
