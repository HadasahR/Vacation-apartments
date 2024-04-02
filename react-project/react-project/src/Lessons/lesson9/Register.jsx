import { AddUser } from "./api"

const Register = () => {

    const send = (event) => {
        event.preventDefault()

        const user = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }

        AddUser(user)
            .then(x => {
                //x.data - יכיל את מה שחזר מהשרת

            })
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