import { useState } from "react"
import swal from "sweetalert"
import { useNavigate } from 'react-router-dom'

export const SignUpState = () => {

    const [newUser, setNewUser] = useState({})

    // use = hooks
    //א"א להגדיר בתוך פונקציה
    // יצירת משתנה שאחראי על ניתוב מתוך קומפוננטה
    const navigate = useNavigate()

    //פונקציה שמפעילה את ההוספה שהתקבלה בפרופס
    const signUp = () => {
        debugger
        swal(`שלום ${newUser.email}!`, "נרשמת בהצלחה למערכת", "success")
        // ניתוב מתוך קומפוננטה לניתוב כלךשהו שהוגדר בדף הראוטינג
        navigate(`/Wellcome/${newUser.email}/${newUser.password}`)
    }

    return <>
        <h3>Sign Up:</h3>
        
        <label htmlFor={'email'}>Email:</label><br></br>
        <input id={'email'} placeholder={'input email'} onBlur={(e) => setNewUser({ ...newUser, email: e.target.value })}></input>
        <br></br>
        <label htmlFor={'pass'}>Password:</label><br></br>
        <input id={'pass'} type={'password'} placeholder={'input password'} onBlur={(e) => setNewUser({ ...newUser, password: e.target.value })}></input>
        <br></br>
        <button onClick={() => signUp()}>send</button>
        <br></br>

    </>
}