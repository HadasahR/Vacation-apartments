import React from 'react'
import './style.css'
import { Card } from './Card'

export const InlineStyle = () => {
    
    return <React.Fragment>
        {/* className בדכ נשתמש ב */}
        {/* אאכ העיצוב שלנו הוא דינמי - תלוי במשתנים */}
        <div className={'card'}>
            card
        </div>
        <div style={{backgroundColor:'red', fontSize:'6rem', width:'20vw', height:'20vw', margin:'5rem'}}>
            card
        </div>
        <div className='card'>
            card
        </div>

        {/* <Card cardClass={'card'} content={'Hello!'}></Card>
        <Card cardClass={'card'} content={'GoodLuck!'}></Card> */}
        
    </React.Fragment>
}