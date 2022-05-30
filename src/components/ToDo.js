import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'

function ToDo({ todo, toggleTask, removeTask }) {
  const { id, task, date } = todo
  return (
    <List className="item-todo">
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeTask(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          className="item-text"
          primary={`${task} ${date}`}
          onClick={() => toggleTask(id)}
        />
      </ListItem>
    </List>
  )
}

export default ToDo
