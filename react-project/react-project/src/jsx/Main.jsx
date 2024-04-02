import { BrowserRouter } from "react-router-dom"
import { Routing } from "./Routing"
import { Nav } from "./Nav"
import store from '../js/store'
import { Provider } from "react-redux"
export const Main = () => {
  return <>
   <Provider store={store}>
   <BrowserRouter>
            {/* nav טוענת את ה */}
            <Nav></Nav>
            {/* טוענת את כל הצהרות הניתובים */}
            <Routing></Routing>
        </BrowserRouter>
        </Provider>
  </>
}