import Tut from '../../images/Strawberry.JPG'
import B from '../../images/Banana.JPG'
// import g from '../../../public/images/Grape.JPG'

export const Image = () => {
    return <>
        <img src={Tut} width={'200px'} height={'auto'}></img>
        <img src={B} width={'200px'} height={'auto'}></img>
        <img src={`${process.env.PUBLIC_URL}/images/Grape.JPG`} width={'200px'} height={'auto'}></img>
    </>
}