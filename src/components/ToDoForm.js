import { useState } from 'react'
import { ThemeProvider, Input } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import theme from '../theme'

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </Button>
      </Box>
    </ThemeProvider>
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
