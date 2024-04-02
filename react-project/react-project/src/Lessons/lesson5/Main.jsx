import { useState } from "react"
import { Form } from "./Form"
import { SignInRef } from "./SignInRef"
import { SignUpState } from "./SignUpState"
import swal from "sweetalert"

export const Main = () => {

    //
    const [up, setUp] = useState(false)
    const [login, setLogin] = useState(false)

    //הגדרת מערך בסטייט
    const [users, setUsers] = useState(
        [
            { email: 'shb7101@gmail.com', password: '7101' },
            { email: 'il0504123229@gmail.com', password: '229' },
            { email: 'mk0527660151@gmail.com', password: '0151' }
        ]
    )

    //פונקציה שמוסיפה משתמש 
    const addUser = (user) => {
        // let u = users
        // u.push(user)
        // setUsers(u)

        //... = שפיכת כל האיברים שהיו במערך
        //הוספת האיבר החדש 
        setUsers([...users, user])
        swal(`שלום ${user.email}!`, "נרשמת בהצלחה למערכת", "success")
    }

    //פונקציה שבודקת האם המשתמש קיים במערך
    const check = (user) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == user.email && users[i].password == user.password)
                return true
        }
        return false
    }

    return <>
        <ul>
            {/* שלחנו את הפונקציה של ההוספה, ע"מ שתהיה גישה למערך */}
            <SignUpState sign={addUser}></SignUpState>
            <SignInRef check={check}></SignInRef>
            {users.map((user, i) => <li key={i}>{user.email}</li>)}

            {/* <Form></Form> */}
        </ul>
    </>
}