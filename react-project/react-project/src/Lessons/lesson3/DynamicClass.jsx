import './style.css'

export const DynamicClass = () => {

    return <>
        <Console type={'info'} message={'We are learning react!'}></Console>
        <Console type={'warning'} message={'Warning: Each child should has a unique key'}></Console>
        <Console type={'error'} message={'Error: cannot assign to a constant variable!'}></Console>
    </>

}

export const Console = (props) => {

    const { message, type } = props

    return <>
        <div className={`message ${type}`}>{message}</div>
        {/* <div className={'message ' + { type }}>{message}</div> */}
    </>
}
