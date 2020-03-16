import React, { useState, useContext } from 'react'
import { StoreContext } from "../App";
import CartProduct from './CartProduct';
import Nav from './Nav';
function Cart() {
    return (
        <React.Fragment>
            <Nav />
            <CartProduct />
        </React.Fragment>
    )
}

export default Cart
