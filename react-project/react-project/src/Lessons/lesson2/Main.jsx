import { Person } from "./Person"
import { Arr } from "./Arr"

export const Main = () => {
    return <>
        <Person name={'sara'} age={20}></Person>
        <Person name={'tamar'} age={2}></Person>
        <Person age={80} name={'pnini'} color={'red'}></Person>
        <Arr></Arr>
    </>
}
