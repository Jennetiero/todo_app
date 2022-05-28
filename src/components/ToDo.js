import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>

      <button className="item-delete" onClick={() => removeTask(todo.id)}>
        <DeleteIcon id="i" />
      </button>
    </div>
  );
}

export default ToDo;
