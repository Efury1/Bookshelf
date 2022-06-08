import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import theme from "../styles/theme.js";
import {Button, Input, FormGroup, Body} from '../styles/theme'
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
    <h1>Login</h1>
    <FormGroup>
      <label htmlFor="username">Username</label>
      <Input id="username" type="text"/>
    </FormGroup>
    <FormGroup>
      <label htmlFor="password">Password</label>
      <Input id="password" type="password"/>
    </FormGroup>
    <div>
      <Button type="submit">{buttonText}</Button>
    </div>
  </form>

  )
}

//Comment
export default function App() {

  function login(formData) {
    console.log('login', formData)
  }

  const [openModal, setOpenModal] = React.useState('none');
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div style={{}}>
      <Button onClick={() => setOpenModal('login')}>Login</Button>
      <Dialog open={openModal === 'login'}>
        <DialogContent>
          <DialogContentText>
          <div className="login-wrapper">
            <LoginForm onSubmit={login} buttonText="Login"></LoginForm>
          </div>
          </DialogContentText>
        </DialogContent>
       <DialogActions>
         <Button onClick={() => setOpenModal('none') === 'login'}>Close</Button>
       </DialogActions>
     </Dialog>
   </div>
 );
}
