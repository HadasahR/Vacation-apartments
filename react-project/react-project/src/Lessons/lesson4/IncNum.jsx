import React, { useState } from "react";
import { Person } from "../lesson2/Person";

export const IncNum = () => {

    let sum = 0;

    //useState - hooks
    //מערך שמכיל שני איברים
    //1. שם המשתנה
    //2. פונקציה שאחראית על עריכת המשתנה
    //useState בתוך הסוגריים של ה
    //נציב ערך התחלתי - לא חובה 
    //undefined אם לא נציב יהיה 
    //num = מכיל את הערך שיוצג על המסך
    const [num, setNum] = useState(0)
    //
    const [add, setAdd] = useState(1)

    const inc = () => {
        // num++
        //set סוגי הצבות בפונקציית 
        //1. הצבת ערך
        // setNum(5)
        //setShow(true)
        //2. הצבת משתנה
        //let x = 8
        //setNum(x)
        //3. הצבת ערך שתלוי בערך הקודם של המשתנה
        //באמצעות ביטוי למבדא
        //setNum(x => num + 6)
        setNum(num => num + add)
        sum = num * 10
        console.log(num)
        console.log(sum)
    }

    return <React.Fragment>
        <h2>{num}</h2>
        <h3>{sum}</h3>
        <label htmlFor="add">inc num by:</label>
        <input id={'add'} type="number" placeholder="inc num by" onChange={(e) => { setAdd(Number(e.target.value)) }}></input>
        <button onClick={inc}>inc</button>
        <Person name={'Ayala'} age={num}></Person>
    </React.Fragment>

}