
import { useEffect, useState } from "react";
import '../css/all.css'
import { getAllApartments, getAllCategories, getAllCities, sortByCategory, sortByCity, deleteApartmentById, sortByNumBeds, sortByPrice, apartmentUpdate } from '../js/api';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const AllApartments = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [listCity, setListCity] = useState([]);
  const [city, setCity] = useState();
  const [category, setCategory] = useState();
  const [listApartments, setListApartments] = useState([])
  const [filterApartments, setFilterApartments] = useState([])
  const [advertiser, setAdvertiser] = useState()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const handleShowAll = () => {
    setFilterApartments(listApartments)
  }
  const [open22, setOpen22] = React.useState(false);
  const handleClick22 = () => {
    setOpen22(true);
  };

  const handleClose22 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    } setOpen22(false);
  }

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
  const handleSortPrice = () => {
    const min = document.getElementById("2").value
    const max = document.getElementById("3").value
    sortByPrice(parseInt(min), parseInt(max))
      .then((x) => {
        setFilterApartments(x.data.apartments)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const handleSortNumBeds = () => {
    debugger
    sortByNumBeds(document.getElementById("1").value)
      .then((x) => {
        debugger
        setFilterApartments(x.data.apartments)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const list = (anchor) => (
    <Box 
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"  
    >
      <div id="boxFilter">
        <TextField id="1" label="כמות מיטות" type="number" onBlur={handleSortNumBeds} />
        <TextField id="2" label=" מחיר מינימלי" type="number" />
        <TextField id="3" label="מחיר מקסימלי" type="number" />
        <Button
          onClick={handleSortPrice}
          variant="outlined">סנן</Button>
        <br></br>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">קטגוריה</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={category}
            onChange={handleSortCategory}
          >
            {listCategory && listCategory.map(category => <MenuItem value={category._id}>{category.name}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">עיר</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={city}
            onChange={handleSortCity}
          >
            {listCity && listCity.map(city => <MenuItem value={city._id}>{city.name}</MenuItem>)}
          </Select>
        </FormControl>
        <br></br>
        <Button
          onClick={handleShowAll}
          variant="outlined">כל הדירות</Button>
      </div>
    </Box>
  );
  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('currentAdvertiser'))
    setAdvertiser(a)
    console.log("advertiser:", advertiser);
    debugger
    getAllApartments()
      // axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(x => {
        console.log(x.data.Apartments[13]);
        setListApartments(x.data.Apartments)
        setFilterApartments(x.data.Apartments)
      })
      .catch(err => {
        console.log(err);
      })
    getAllCategories()
      .then((x) => {
        // console.log(x.data);
        if (x.data != null)
          setListCategory(x.data.Categories)
      })
      .catch((e) => {
        console.log(e);
      })
    getAllCities()
      .then((x) => {
        // console.log("cities:");
        setListCity(x.data.cities)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  const handleSortCity = (event) => {
    sortByCity(event.target.value)
      .then((x) => {
        setFilterApartments(x.data.apartments)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const handleSortCategory = (event) => {
    debugger
    sortByCategory(event.target.value)
      .then((x) => {
        setFilterApartments(x.data.apartments)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return <>
 <p id="backgroundImg">
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="outlined" id="btnFilter" onClick={toggleDrawer(anchor, true)}>סינונים</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    <div className="container">
      {filterApartments && filterApartments.map((x) => (
        <div key={x._id} className="card">
          <img src={`http://localhost:3001/${x.img}`} alt="green iguana" />
          <div className="card-content">
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
            <Button size="small"><ShareIcon /></Button>
            <HtmlTooltip
              title={
                <React.Fragment>
                  {x.advertiserId && <Typography color="inherit">פרטי בעל הדירה</Typography>}
                  {x.advertiserId && <b>{x.advertiserId.email}: מייל</b>}
                  <br />
                  {x.advertiserId && <b>טלפון: {x.advertiserId.phone}</b>}
                </React.Fragment>
              }
            >
              <Button>פרטים</Button>
            </HtmlTooltip>
          </div>
          
        </div>
      ))}
    </div>
    </p>
  </>
}