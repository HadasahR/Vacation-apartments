//immer - ספריה שמאפשרת עריכת משתנים סופיים - constant variables
import { produce } from 'immer';

import { createStore } from 'redux';

//State - משתנה גלובלי שיהיה מוכר לכל הקומפוננטות
//initialState = סטייט מאותחל
//שם מקובל - לא חובה
const initialState = {
    users: [
        { name: 'Shulamit', email: 'shb7101@gmail.com', password: '7101' },
        { name: 'Israel', email: 'il0504123229@gmail.com', password: '229' },
        { name: 'Michal', email: 'mk0527660151@gmail.com', password: '0151' }
    ],
    currentUser: { name: 'Annonymous' },
    products: [
        { description: 'Ball', price: 10 },
        { description: 'Doll', price: 50 },
        { description: 'Computer', price: 3500 }
    ]
}

//reducer - לא מילה שמורה!
//produce - פונקציה מובנית
//מזהה את הפעולות שנשלחות לאויר ומפעילה אותן בפועל על הסטייט
//מקבלת שני ארגומנטים
//1. callback פונקציית 
//2. סטייט שעליו נפעיל את הפעולות
//הפונקציה הפנימית מקבלת שני ארגומנטים
//1. state - הסטייט שהתקבל בפונקציה החיצונית
//2. action - פעולה כלשהיא
//הפונקציה הפנימית תבדוק איזה פעולה נשלחה ותפעיל אותה על הסטייט
const reducer = produce((state, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            break;
        case 'ADD_USER':
            state.users = [...state.users, action.payload]
            break;
        case 'ADD_PRODUCT':
            state.products = [...state.products, action.payload]
            break;
        default:
            break;
    }

}, initialState)

//יצירת המחסן - מקבל את הרדיוסר
const store = createStore(reducer)
window.store = store;
export default store;