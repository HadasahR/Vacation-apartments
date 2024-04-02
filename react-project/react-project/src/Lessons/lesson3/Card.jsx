import './style.css'

export const Card = (props) => {

    //props = {content: 'Hello!', cardClass:'card'}

    const { content: text, cardClass } = props
    return <>
        <div className={cardClass}>{text}</div>
    </>
}