import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div style={{}}>
      <h4>Login</h4>
      <Button variant="outlined" color="primary"
              onClick={handleClickToOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Want to see your books?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Login to bookshelf
          </DialogContentText>
          </DialogContent>
       <DialogActions>
         <Button onClick={handleToClose}
                 color="primary" autoFocus>
           Close
         </Button>
       </DialogActions>
     </Dialog>
   </div>
 );
}
