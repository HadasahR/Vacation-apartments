// npm i axios - ספרייה לקריאות שרת
import axios from "axios"

export const GetTodos = () => {
    //axios.apiRequestType = סוג קריאת השרת
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
}

export const GetTodoById = (id) => {
    //axios.apiRequestType = סוג קריאת השרת
    //get = שליפה
    //לא מקבלת פרמרטים בגוף הבקשה!
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}

export const Login = (email, password) => {
    //שרשור פרמטרים
    return axios.get(`https://localhost:3001/users/login/${email}/${password}`)
}

export const AddUser = (user) => {
    //post = הוספה
    //מקבל אובייקט בגוף הבקשה
    return axios.post(`https://localhost:3001/users/register`, user)
}

export const UpdateUser = (id, user) => {
    //put = עדכון
    //מקבל פרמטר לפיו נמצא את האובייקט ונעדכן - שרשור 
    //אובייקט בגוף הבקשה שיכיל את הנתונים החדשים
    return axios.put(`https://localhost:3001/users/update/${id}`, user)
}

export const DeleteUser = (id) => {
    //delete = עדכון
    //מקבל פרמטר לפיו נמצא את האובייקט ונמחק - שרשור 
    return axios.delete(`https://localhost:3001/users/remove/${id}`)
}
