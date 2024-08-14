import { useNavigate } from 'react-router-dom'
import { advertiserRegister ,userRegister} from "../js/api"
import swal from "sweetalert"
import '../css/home.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export const Register = () => {
  const [open, setOpen] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
const handleClickOpenUser = () => {
  setOpenUser(true);
};

const handleCloseUser = () => {
  setOpenUser(false);
};
  let nav = useNavigate()
    const registerUser = () => {
        //  event.preventDefault()
          const u = {
            email:document.getElementById('emailU').value,
            password:document.getElementById('passU').value
        }
        userRegister(u)
            .then(x => {
              swal("Hello!", "welcometo our site", "success");
              nav('/AllApartments')
              // setData(x.data)
            }
            )
            .catch(err => {
              swal("error", "somthing went wrong try again ", "error");
            //   nav('/Register')
            })
         }
    const registerAdvertiser = () => {
        //  event.preventDefault()
          const u = {
            email: document.getElementById('emailA').value,
            password: document.getElementById('passA').value,
            phone:document.getElementById('phone').value,
            secondPhone:document.getElementById('2phone').value
        }
        advertiserRegister(u)
            .then(x => {
              swal("Hello!", "welcometo our site", "success");
              nav('/AllApartments')
            }
            )
            .catch(err => {
              swal("error", "somthing went wrong try again ", "error");
            //   nav('/Register')
            })
       }
    return <>
    <p id="b">
        <Button variant="outlined"id="btnFilter" onClick={handleClickOpenUser} type="click" value={'loginUser'} > רישום משתמש</Button>
        <Button variant="outlined"id="btnFilter" onClick={handleClickOpen}  type="click" value={'loginAdvertiser' } >רישום מפרסם </Button>
        <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>הרשמת מפרסם</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="emailA"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            required
            margin="dense"
            id="passA"
            name="password"
            label="password "
            type="password"
            fullWidth
            variant="standard"
          />
          {/* <CallIcon></CallIcon> */}
                <TextField
            autoFocus
            required
            margin="dense"
            id="phone"
            name="phone"
            label="phone "
            type="phone"
            fullWidth
            variant="standard"
          />
                <TextField
            autoFocus
            required
            margin="dense"
            id="2phone"
            name="2phone"
            label="second phone "
            type="2phone"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
    <Button variant="outlined" onClick={registerAdvertiser} type="click"  >להרשמה</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openUser}
        onClose={handleCloseUser}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>הרשמת משתמש</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="emailU"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            required
            margin="dense"
            id="passU"
            name="password"
            label="password "
            type="password"
            fullWidth
            variant="standard"
          />  
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
    <Button variant="outlined" onClick={registerUser} type="click" value={'loginUser'} >להרשמה</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </p>
     {/* <Outlet></Outlet> */}
    </>
}
