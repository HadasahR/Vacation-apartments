import { Div } from "./Div"
import { DynamicClass } from "./DynamicClass"
import { InlineStyle } from "./InlineStyle"
import { StyleByNum } from "./StyleByNum"
import { StyleByProps } from "./StyleByProps"

export const Main = () => {
    return <>
        {/* <Div></Div> */}
        {/* <DynamicClass></DynamicClass> */}
        {/* <StyleByProps color={'blue'} size={'6rem'} text={'Hello World!'} width={'50vw'} height={'50vw'}></StyleByProps>
        <StyleByProps color={'black'} size={'1rem'} text={'Successful!'} width={'10vw'} height={'10vw'}></StyleByProps> */}
        <StyleByNum num={185}></StyleByNum>
        <StyleByNum num={20}></StyleByNum>
    </>
}