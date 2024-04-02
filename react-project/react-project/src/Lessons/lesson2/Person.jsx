import React from 'react'

//props - properties
//שם מקובל, לא חובה
export const Person = props => {

    // json ריאקט שולפת את כל המאפיינים שנשלחו לקומפוננטה ויוצרת מהם אובייקט 
    // props = {name:'sara', age:20, color:{}}

    // שולף את הערכים של המפתחות לתוך המשתנים  
    // יש לשים לב ששמות המשתנים יהיה כשמות המפתחות
    // const name=props.name
    // const age=props.age
    // 
    const { name, age, color } = props

    // return <>
    //     {/* <h2>{props['name']}</h2>
    //     <h2>{props.age}</h2>
    //     <h2>{props.color}</h2> */}

    //     {/* <h2>{name}</h2>
    //     <h2>{age}</h2>
    //     <h2>{color}</h2> */}
    // </>

    // if (age >= 9) {
    //     return <>
    //         <h1>{name} can cross the street by self✌😊😍👍</h1>
    //     </>
    // }
    // else {
    //     return <>
    //         <h1>{name}, you have to wait for {9 - age} years</h1>
    //     </>
    // }

    return <>
        {color == 'red' && <h1>צבע אדום</h1>}
        {age >= 9 ?
            <h1>{name} can cross the street by self✌😊😍👍</h1>
            :
            <h1>{name}, you have to wait for {9 - age} years</h1>}
    </>

}

