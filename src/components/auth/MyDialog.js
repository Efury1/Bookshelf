import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";



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

  function login(formData) {
    console.log('login', formData)
  }

  const [openModal, setOpenModal] = React.useState('none');
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div style={{}}>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <Dialog open={openModal === 'login'}>
        <DialogContent>
          <DialogContentText>
          <div className="login-wrapper">
            <LoginForm onSubmit={login} buttonText="Login"></LoginForm>
          </div>
          </DialogContentText>
        </DialogContent>
       <DialogActions>
         <button onClick={() => setOpenModal('none') === 'login'}>Close</button>
       </DialogActions>
     </Dialog>
   </div>
 );
}
