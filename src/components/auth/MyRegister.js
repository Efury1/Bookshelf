import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";


export default function App() {

  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div style={{}}>
      <h4>Register</h4>
      <Button variant="outlined" color="primary"
              onClick={handleClickToOpen}>
        Register
      </Button>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Let's get setup"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form>
              <div>
                <label>
                  Username:
                  <input type="username" username="username"/>
                </label>
              </div>
              <div>
                <label>
                  Password:
                  <input type="password" username="password"/>
                </label>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
       <DialogActions>
         <Button onClick={handleToClose} color="primary" autoFocus>
           Register
         </Button>
         <Button onClick={handleToClose} color="primary" autoFocus>
           Close
         </Button>
       </DialogActions>
     </Dialog>
   </div>
 );
}
