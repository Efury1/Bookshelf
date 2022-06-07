import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";



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
    <div>
      <label>Username</label>
      <input id="username" type="text"/>
    </div>
      <label>Password</label>
      <input id="password" type="password"/>
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
