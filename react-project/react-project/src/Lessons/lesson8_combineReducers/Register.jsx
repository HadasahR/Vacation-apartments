import { useDispatch } from 'react-redux'
import { addUser } from './redux/userAction'

const Register = () => {

    const dispatch = useDispatch()

    const send = (event) => {
        event.preventDefault()

        const user = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }
        //add to state
        //הפעלת פעולה על הסטור באמצעות דיספאצ
        dispatch(addUser(user))
        
    }

    return <>
        <h1>Register:</h1>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'name'}>Name:</label><br></br>
            <input id={'name'} placeholder={'input name'}></input>
            <br></br>
            <label htmlFor={'email'}>Email:</label><br></br>
            <input id={'email'} placeholder={'input email'}></input>
            <br></br>
            <label htmlFor={'pass'}>Password:</label><br></br>
            <input id={'pass'} type={'password'} placeholder={'input password'}></input>
            <br></br>
            <input type={'submit'} value={'send'}></input>
            <br></br>
        </form>

    </>
}

export default Register;