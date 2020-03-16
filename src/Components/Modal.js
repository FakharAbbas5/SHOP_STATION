import React from "react";
import styled from "styled-components";
import { detailProduct } from "../Data";
import Button from "./Button";
import { Link } from "react-router-dom";
import { StoreContext } from "../App";
import { useContext } from "react";
function Modal(props) {
  console.log(detailProduct);
  const Store = useContext(StoreContext);
  const { modalClose, modalProduct } = Store;
  console.log(modalProduct);
  return (
    <ModalContainer>
      <div className="modal-container">
        <h3>Item Added to Cart</h3>
        <img src={modalProduct.product_image} alt="" />
        <h5>{modalProduct.product_name}</h5>
        <h5>Price: ₹{modalProduct.product_unit_price}</h5>
        <Link to="/store">
          {" "}
          <Button onClick={modalClose}>Store</Button>
        </Link>
        <Link to="/cart">
          {" "}
          <Button cart onClick={modalClose}>
            {" "}
            Cart
          </Button>
        </Link>
      </div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-container {
    background: var(--mainWhite);
    padding: 5px 50px;
    text-align: center;
    img {
      display: block;
      max-width: 150px;
      max-height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    h5 {
      flex-basis: 5%;
      // background:red;
    }
  }
`;

export default Modal;
