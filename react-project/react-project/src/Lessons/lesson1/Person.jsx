import React from 'react'

export function Person() {
    const name = 'Ruti'
    const age = 19

    // xml + js קומפוננטה היא פונקציה שמחזירה
    // כל קומפוננטה חייבת להחזיר רק תגית אחת
    // 
    return (
        <>
            <h2>{name}</h2>
            <h2>{age}</h2>
        </>
        
        // <React.Fragment>
        //     <h2>{name}</h2>
        //     <h2>{age}</h2>
        // </React.Fragment>

        // <div>
        //     <h2>{name}</h2>
        //     <h2>{age}</h2>
        // </div>
    )
}