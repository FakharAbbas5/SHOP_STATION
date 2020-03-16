import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { StoreContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
function ModalAlreadyInCart() {
  const Store = useContext(StoreContext);
  const { modalClose } = Store;
  return (
    <AlreadyModalContainer>
      <div className="alreadymodal-container">
        <h3>Already In Cart</h3>
        <div className="already-buttons">
          <Link to="/store">
            {" "}
            <Button onClick={modalClose}>Store</Button>
          </Link>
          <Link to="/cart">
            {" "}
            <Button onClick={modalClose} cart>
              Cart
            </Button>
          </Link>
        </div>
      </div>
    </AlreadyModalContainer>
  );
}

export default ModalAlreadyInCart;

const AlreadyModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  .alreadymodal-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: white;
    width: 250px;
    height: 100px;
    h3 {
      color: var(--theme);
    }
  }
`;
