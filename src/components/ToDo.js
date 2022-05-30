import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import ListItemText from "@mui/material/ListItemText";

function ToDo({ todo, toggleTask, removeTask }) {
  console.log("todo: ", todo);
  console.log("toggleTask: ", toggleTask);
  console.log("removeTask: ", removeTask);
  return (
    // <div key={todo.id} className="item-todo">
    <List key={todo.id} className="item-todo">
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
          primary={todo.task}
          onClick={() => toggleTask(todo.id)}
        />
      </ListItem>
    </List>
    // {/* <div
    //   className={todo.complete ? "item-text strike" : "item-text"}
    //   onClick={() => toggleTask(todo.id)}
    // >
    //   {todo.task}
    // </div>

    // <button className="item-delete" onClick={() => removeTask(todo.id)}>
    //   <DeleteIcon id="i" />
    // </button> */}
    // </div>
  );
}

export default ToDo;
