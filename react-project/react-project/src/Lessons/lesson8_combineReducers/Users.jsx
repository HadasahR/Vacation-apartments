import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './redux/userAction'

//ייצוא של הקומפוננטה
//אפשר לייצא במקום בדרך זו גם בצורה דיפולטיבית בסוף הדף
export const Users = () => {

    //get from state
    //שליפות מהסטור באמצתעות סלקטור
    const list = useSelector(x => x.userReducer.users)
    // const list = useSelector(x => x.users.users)
    // const list = useSelector(store => store.users)

    const [index, setIndex] = useState(-1)

    let dispatch = useDispatch()

    const update = (i) => {
        setIndex(i)
    }

    const send = (event) => {
        event.preventDefault()

        const user = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }

        // dispatch(updateUser(index, user))
        dispatch(updateUser(list[index].id, user))

        setIndex(-1)
    }

    return <>
        <h1>{list.length}</h1>
        {list.map((u, index) => <div><p key={index}>{u.name} - {u.email} - {u.password}</p><button onClick={() => update(index)}>update user</button></div>)}


        {index > -1 &&
            <div>
                <h1>Update User:</h1>
                <form onSubmit={(e) => send(e)}>
                    <label htmlFor={'name'}>Name:</label><br></br>
                    <input id={'name'} placeholder={'input name'}></input>
                    <br></br>
                    <label htmlFor={'email'}>Email:</label><br></br>
                    <input id={'email'} placeholder={'input email'}></input>
                    <br></br>
                    <label htmlFor={'pass'}>Password:</label><br></br>
                    <input id={'pass'} type={'password'} placeholder={'input password'}></input>
                    <br></br>
                    <input type={'submit'} value={'send'}></input>
                    <br></br>
                </form>
            </div>
        }

    </>
}