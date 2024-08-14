import swal from "sweetalert"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import {  loginAsAdvertiser, loginAsUser } from '../js/api'
import { useRef } from "react"
import { Button } from "@mui/material"
import store from "../js/store"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../css/home.css'
export const Login = () => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let nav = useNavigate()
  const emailRef = useRef()
  const passRef = useRef()
  const login = (event) => {
    const u = {
      email: document.getElementById('email').value,
      password: document.getElementById('pass').value
    }
    if (event == 'user') {
      loginAsUser(u)
        .then(x => {
          console.log(x.data);
          localStorage.setItem('token',x.data.token)
          localStorage.setItem('currentUser',JSON.stringify(x.data.User))
          // dispatch(isAdvertiser(true))
          swal("Hello!", "login successfully!", "success");
          nav('/AllApartments')
        }
        )
        .catch(err => {
          swal("error", "you are directed to register ", "error");
          nav('/Register')
        })
    }
    else if (event == 'advertiser') {
      console.log("Advertiser",u);
      loginAsAdvertiser(u)
        .then(x => {
          console.log(x.data);
          localStorage.setItem('token',x.data.token)
          localStorage.setItem('currentAdvertiser',JSON.stringify(x.data.Advertiser))
          console.log(store.token);
          swal("Hello!", "login successfully!", "success");
          nav('/AllApartments')
        }
        )
        .catch(err => {
          console.log(err);
          swal("error", "you are directed to register ", "error");
          nav('/Register')
        })
    }
  }
  useEffect(() => {
    setOpen(true);
  }, [])
  const [open, setOpen] = React.useState(false);
  return <>
  <p id="b">
 <React.Fragment>
      <Button id="btnFilter" variant="outlined" onClick={handleClickOpen}>
        sign in:
      </Button>
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
        <DialogTitle>להתחברות</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            ref={emailRef}
            variant="standard"
          />
            <TextField
            autoFocus
            required
            margin="dense"
            id="pass"
            name="password"
            label="password "
            type="password"
            fullWidth
            ref={passRef}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
    <Button variant="outlined"  onClick={(() => login('user'))} type="click" value={'loginUser'} >כניסה כמשתמש</Button>
    <Button variant="outlined" onClick={(() => login('advertiser'))} type="click" value={'loginAdvertiser'} >כניסה כמפרסם</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </p>
  </>
}
