import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';
import Swal from "sweetalert2";
import { deleteApartmentById, apartmentUpdate, getMyApartments } from '../js/api';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import '../css/all.css'
import { useNavigate } from "react-router-dom";

export const MyApartments = () => {
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [filterApartments, setFilterApartments] = useState([])
  const nav=useNavigate()
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  const [open22, setOpen22] = React.useState(false);
  const handleClose22 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    } setOpen22(false);
  }
  //function delete apartment
  const deleteApartment = (_id) => {
    debugger
    deleteApartmentById(_id)
      .then((x) => {
        setOpen22(true)
        console.log(x.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const updateApartment = (x) => {
    debugger
    Swal.fire({
      title: 'Update your apartment',
      html: `
    <form id="ApartmentForm">

    <label for="apartmentName">Name:</label><br>
    <input value=${x.name} type="text" id="apartmentName" name="apartmentName"><br><br>

    <label for="apartmentaddress">Address:</label><br>
    <input value=${x.address}  type="text" id="apartmentaddress" name="apartmentaddress"><br><br>

    <label for="apartmentDescription">Description:</label><br>
    <input value=${x.descreption} type="text" id="apartmentDescription" name="apartmentDescription"><br><br>

    <label for="apartmentNumBeds">amount of beds:</label><br>
    <input value=${x.numBeds} type="text" id="apartmentNumBeds" name="apartmentNumBeds"><br><br>

    <label for="apartmentPrice">price:</label><br>
    <input value=${x.price} type="text" id="apartmentPrice" name="apartmentPrice"><br><br>

    <label for="apartmentInfo">information:</label><br>
    <input value=${x.info} type="text" id="apartmentInfo" name="apartmentInfo"><br><br>
  
    <button id="submitBtn" type="submit">עדכן</button>
  </form>
    `,
      showCancelButton: true,
      showConfirmButton: false,
      // cancelButtonText: 'עדכן',
    });
    document.getElementById('ApartmentForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const apartmentName = document.getElementById('apartmentName').value;
      const apartmentaddress = document.getElementById('apartmentaddress').value;
      const apartmentDescription = document.getElementById('apartmentDescription').value;
      const apartmentNumBeds = document.getElementById('apartmentNumBeds').value;
      const apartmentPrice = document.getElementById('apartmentPrice').value;
      const apartmentInfo = document.getElementById('apartmentInfo').value;

      const Apartment = {
        _id: x._id,
        name: apartmentName,
        address: apartmentaddress,
        descreption: apartmentDescription,
        numBeds: apartmentNumBeds,
        info: apartmentInfo,
        price: apartmentPrice
      }
      debugger
      apartmentUpdate(Apartment)
        .then(x => {
          console.log(x.data)
          Swal.fire({
            icon: 'success',
            title: 'your apartment was updated',
            text: ' successfully',
          });
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'update Failed',
            text: 'update failed. Please check your credentials and try again.',
          });
        })
    });

  }
  useEffect(() => {
    const currentAdvertiser = JSON.parse(localStorage.getItem('currentAdvertiser'))
    const id = currentAdvertiser._id
    debugger
    getMyApartments(id)
    .then((x)=>{
      console.log(x.data.Apartments);
      setFilterApartments(x.data.Apartments)
    })
    .catch((e)=>{
          console.log(e);
          Swal.fire({
            icon: 'error',
            title: 'You dont connect!!',
            text: ' Please login/register and then back to there!!.',
          });
    })
    debugger  
    setEmail(currentAdvertiser.email)
    setPhone(currentAdvertiser.phone)
  }, [])
  return <>
 <p id="backgroundImg">
  <div>
       .    </div>
  <div className="containerMy">
      {filterApartments && filterApartments.map((x) => (
        <div key={x._id} className="card" >
            <img src={`http://localhost:3001/${x.img}`} alt="green iguana" />
            <div className="card-content" >
              <Typography gutterBottom variant="h7" component="div">
                {x.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {x.cityId && <h3>{x.cityId.name}</h3>}
                <h5>כתובת: {x.address}</h5>
                <h5>כמות מיטות: {x.numBeds}</h5>
                <h5>מחיר: {x.price}</h5>
                <h5>מידע נוסף: {x.info}</h5>
              </Typography>
            </div>
            <div className="card-actions">
              <Button size="small" onClick={() => deleteApartment(x._id)}><DeleteIcon /></Button>
              <Button size="small"><ShareIcon /></Button>
              <Button size="small" onClick={() => updateApartment(x)}><EditIcon /></Button>
              <Tooltip
                title={
                  <React.Fragment>
                    {x.advertiserId && <Typography color="inherit">פרטי בעל הדירה</Typography>}
                    {x.advertiserId && <b>{email}: מייל</b>}
                    <br />
                    {x.advertiserId && <b>טלפון: {phone}</b>}
                  </React.Fragment>
                }
              >
                <Button>פרטים</Button>
              </Tooltip>
            </div>
          </div>
      ))}
</div>
    </p>
      <Snackbar open={open22} autoHideDuration={6000} onClose={handleClose22}>
        <Alert
          onClose={handleClose22}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          !הדירה נמחקה שים לב
        </Alert>
      </Snackbar>    
  </>
}