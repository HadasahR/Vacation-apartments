import { combineReducers, createStore } from 'redux';
import productReducer from './productReducer'
import userReducer from './userReducer'

//combineReducers = שילוב רדיוסרים
//פונקציה מובנית של רידקס 
//שמאפשרת לשלב כמה רדיוסרים לרדיוסר אחד
const reducer = combineReducers({
    productReducer,
    userReducer

    // products: productReducer,
    // users: userReducer
})

//יצירת המחסן - מקבל את הרדיוסר
const store = createStore(reducer)
window.store = store;
export default store;