import { useParams } from 'react-router-dom'

export const Wellcome = () => {

    let params = useParams()

    //json שליפת ערכים של מפתחות ממשתנה 
    const { username, pass } = params

    return <>
        <h1>Wellcome!</h1>
        {/* <h2>Your Email Is: {params.username}</h2>
        <h2>Your Password Is: {params.pass}</h2>         */}
        <h2>Your Email Is: {username}</h2>
        <h2>Your Password Is: {pass}</h2>
    </>
}