import './style.css'
import { Link, NavLink } from 'react-router-dom'

export const Nav = () => {
    return <>

        <div className={'nav'}>
            
            {/* <Link to={'Register'} className={'link'}>Register</Link>
            <Link to={'Login'} className={'link'}>Login</Link> */}

            {/* NavLink - active מזהה את הניתוב העכשוי ונותן לו את העיצוב של*/}
            <NavLink to='Home' className={'link'}>Home</NavLink>
            <NavLink to='Login' className={'link'}>Login</NavLink>
            <NavLink to='Register' className={'link'}>Register</NavLink>
            <NavLink to='List' className={'link'}>Countries</NavLink>
        </div>


        {/* a- נגשת לשרת עבור שליפה של כל מחדש */}
        {/* <a></a> */}
        {/* קומפוננטה של ריאקט - Link */}
        {/* link - טוען את היישום מקומית וניגש לשם לשלוף את הקומפוננטה הרצויה */}

    </>
}