import { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export const Countries = () => {

    const [list, setList] = useState([
        { name: 'Israel', area: 10, capital: 'Jerusalem' },
        { name: 'U.S.A', area: 100, capital: 'Washington' },
        { name: 'Chaina', area: 80, capital: 'HongKong' },
        { name: 'Canada', area: 10, capital: 'Otava' },
        { name: 'Kuba', area: 10, capital: 'Havana' },
        { name: 'Koriea', area: 10, capital: 'Saol' },
    ])

    let nav = useNavigate()
    const show = (c) => {
        nav(`Details/${c.name}/${c.area}/${c.capital}`)
    }

    return <>
        {list.map(i => <div> <p key={i.name}>{i.name}</p> <button onClick={() => show(i)}>show details</button></div>)}
        {/* קומפוננטה שמאפשרת טעינת ילדים */}
        {/* היכן שנטען את הקומפוננטה הזו - שם יטען הילד */}
        <Outlet></Outlet>
    </>
}