import store from "../lesson7/redux/Store"
// import Register from "./Register"
import { Users } from "./Users"
import { Provider } from 'react-redux'
import { useState } from "react"

export const Main = () => {

    const [show, setShow] = useState(false)

    return <>
        <Provider store={store}>
            <button onClick={() => setShow(show => !show)}>show</button>
            {/* הקומפוננטה תטען רק כאשר המשתנה הבוליאני = אמת */}
            {show && <Users></Users>}
            {/* <Register></Register> */}
        </Provider>
    </>
}