import React from 'react'
import Nav from './Nav'
import "./Stylesheets/CartProduct.css";
import { StoreProduct, StoreContext } from "../App";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
function CartProduct() {
    const store = useContext(StoreContext);
    const dispatch = useDispatch();
    const { Cart, increment, decrement, removeItemFromCart, emptyCart } = store;
    var subtotal = 0;

    Cart.forEach(item => {
        subtotal = subtotal + item.total;
    })
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    console.log(total);

    const NoOfProducts = Cart.length;

    const totalsObj = {
        subtotal,
        tax,
        total,
        NoOfProducts
    }



    dispatch({ type: "set", payload: totalsObj })
    return (
        <React.Fragment>
            {
                Cart.length < 1 ? (<div className="emptyCart">
                    <h2>Your Cart is Empty</h2>
                </div>
                ) : (
                        <div>
                            <div className="Cart-Outer-Wrapper">
                                <div className="headings-container">
                                    <div className="cart-headings">
                                        <div className="product-image-heading">
                                            <h3>Product</h3>
                                        </div>
                                        <h3 className="cart-product-name">Product Name</h3>
                                        <h3 className="cart-product-price">Price</h3>
                                        <h3 className="cart-product-quantity">Quantity</h3>
                                        <h3 className="cart-product-total">Total</h3>
                                        <h3 className="remove-cart-item">Remove</h3>
                                    </div>
                                </div>
                                {
                                    Cart.map(product => (
                                        <div className="Cart-Product" key={product._id}>
                                            <div className="cart-product-image-container">
                                                <img src={product.product_image} alt="" />
                                            </div>
                                            <div className="cart-product-details-container">
                                                <span className="cart-product-name">{product.product_name}</span>
                                                <span className="cart-product-price">₹:{product.product_unit_price}</span>
                                                <span className="cart-product-quantity"><button onClick={() => decrement(product._id)}>-</button><button>{product.quantity}</button><button onClick={() => increment(product._id)}>+</button></span>
                                                <span className="cart-product-total">₹:{product.total}</span>
                                                <div className="remove-cart-item"><i className="fas fa-trash" onClick={() => removeItemFromCart(product._id)}></i></div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="cart-checkout">

                                <div className="totals-container">
                                    <span>SubTotal: ₹{subtotal}</span>
                                    <span>Tax: ₹{tax}</span>
                                    <span>Total: ₹{total}</span>
                                </div>
                                <div className="checkout-button-container">
                                    <button className="clear-btn" onClick={emptyCart}>Clear Cart</button>
                                    <Link to="/checkout">
                                        <button className="checkout-btn">Checkout</button>
                                    </Link>
                                </div>

                            </div>
                        </div >
                    )
            }
        </React.Fragment >
    )
}

export default CartProduct
