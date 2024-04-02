export const SelectCountry = (props) => {

    const { list, country } = props

    return <>
        <label htmlFor="selectCountry">select country:</label>
        <select id="selcetCountry" onChange={(e) => country(e.target.value)}>
            <option key={'none'} disabled selected>{'select country'}</option>
            {list.map((c, index) => <option key={index} value={c}>{c}</option>)}
        </select>
    </>
}