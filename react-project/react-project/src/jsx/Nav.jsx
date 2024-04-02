import './style.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
export const Nav = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentAdvertiser'))
    const isAdvertiser=useSelector(x=>x.isAdvertiser)
    return <>
        <div className={'nav'}>
            <NavLink to='HomePage' className={'link'}><HomeIcon></HomeIcon></NavLink>
            <NavLink to='Login' className={'link'}><SwitchAccountIcon></SwitchAccountIcon></NavLink>
            <NavLink to='Register' className={'link'}><ContactMailIcon></ContactMailIcon></NavLink>
            <NavLink to='AllApartments' className={'link'}><ApartmentIcon></ApartmentIcon></NavLink>
          {currentUser && <NavLink to='AddApartment' className={'link'}><AddHomeWorkIcon></AddHomeWorkIcon></NavLink>}
          {currentUser && <NavLink to='MyApartments' className={'link'}>MyApartments</NavLink>}
         {/* {isAdvertiser&&<h6>{currentUser.email}</h6>}    */}
        </div>
    </>
}

