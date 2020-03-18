import React from "react";
import Nav from "./Nav";
import "./Stylesheets/CheckOut.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";
import { StoreContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import ModalOrder from "./ModalOrder";
import ModalFillOrderDetails from "./ModalFillOrderDetails";
function CheckOut() {
  const Store = useContext(StoreContext);
  const dispatch = useDispatch();
  const {
    emptyCart,
    Cart,
    orderSuccessModal,
    OrderSuccessModalOpen,
    OrderSuccessModalClose
  } = Store;
  console.log(orderSuccessModal);
  const gs = useSelector(state => state);
  const { totals, FillModal } = gs;
  const regEmail = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const regFullName = RegExp(/[a-z]{1,15}$/);
  const regContact = RegExp(
    /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
  );

  //states
  const [customer_name, setCustomerName] = useState("");
  const [customer_email, setCustomerEmail] = useState("");
  const [customer_contact, setCustomerContact] = useState("");
  const [customer_shipping_address, setCustomerShippingAddress] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [customer_name_error, setCustomerNameError] = useState("");
  const [customer_email_error, setCustomerEmailError] = useState("");
  const [customer_contact_error, setCustomerContactError] = useState("");
  const [
    customer_shipping_address_error,
    setCustomerShippingAddressError
  ] = useState("");
  const [body, setBody] = useState();

  const changeHandler = event => {
    switch (event.target.name) {
      case "name":
        setCustomerName(event.target.value);
        event.target.value.match(regFullName)
          ? setCustomerNameError("")
          : setCustomerNameError("Please Enter Valid Name");
        return;
      case "email":
        setCustomerEmail(event.target.value);
        event.target.value.match(regEmail)
          ? setCustomerEmailError("")
          : setCustomerEmailError("Please Enter Valid Email Address");

        return;
      case "contact":
        setCustomerContact(event.target.value);
        regContact.test(event.target.value)
          ? setCustomerContactError("")
          : setCustomerContactError("Please Enter Valid Contact Number");
        return;
      case "shipping_address":
        setCustomerShippingAddress(event.target.value);
        event.target.value.length < 5
          ? setCustomerShippingAddressError("Please Enter Valid Address")
          : setCustomerShippingAddressError("");
        return;
      default:
        break;
    }
  };
  useEffect(() => {
    console.log(
      customer_name_error,
    );
  }, [
    customer_name_error
  ]);

  const formIsValid = () => {
    var valid = true;
    // console.log(customer_contact_error.length);
    // console.log(customer_email_error.length);
    // console.log(customer_name_error.length);
    // console.log(customer_shipping_address_error.length);

    // console.log(customer_name);
    // console.log(customer_email);
    // console.log(customer_shipping_address);
    // console.log(customer_contact);

    if (
      customer_name === "" ||
      customer_email === "" ||
      customer_shipping_address === "" ||
      customer_contact === "" ||
      customer_name_error.length > 0 ||
      customer_email_error.length > 0 ||
      customer_shipping_address_error.length > 0 ||
      customer_contact_error.length > 0 ||
      Cart.length < 1
    ) {
      console.log("Im in");
      valid = false;
    }
    // console.log(valid);
    setFormValid(valid);
    return valid;
  };

  useEffect(() => {
    console.log(formValid);
  }, [formValid]);

  const confirmOrder = () => {
    const valid = formIsValid();
    console.log(valid);
    if (valid) {
      dispatch({ type: "HideFillOrderDetailsModal" });
      const body = {
        customer_name,
        customer_email,
        customer_contact,
        customer_shipping_address,
        products: []
      };
      Cart.forEach(item => {
        body.products = body.products.concat({
          _id: item._id,
          quantity: item.quantity
        });
      });

      console.log(body);
      setBody(body);
    } else {
      dispatch({ type: "ShowFillOrderDetailsModal" });
    }
  };

  useEffect(() => {
    console.log(body);
    if (body) {
      Axios.post("http://localhost:3001/orders", body)
        .then(res => {
          console.log(res);
          if (res.status == 201) {
            OrderSuccessModalOpen();
          } else {
            OrderSuccessModalClose();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [body]);

  return (
    <React.Fragment>
      <Nav />
      {FillModal ? <ModalFillOrderDetails /> : null}
      <div className="CheckOut">
        <h3>Fill Details to Confirm</h3>
      </div>
      <div className="checkout-outer-container">
        <div className="checkout-details-container">
          <div className="checkout-label">
            <label>Full Name</label>
          </div>
          <div className="checkout-input">
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              className={
                customer_name_error.length > 0
                  ? "error-border"
                  : "simple-border"
              }
            />
          </div>
          <div className="checkout-label">
            <label>Email</label>
          </div>
          <div className="checkout-input">
            <input
              type="text"
              name="email"
              onChange={changeHandler}
              className={
                customer_email_error.length > 0
                  ? "error-border"
                  : "simple-border"
              }
            />
          </div>
          <div className="checkout-label">
            <label>Contact</label>
          </div>
          <div className="checkout-input">
            <input
              type="number"
              name="contact"
              onChange={changeHandler}
              className={
                customer_contact_error.length > 0
                  ? "error-border"
                  : "simple-border"
              }
            />
          </div>
          <div className="checkout-label">
            <label>Shipping Address</label>
          </div>
          <div className="checkout-input">
            <textarea
              name="shipping_address"
              onChange={changeHandler}
              className={
                customer_shipping_address_error.length > 0
                  ? "error-border"
                  : "simple-border"
              }
            ></textarea>
          </div>
        </div>
        <div className="checkout-summary-container">

          <div className="summary">
            <h4>Order Summary</h4>
            <h6>No. of Products: {totals.NoOfProducts}</h6>
            <h6>SubTotal: {totals.subtotal}₹</h6>
            <h6>Tax: {totals.tax}₹</h6>
            <h6>Total: {totals.total}₹</h6>
          </div>
          <div className="checkout-buttons-container">
            <div className="confirm-button">
              <button onClick={confirmOrder}>Confirm</button>
            </div>
            <div className="cancel-button">
              <Link to="/store">
                <button onClick={emptyCart}>Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {orderSuccessModal ? <ModalOrder /> : null};
    </React.Fragment>
  );
}

export default CheckOut;
