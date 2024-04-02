export const StyleByProps = (props) => {

    const { color, size, text, width, height } = props

    const style = {
        color,
        fontSize: size,
        textAlign: 'center',
        width,
        height,
        border: 'double 2px hotpink'
    }

    return <>
        <div style={style}>
            {text}
        </div>
    </>
}