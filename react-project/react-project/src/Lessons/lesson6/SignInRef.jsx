import { toBeChecked } from "@testing-library/jest-dom/matchers"
import { useRef, useState } from "react"
import swal from "sweetalert"
import { useNavigate } from 'react-router-dom'

export const SignInRef = () => {

    const emailRef = useRef()
    const passRef = useRef()

    // יצירת משתנה שאחראי על ניתוב מתוך קומפוננטה
    let nav = useNavigate()

    const login = () => {
        const user = {
            email: emailRef.current.value,
            password: passRef.current.value
        }
        swal("Hello!", "login successfully!", "success");
        // ניתוב מתוך קומפוננטה לניתוב כלךשהו שהוגדר בדף הראוטינג
        nav(`/Wellcome/${user.email}/${user.password}`)
        // שתי אופציות - אותו דבר - דרך נוספת
        // nav('/Wellcome/' + user.email)
    }

    return <>
        <h3>Sign In:</h3>
        <label htmlFor={'email'}>Email:</label><br></br>
        <input id={'email'} placeholder={'input email'} ref={emailRef}></input>
        <br></br>
        <label htmlFor={'pass'}>Password:</label><br></br>
        <input id={'pass'} placeholder={'input password'} ref={passRef}></input>
        <br></br>
        <button onClick={login}>send</button>
        <br></br>
    </>
}