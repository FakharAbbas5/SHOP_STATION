import React from "react";
import Nav from "./Nav";
import Product from "./Product";
import "./Stylesheets/Store.css";
import Footer from "./Footer";
import { StoreContext } from "../App";
import { useContext } from "react";
function Store() {
  const store = useContext(StoreContext);
  const { searchItems, Products } = store;
  const searchChangeHandler = event => {
    searchItems(event.target.value);
  };
  return (
    <React.Fragment>
      <Nav />
      <div className="wrapper">
        <input
          type="text"
          name="searchbar"
          placeholder="Search Product"
          onChange={searchChangeHandler}
        />
      </div>
      {Products.length < 1 ? (
        <div className="server-error">
          <h1 style={{ textAlign: "center" }}>
            Server Error Come Back later or Refresh the Page
          </h1>
        </div>
      ) : (
        <div className="External-Wrap">
          <div className="product-wrap">
            <Product />
          </div>
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
}

export default Store;
