import React from "react";
import Nav from "./Nav";
import { detailProduct } from "../Data";
import "./Stylesheets/ProductDetails.css";
import { useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { StoreContext } from "../App";
import { useContext } from "react";
import ModalAlreadyInCart from "./ModalAlreadyInCart";
import Modal from "./Modal";
function ProductDetails(props) {
  const Store = useContext(StoreContext);
  const { add2Cart, itemExistsModalOpen, isModalOpen } = Store;

  console.log(detailProduct);
  console.log(props.history.location.state);

  const product = props.history.location.state;
  return (
    <React.Fragment>
      <Nav />
      <div className="product-detail-outer-wraper">
        <div className="product-image-container">
          <img src={product.product_image} alt="" />
        </div>
        <div className="product-details-container">
          <h2>{product.product_name}</h2>
          <h4>By:{product.product_brand}</h4>
          <h5>Price:₹{product.product_unit_price}</h5>
          <p>{product.product_description}</p>
          <div className="buttons-container">
            <Link to="/store">
              <Button add className="btn-container store">
                Store
              </Button>
            </Link>

            <Button
              cart
              add
              className="btn-container cart"
              onClick={() => add2Cart(product)}
            >
              {product.inCart ? "Already in Cart" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>
      {isModalOpen ? <Modal /> : null}

      {itemExistsModalOpen ? <ModalAlreadyInCart></ModalAlreadyInCart> : null}
    </React.Fragment>
  );
}

export default ProductDetails;
