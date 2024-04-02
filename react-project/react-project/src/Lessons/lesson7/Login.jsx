export const Login = () => {

    const send = (event) => {
        event.preventDefault()

        const user = {
            email: event.target[0].value,
            password: event.target[1].value
        }

        //set current user

    }

    return <>
        <h1>Login:</h1>

        <form onSubmit={(e) => send(e)}>
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