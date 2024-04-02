import { useState } from "react"

export const Form = () => {

    const send = (event) => {
        //ביטול ברירת המחדל של סבמיט - רוצה לעבור לניתוב אחר
        event.preventDefault()
        console.log(event);

        //event.target = form
        //הטופס שהפעיל את האירוע של סבמיט
        //הטופב מקבל אוטומטית מערך של כל האינפוטים שיש בתוכו
        //כך נוכל לגשת לערכים שלהם ישירות
        const user = {
            email: event.target[0].value,
            password: event.target[1].value
        }

    }

    return <>
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