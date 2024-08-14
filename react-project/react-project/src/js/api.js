import axios from 'axios'
export const getAllApartments=()=>{
    return axios.get('http://localhost:3001/Apartment')
}
export const getMyApartments=(id)=>{
    // const  currentUser = JSON.parse(localStorage.getItem('currentAdvertiser'))
    const token = localStorage.getItem('token')
    return axios.get(`http://localhost:3001/Advertiser/getApartments/${id}`,{headers:{'Authorization':token}})
}
export const getAllUsers=()=>{
    return axios.get('http://localhost:3001/user')
}
export const getAllCities=()=>{
    return axios.get('http://localhost:3001/city')
}
export const getAllCategories=()=>{
    return axios.get('http://localhost:3001/Category')
}
export const addApartment=(newApartment)=>{
    const  currentUser = JSON.parse(localStorage.getItem('currentAdvertiser'))
    const token = localStorage.getItem('token')
    return axios.post(`http://localhost:3001/Apartment/add/${currentUser._id}`,newApartment
    ,{headers:{'Authorization':token}}
    )
}
export const AddCity=(City)=>{
    const  currentUser = JSON.parse(localStorage.getItem('currentAdvertiser'))
    const token = localStorage.getItem('token')
  return axios.post(`http://localhost:3001/City/addCity/${currentUser._id}`,City,{headers:{'Authorization':token}})
}
//

export const AddCategory=(Category)=>{
    const  currentUser = JSON.parse(localStorage.getItem('currentAdvertiser'))
    const token = localStorage.getItem('token')
  return axios.post(`http://localhost:3001/Category/add/${currentUser._id}`,Category,{headers:{'Authorization':token}})
}
export const loginAsUser=(u)=>{
    debugger
    return axios.post('http://localhost:3001/User/login',u)
}
export const loginAsAdvertiser=(u)=>{
    return axios.post('http://localhost:3001/Advertiser/login',u)
}
export const advertiserRegister=(u)=>{
    return axios.post('http://localhost:3001/Advertiser/register',u)
}
export const userRegister=(u)=>{
    return axios.post('http://localhost:3001/User/register',u)
}
export const sortByCategory=(idCategory)=>{
    return axios.get(`http://localhost:3001/Apartment/getByIdCategory/${idCategory}`)
}
export const sortByCity=(idCity)=>{
    return axios.get(`http://localhost:3001/Apartment/getByIdCity/${idCity}`)
}
export const deleteApartmentById=(idApartment)=>{
     const  currentAdvertiser =JSON.parse(localStorage.getItem('currentAdvertiser'))
     const token = localStorage.getItem('token')
  return axios.delete(`http://localhost:3001/Apartment/delete/${idApartment}/${currentAdvertiser._id}`,{headers:{'Authorization':token}})
}
export const sortByNumBeds=(numBeds)=>{
     return axios.get(`http://localhost:3001/Apartment/getByNumBeds/${numBeds}`)
 }
 export const sortByPrice=(min,max)=>{
     return axios.get(`http://localhost:3001/Apartment/getByPrice/${min}/${max}`)
 }
export const apartmentUpdate=(a)=>{
    const token = localStorage.getItem('token')
    return axios.patch('http://localhost:3001/Apartment/update',a,{headers:{'Authorization':token}})
  }