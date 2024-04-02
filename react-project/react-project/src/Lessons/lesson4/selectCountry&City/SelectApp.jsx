import { useState } from "react"
import { Register } from "./Register"
import { SelectCountry } from "./SelectCountry"
import { SelectCity } from "./SelectCity"

export const SelectApp = () => {

    const dic = {
        "Israel": ["Jerusalem", "Tel-Aviv", "Haifa", "Jaffa", "Beitar", "Bnei Braq", "Beit Shemesh"],
        "France": ["Merssei", "Paris", "Versai", "Elzas Loren", "Normandy"],
        "Yemen": ["Zana'a", "Aden", "Shar'ab", "Damt"]
    }

    // let a = { id: 1, name: "fgfgh" }
    // a['id']
    // a.id

    const [name, setName] = useState('Annonymous')
    const [country, setCountry] = useState()
    const [city, setCity] = useState()

    //אוסף את כל המפתחות מתוך המילון לתוך מערך
    const countries = Object.keys(dic)
    const cities = dic[country]

    const selectACountry = (value) => {
        setCountry(value)
    }

    return <>
        <h2>Hello {name}</h2>
        {name == 'Annonymous' && <Register name={name} change={setName}></Register>}
        {name != 'Annonymous' && !country && <SelectCountry list={countries} country={selectACountry} ></SelectCountry>}
        {country && !city && <SelectCity list={cities} city={setCity}></SelectCity>}
        {country && city && <h3>You live in {country} - {city}</h3>}
    </>
}