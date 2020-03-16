import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { StoreContext } from "../App";
function ModalOrder() {
  const StoreData = useContext(StoreContext);

  const { OrderSuccessModalClose } = StoreData;
  return (
    <OrderModalContainer>
      <div className="order-modal-container">
        <h3>Order Placed Sucessfully</h3>
        <Link to="/">
          {" "}
          <Button add onClick={OrderSuccessModalClose}>
            Home
          </Button>
        </Link>
        <Link to="/store">
          <Button cart add onClick={OrderSuccessModalClose}>
            Store
          </Button>
        </Link>
      </div>
    </OrderModalContainer>
  );
}

export default ModalOrder;

const OrderModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  .order-modal-container {
    background: white;
    display: flex;
    flex-flow: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    color: var(--theme);
  }
`;
