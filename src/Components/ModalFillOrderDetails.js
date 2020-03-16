import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function ModalFillOrderDetails() {
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch({ type: "HideFillOrderDetailsModal" });
  };
  return (
    <ModalFillOrderDetailsContainer>
      <div className="FillOrder-Inner-Container">
        <h3>Please fill the form to Continue</h3>
        <Link to="/checkout">
          <Button cart onClick={hideModal}>
            Fill Details
          </Button>
        </Link>
      </div>
    </ModalFillOrderDetailsContainer>
  );
}

export default ModalFillOrderDetails;

const ModalFillOrderDetailsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  .FillOrder-Inner-Container {
    background: white;
    padding: 5px 15px;
    display: flex;
    flex-flow: column;
    jusify-content: center;
    align-items: center;
    color: var(--theme);
  }
`;
