import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'

function ToDo({ todo, removeTask }) {
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
      </ListItem>
    </List>
  )
}

export default ToDo
