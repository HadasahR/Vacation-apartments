//פונקציות עריכה

export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const addUser = (newUser) => {
    return { type: 'ADD_USER', payload: newUser }
}

export const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}