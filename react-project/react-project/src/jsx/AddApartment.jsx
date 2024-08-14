import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react"
import { addApartment, getAllCategories, AddCity, AddCategory } from '../js/api'
import { getAllCities } from '../js/api'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import '../css/all.css'
import { colors } from "@mui/material";
export const AddApartment = () => {
  const [listCategory, setListCategory] = useState([]);
  const [listCity, setListCity] = useState([]);
  const [city, setCity] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState(null);
  const nav = useNavigate()

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value)
  }
  const handleChangeCategory = (event) => {
    setCategory(event.target.value)
  }

  useEffect(() => {
    getAllCategories()
      .then((x) => {
        console.log(x.data);
        if (x.data != null)
          setListCategory(x.data.Categories)
      })
      .catch((e) => {
        console.log(e);
      })
    getAllCities()
      .then((x) => {
        console.log("cities:");
        setListCity(x.data.cities)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  const handleAddCity = () => {
    Swal.fire({
      title: 'Add City',
      html: `
        <form id="CityForm">
          <label for="categoryName">City Name:</label><br>
          <input type="text" id="cityName" name="cityName"><br><br>
          <button id="submitBtn" type="submit">Submit</button>
        </form>
      `,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Close',
    });
    document.getElementById('CityForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const cityName = document.getElementById('cityName').value;
      const City = {
        name: cityName
      }
      AddCity(City)
        .then(x => {
          console.log(x.data)
          Swal.fire({
            icon: 'success',
            title: 'Add City',
            text: 'You have successfully Add City!',
          });
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Add Failed',
            text: 'You Dont connect!! please login and back!',
          });
        })
    });
  }
  const handleAddCategory = () => {
    Swal.fire({
      title: 'Add Category',
      html: `
      <form id="CategoryForm">
        <label for="categoryName">Category Name:</label><br>
        <input type="text" id="categoryName" name="categoryName"><br><br>
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    `,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Close',
    });
    document.getElementById('CategoryForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const categoryName = document.getElementById('categoryName').value;
      const Category = {
        name: categoryName
      }
      AddCategory(Category)
        .then(x => {
          console.log(x.data)
          Swal.fire({
            icon: 'success',
            title: 'Add Category',
            text: 'You have successfully Add Category!',
          });
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Login failed. Please check your credentials and try again.',
          });
        })
    });
  }
  const send = (event) => {
    event.preventDefault();
    console.log(event.target[3].value);
    const newApartment = {
      name: event.target[0].value,
      descreption: event.target[3].value,
      cityId: city,
      categoryId: category,
      address: event.target[13].value,
      numBeds: event.target[16].value,
      info: event.target[18].value,
      price: event.target[21].value,
    }
    console.log(newApartment);
    const a = JSON.parse(localStorage.getItem('currentAdvertiser'))
    const formData = new FormData();
    formData.append('img', image);
    formData.append('address', newApartment.address);
    formData.append('name', newApartment.name);
    formData.append('descreption', newApartment.descreption);
    formData.append('numBeds', newApartment.numBeds);
    formData.append('price', newApartment.price);
    formData.append('info', newApartment.info);
    formData.append('cityId', city);
    formData.append('categoryId', category);
    formData.append('advertiserId', a._id);
    console.log(formData.get('name'));
    console.log(formData.get('descreption'));
    console.log(formData.get('cityId'));
    console.log(formData.get('img'));
    addApartment(formData)
      .then((x) => {
        debugger
        alert(x.data.message)
        nav('/AllApartments')
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'add Failed',
          text: 'add failed. Please check your credentials and try again.',
        });
        console.log(error);
      })
  }


  return <>
         <p id="backgroundImg">
   <div >
    .
   </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginTop:'200px' }}>
      <form style={{ width: '50%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' ,backgroundColor:'#ffffff' }} onSubmit={send}>
        <h1>AddApartment</h1>
        <TextField id="outlined-textarea" label="Apartment Name" multiline fullWidth style={{ marginBottom: '10px' }} />
        <TextField id="outlined-textarea" label="Additional Description" multiline fullWidth style={{ marginBottom: '10px' }} />
        <FormControl fullWidth style={{ marginBottom: '10px' }}>
          <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
          <Select labelId="demo-simple-select-helper-label" value={city} onChange={handleChangeCity}>
            {listCity && listCity.map(city => <MenuItem key={city._id} value={city._id}>{city.name}</MenuItem>)}
          </Select>

        </FormControl>
        <div id="btnTwo">
    <Button id="btn" className={"btnAdd"}onClick={handleAddCity} variant="contained">Add a City That Does Not Exist</Button>
   </div>
        <FormControl fullWidth style={{ marginBottom: '10px' }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select labelId="demo-simple-select-helper-label" value={category} onChange={handleChangeCategory}>
            {listCategory && listCategory.map(category => <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>)}
          </Select>
        </FormControl>
        <Button id="btn" className={"btnAdd"} onClick={handleAddCategory} variant="contained" >Add a Category That Is Not Found</Button>
       <br></br>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} style={{ marginBottom: '10px' }} />
        <TextField id="outlined-multiline-flexible" label="Address" multiline fullWidth style={{ marginBottom: '10px' }} />
        <TextField id="outlined-number" label="Amount of Beds" type="number" fullWidth style={{ marginBottom: '10px' }} />
        <TextField id="outlined-multiline-static" label="Some More Information" multiline rows={4} fullWidth style={{ marginBottom: '10px' }} />
        <TextField id="outlined-number" label="Price" type="number" fullWidth style={{ marginBottom: '10px' }} />
        ✦   <Button  id="btnAdd" className={"btnAdd"} type="submit" variant="contained" fullWidth style={{ marginBottom: '10px' }}>To Add</Button>
      </form>
    </div>
    <br></br>
    <br></br>
    <br></br>  
    </p>
  </>
}