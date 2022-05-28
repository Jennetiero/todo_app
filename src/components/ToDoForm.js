import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  textField: {
    outline: "none",
  },
});

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        value={userInput}
        id="outlined-basic"
        variant="outlined"
        className="textField"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter a task..."
      />
      <button>Add</button>
    </Box>
  );
}

export default ToDoForm;
