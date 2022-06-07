import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";



import theme from "../styles/theme.js";
import {Button, Input, FormGroup} from '../styles/theme'
//import Button from "@material-ui/core/Button";


function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements
    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return(
    <form onSubmit={handleSubmit}>
    <h1>Register</h1>
    <FormGroup>
      <label htmlFor="username">Username</label>
      <Input id="username" type="text"/>
    </FormGroup>
    <FormGroup>
      <label htmlFor="password">Password</label>
      <Input id="password" type="password"/>
    </FormGroup>
    <div>
      <button type="submit">{buttonText}</button>
    </div>
  </form>

  )
}

//Comment
export default function App() {

  function register(formData) {
    console.log('register', formData)
  }

  const [openModal, setOpenModal] = React.useState('none');
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div style={{}}>
      <button onClick={() => setOpenModal('register')}>Register</button>
      <Dialog open={openModal === 'register'}>
        <DialogContent>
          <DialogContentText>
          <div className="login-wrapper">
            <LoginForm onSubmit={register} buttonText="Register"></LoginForm>
          </div>
          </DialogContentText>
        </DialogContent>
       <DialogActions>
         <button onClick={() => setOpenModal('none') === 'register'}>Close</button>
       </DialogActions>
     </Dialog>
   </div>
 );
}
