import { useParams } from 'react-router-dom'

export const Details = () => {

    let p = useParams()

    return <>
        <div>
            <p>name: {p.name}</p>
            <p>area: {p.area}</p>
            <p>capital: {p.capital}</p>
        </div>
    </>
}