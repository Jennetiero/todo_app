import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ListItemText from '@mui/material/ListItemText'
import { Task } from '../interfaces/task'

function ToDo({ todo, removeTask, handleComplete }) {
  const { id, userInput, created }: Task = todo

  return (
    <List>
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
        <ListItemText primary={userInput} secondary={created} />
        <IconButton
          style={{ color: '#2dd36f' }}
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
