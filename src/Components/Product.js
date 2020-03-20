import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { storeProducts } from "../Data";
import "./Stylesheets/Product.css";
import { StoreContext } from "../App";
import Modal from "./Modal";
import { useEffect } from "react";
import ModalAlreadyInCart from "./ModalAlreadyInCart";
function Product() {
  const Store = useContext(StoreContext);
  const [index, setIndex] = useState();
  const {
    Products,
    add2Cart,
    isModalOpen,
    itemExistsModalOpen,
    modalAlreadyOpen,
    searchResult,
    catData,
    searching,
    categoryProducts,
    checkCartStatus
  } = Store;
  console.log(categoryProducts)
  console.log(Object.keys(catData).length);
  if (Object.keys(catData).length > 0) {
    console.log(catData);
  }
  return (
    <React.Fragment>
      {!searching ? (
        <div className="Products-Outer-Wrapper">
          {Object.keys(catData).length > 0 ? (
            <img src={catData.category_image} alt="" />
          ) : (
              console.log("I m Mad")
            )}

          {
            (categoryProducts.length <= 0) ? (
              Products.map(product => (
                <div className="product-container" key={product._id}>
                  <Link to={{ pathname: "/productdetails", state: product }}>
                    <img src={product.product_image} />
                  </Link>
                  <span className="product-title">{product.product_name}</span>
                  <span>₹{product.product_unit_price}</span>

                  <button onClick={() => add2Cart(product)}>
                    {
                      checkCartStatus(product)
                    }
                    {product.inCart ? "In Cart" : "Add to Cart"}
                  </button>
                </div>
              ))
            ) : (

                categoryProducts.map(product => (
                  <div className="product-container" key={product._id}>
                    <Link to={{ pathname: "/productdetails", state: product }}>
                      <img src={product.product_image} />
                    </Link>
                    <span className="product-title">{product.product_name}</span>
                    <span>₹{product.product_unit_price}</span>

                    <button onClick={() => add2Cart(product)}>
                      {
                        Products[checkCartStatus(product)].inCart ? "In Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))
              )
          }


          {}
          {isModalOpen ? <Modal /> : null}

          {itemExistsModalOpen ? (
            <ModalAlreadyInCart></ModalAlreadyInCart>
          ) : null}
        </div>
      ) : (
          <div className="Products-Outer-Wrapper">
            <div className="search-results">
              {searchResult.length < 0 ? (
                console.log("No search result")
              ) : (
                  <h3>Search Results:</h3>
                )}
            </div>
            {searchResult.map(product => (
              <div className="product-container" key={product._id}>
                <Link to={{ pathname: "/productdetails", state: product }}>
                  <img src={product.product_image} />
                </Link>
                <span className="product-title">{product.product_name}</span>
                <span>${product.product_unit_price}</span>

                <button onClick={() => add2Cart(product)}>
                  {" "}
                  {product.inCart ? "In Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
            {}
            {isModalOpen ? <Modal /> : null}

            {itemExistsModalOpen ? (
              <ModalAlreadyInCart></ModalAlreadyInCart>
            ) : null}
          </div>
        )}
    </React.Fragment>
  );
}

export default Product;
