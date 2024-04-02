export const SelectCity = (props) => {

    const { list, city } = props

    return <>
        <label htmlFor="selcetCity">select city:</label>
        <select id="selectCity" onChange={(e) => city(e.target.value)}>
            <option key={'none'} disabled selected>{'select city'}</option>
            {list.map((c, index) => <option key={index} value={c}>{c}</option>)}
        </select>
    </>
}