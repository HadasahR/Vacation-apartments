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
    //לשלוף את קוד המפרסם הנוכחי 
  return axios.post(`http://localhost:3001/City/addCity/${currentUser._id}`,City,{headers:{'Authorization':token}})
}
//

export const AddCategory=(Category)=>{
    const  currentUser = JSON.parse(localStorage.getItem('currentAdvertiser'))
    const token = localStorage.getItem('token')
    //לשלוף את קוד המפרסם הנוכחי 
  return axios.post(`http://localhost:3001/Category/add/${currentUser._id}`,Category,{headers:{'Authorization':token}})
}
//מקבל בגוף הבקשה מייל וסיסמה
export const loginAsUser=(u)=>{
    debugger
    return axios.post('http://localhost:3001/User/login',u)
}
//התחברות כמפרסם
//מקבל בגוף הבקשה מייל וסיסמה
export const loginAsAdvertiser=(u)=>{
    return axios.post('http://localhost:3001/Advertiser/login',u)
}
//רישום מפרסם
export const advertiserRegister=(u)=>{
    return axios.post('http://localhost:3001/Advertiser/register',u)
}
//רישום משתמש
export const userRegister=(u)=>{
    return axios.post('http://localhost:3001/User/register',u)
}
//סינון לפי קטוגריה 
export const sortByCategory=(idCategory)=>{
    return axios.get(`http://localhost:3001/Apartment/getByIdCategory/${idCategory}`)
}
//סינון לפי עיר
export const sortByCity=(idCity)=>{
    return axios.get(`http://localhost:3001/Apartment/getByIdCity/${idCity}`)
}
//מחיקת דירה 
export const deleteApartmentById=(idApartment)=>{
    debugger
     const  currentAdvertiser =JSON.parse(localStorage.getItem('currentAdvertiser'))
     const token = localStorage.getItem('token')
  return axios.delete(`http://localhost:3001/Apartment/delete/${idApartment}/${currentAdvertiser._id}`,{headers:{'Authorization':token}})
}
//סינון לפי מספר מיטות 
export const sortByNumBeds=(numBeds)=>{
    debugger
     return axios.get(`http://localhost:3001/Apartment/getByNumBeds/${numBeds}`)
 }
 //סינון לפי מחיר
 export const sortByPrice=(min,max)=>{
     debugger
     return axios.get(`http://localhost:3001/Apartment/getByPrice/${min}/${max}`)
 }
  //עדכון דירה 
export const apartmentUpdate=(a)=>{
    const token = localStorage.getItem('token')
    return axios.patch('http://localhost:3001/Apartment/update',a,{headers:{'Authorization':token}})
  }