import React from "react";
import { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import Box from "@mui/material/Box";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    console.log("userInput: ", userInput);
    if (userInput) {
      const elapsedDate = Date.now();
      const date = new Date(elapsedDate).toUTCString();
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
        date,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="App"
    >
      <header>
        <h1>List of tasks: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return <ToDo todo={todo} key={todo.id} removeTask={removeTask} />;
      })}
    </Box>
  );
}

export default App;
