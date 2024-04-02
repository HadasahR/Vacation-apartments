import { toBeChecked } from "@testing-library/jest-dom/matchers"
import { useRef, useState } from "react"
import swal from "sweetalert"
import '../lesson3/style.css'

export const SignInRef = (props) => {

    const { check } = props

    //יצירת מצביע לפקד שיאפשר לגשת לפקד עליו הוא מצביע - לשלוף ערך, לערוך שינויים במאפיינים
    //document.getElement
    //.getAttribute
    //.setAttribute
    const emailRef = useRef()
    const passRef = useRef()

    const h3Ref = useRef()

    const login = () => {

        h3Ref.current.className = 'red'
        h3Ref.current.innerHTML = emailRef.current.value

        console.log(emailRef);
        const user = {
            email: emailRef.current.value,
            password: passRef.current.value
        }
        if (check(user)) {
            swal("Hello!", "login successfully!", "success");
        }
        else
            swal("Oopps!", "login failed!", "error");
    }

    return <>
        <h3 ref={h3Ref}>Sign In:</h3>
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