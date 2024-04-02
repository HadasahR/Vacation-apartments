import { useState } from "react"
import { SignInRef } from "./SignInRef"
import { SignUpState } from "./SignUpState"
import swal from "sweetalert"
import { Routing } from "./Routing"
import { Nav } from "./Nav"
import { BrowserRouter } from "react-router-dom";

export const Main = () => {

    return <>
        {/* BrowserRouter - מסנן את הקומפוננטות הטעונות - נותן אפשרות לטעון רק ניתוב אחד */}
        {/* קומפוננטה שמנהלת את כל הניתובים */}
        <BrowserRouter>
            {/* nav טוענת את ה */}
            <Nav></Nav>
            {/* טוענת את כל הצהרות הניתובים */}
            <Routing></Routing>
        </BrowserRouter>

    </>
}