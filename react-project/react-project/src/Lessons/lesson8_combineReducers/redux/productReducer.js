import { produce } from 'immer'

const productState = {
    products: [
        { description: 'Ball', price: 10 },
        { description: 'Doll', price: 50 },
        { description: 'Computer', price: 3500 }
    ]
}

const productReducer = produce((state, action) => {

    switch (action.type) {
        case 'ADD_PRODUCT':
            state.products = [...state.products, action.payload]
            break;
        default:
            break;
    }

}, productState)

export default productReducer;