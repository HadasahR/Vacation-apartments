import './style.css'

export const StyleByNum = (props) => {
    const { num } = props

    //1.
    const c = num > 100 ? 'big' : 'small'
    
    return <>
        <p className={c}>{num}</p>

        {/* 2. */}
        <p className={num > 100 ? 'big' : 'small'}>{num}</p>
    </>
}