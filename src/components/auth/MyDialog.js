import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

//Comment
export default function App() {

  const [openModal, setOpenModal] = React.useState('none');
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div style={{}}>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <Dialog open={openModal === 'login'}>
        <DialogContent>
          <DialogContentText>
          <div className="login-wrapper">
            <h1>Register</h1>
              <form>
                <label>
                  <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                  <p>Password</p>
                  <input type="password" />
                </label>
            </form>
          </div>
          </DialogContentText>
        </DialogContent>
       <DialogActions>
         <button onClick={() => setOpenModal('none') === 'login'}>Login</button>
         <button onClick={() => setOpenModal('none') === 'login'}>Close</button>
       </DialogActions>
     </Dialog>
   </div>
 );
}
