import { useState } from "react"

export const SignUpState = (props) => {

    //פונקציית ההוספה
    const { sign } = props

    //הגדרת משתנים שיקלטו את הערכים המוזנים 
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const [newUser, setNewUser] = useState({})

    //פונקציה שמפעילה את ההוספה שהתקבלה בפרופס
    const signUp = () => {
        //יצירת משתמש חדש
        const user = { email, password: pass }
        // alert('sign up: ' + email + pass)
        sign(user)
    }

    return <>
        <h3>Sign Up:</h3>

        {/* <label htmlFor={'email'}>Email:</label><br></br>
        <input id={'email'} placeholder={'input email'} onBlur={(e) => setEmail(e.target.value)}></input>
        <br></br>
        <label htmlFor={'pass'}>Password:</label><br></br>
        <input id={'pass'} placeholder={'input password'} onBlur={(e) => setPass(e.target.value)}></input>
        <br></br>
        <button onClick={signUp}>send</button>
        <br></br> */}

        <label htmlFor={'email'}>Email:</label><br></br>
        <input id={'email'} placeholder={'input email'} onBlur={(e) => setNewUser({ ...newUser, email: e.target.value })}></input>
        <br></br>
        <label htmlFor={'pass'}>Password:</label><br></br>
        <input id={'pass'} type={'password'} placeholder={'input password'} onBlur={(e) => setNewUser({ ...newUser, password: e.target.value })}></input>
        <br></br>
        <button onClick={() => sign(newUser)}>send</button>
        <br></br>

    </>
}