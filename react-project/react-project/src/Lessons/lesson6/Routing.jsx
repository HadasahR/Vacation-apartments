//התקנות של ראוטינג
//npm i router-dom react-router-dom

import { Route, Routes } from 'react-router-dom'
import { Countries } from './Countries'
import { Details } from './Details'
import { Home } from './Home'
import { Nav } from './Nav'
import { SignInRef } from './SignInRef'
import { SignUpState } from './SignUpState'
import { Wellcome } from './Wellcome'

//הצהרות על ניתובים
export const Routing = () => {
    return <>
        {/* Routes - מכיל כמה ניתובים */}
        <Routes>
            {/* Route - הגדרת ניתוב בודד */}
            {/* path = מחרוזת הניתוב */}
            {/* element = הקומפוננטה שתטען עבור הניתוב */}
            <Route path={'/'} element={<Home></Home>}></Route>
            <Route path={'Home'} element={<Home></Home>}></Route>
            <Route path={'Register'} element={<SignUpState></SignUpState>}></Route>
            <Route path={'Login'} element={<SignInRef></SignInRef>}></Route>
            {/* /:1שם_פרמטר2/:  שם_פרמטר */}
            <Route path={'Wellcome/:username/:pass'} element={<Wellcome></Wellcome>}></Route>
            <Route path={'List'} element={<Countries></Countries>}>
                {/* children - כתיבה בין התגיות - טעינה בנוסף לאבא */}
                <Route path={'Details/:name/:area/:capital'} element={<Details></Details>}></Route>
            </Route>
        </Routes>
    </>
}