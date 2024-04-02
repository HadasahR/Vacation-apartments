export const Register = (props) => {

    const { name, change } = props

    return <>
        <input defaultValue={name} onBlur={(e) => { change(e.target.value) }}></input>
    </>
}