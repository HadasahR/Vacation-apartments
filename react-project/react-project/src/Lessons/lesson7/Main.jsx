import { Login } from "./Login"
import store from "./redux/Store"
import Register from "./Register"
import { Users } from "./Users"
import { Provider, useSelector } from 'react-redux'

export const Main = () => {

    return <>
        {/* Provider = קומפוננטה של ריאקט רידקס שמקבלת את הסטור כפרופס*/}
        {/* store = מילה שמורה שתקבל את המחסן שלי */}
        <Provider store={store}>
            {/* כל הקומפוננטות שיטענו בתוך הספק יכירו את הסטור */}
            {/* דרך טעינה, ניתוב, ילדים */}
            <Users></Users>
            <Register></Register>
            <Login></Login>
        </Provider>
    </>
}