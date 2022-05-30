import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ListItemText from '@mui/material/ListItemText'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { isTemplateExpression } from 'typescript'
import { useState } from 'react'

function ToDo({ todo, removeTask, handleComplete }) {
  const { id, task, date } = todo

  return (
    <List className="item-todo">
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeTask(id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText className="item-text" primary={`${task} ${date}`} />
        <IconButton
          className="button-complete"
          onClick={() => handleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </IconButton>
      </ListItem>
    </List>
  )
}

export default ToDo
