import { produce } from 'immer'

const userState = {
    users: [
        { id: 1, name: 'Shulamit', email: 'shb7101@gmail.com', password: '7101' },
        { id: 2, name: 'Israel', email: 'il0504123229@gmail.com', password: '229' },
        { id: 3, name: 'Michal', email: 'mk0527660151@gmail.com', password: '0151' }
    ],
    currentUser: { name: 'Annonymous' },
}

const userReducer = produce((state, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            break;
        case 'ADD_USER':
            state.users = [...state.users, action.payload]
            break;
        case 'UPDATE_USER':
            console.log(action.payload);

            //filter - פונקציית סינון שמקבלת ביטוי למבדא עם תנאי לסינון
            //מחזירה מערך של כל האובייקטים שענו על התנאי
            //אם נרצה לגשת לאובייקט בודד - ניקח את המקום האפס
            debugger
            let user = state.users.filter(u => u.id == action.payload.index)[0]
            let i = state.users.indexOf(user)
            console.log(i);
            state.users[i] = action.payload.user

        // state.users[action.payload.index] = action.payload.user
        default:
            break;
    }

}, userState)

export default userReducer