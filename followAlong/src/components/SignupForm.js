import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";
import { useForm } from "../hooks/useForm";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function SignupForm() {
  const classes = useStyles();
  const [values, handleChanges, clearForm] = useForm(initialValues)
  // make it set to useForm() instead of useState("")
  // change firstName to values to generalize
  // this array is the same as the return from the hook
  // if it isn't being used after the transfer (setFirstName) then get rid of it
  // don't forget to transfer handleChanges and clearForm back to state

// const handleChange transferred to useForm

// const clearForm transferred to useForm

  const initialValues = {
    firstName: "",
    lastName: ""
}

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${values.firstName} ${values.lastName}`)
    //add values - make it values.firstName
  };



  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={values.firstName}
            // add values - make it values.firstName
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Last Name"
            className={classes.textField}
            name="lastName"
            value={values.lastName}
            // add values - make it values.lastName
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
//adding to github