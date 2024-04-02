import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AllApartments } from './AllApartments'
import { AddApartment } from './AddApartment'
import { Login } from './Login'
import { Register } from './Register'
import { MyApartments } from './MyApartments'
export const Routing = () => {
    return <>
      <Routes>
             <Route path={'/'} element={<HomePage></HomePage>}></Route> 
             <Route path={'/AllApartments'} element={<AllApartments></AllApartments>}></Route> 
             <Route path={'/MyApartments'}element={<MyApartments></MyApartments>}></Route>
             <Route path={'/AddApartment'} element={<AddApartment></AddApartment>}></Route>
             <Route path={'/HomePage'} element={<HomePage></HomePage>}></Route> 
             <Route path={'/Login'} element={<Login></Login>}></Route> 
             <Route path={'/Register'} element={<Register></Register>}></Route> 
        </Routes> 
       
    </>
}