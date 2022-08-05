import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const Header = ({ onFormSubmit }) => {
  const [text, setText] = useState();
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    onFormSubmit(text);
    e.preventDefault();
  };

  return (
    <>
      <Paper elevation={3} style={{ padding: "25px" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            fullWidth
            label="Search"
            onChange={handleChange}
          ></TextField>
        </form>
      </Paper>
    </>
  );
};

export default Header;
