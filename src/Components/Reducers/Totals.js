const totalsReducer = (currentState = { subtotal: 0, tax: 0, total: 0, NoOfProducts: 0 }, action) => {
    switch (action.type) {
        case "set":
            const obj1 = {
                subtotal: action.payload.subtotal,
                tax: action.payload.tax,
                total: action.payload.total,
                NoOfProducts: action.payload.NoOfProducts
            }
            return obj1;
        case "reset":
            const obj2 = { subtotal: 0, tax: 0.05, total: 0, NoOfProducts: 0 }
            return obj2
        default:
            return currentState;
    }
}

export default totalsReducer;