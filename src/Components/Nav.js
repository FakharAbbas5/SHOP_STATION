import React from "react";
import "./Stylesheets/Nav.css";
import logo from "../logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { StoreContext } from "../App";
import { useContext } from "react";
function Nav() {
  const Store = useContext(StoreContext);
  const { changeCategory } = Store;
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const dispatchCategory = category => {
    dispatch({ type: category });
  };

  console.log(Store.category);

  return (
    <div className="Outer-Wrap">
      <div className="Header-Content">
        <div className="Header-Image-Container">
          <img src={logo} alt="" />
        </div>
        <div className="Header-Pages-Links-Container">
          <ul className="Header-Pages-Links">
            <Link
              to="/"
              style={{ textDecoration: "none", color: "var(--theme)" }}
            >
              {" "}
              <li className="Page-Link">Home</li>
            </Link>
            <Link
              to="/store"
              style={{ textDecoration: "none", color: "var(--theme)" }}
            >
              <li className="Page-Link">Store</li>
            </Link>
            {/* <li className="Page-Link">Customer Care</li> */}
            <Link to="/cart">
              <li className="Page-Link">
                <button>
                  {" "}
                  <i className="fas fa-shopping-cart"></i> My Cart
                </button>
              </li>
            </Link>

            <Link to="/cart">
              <li className="Page-Link choota">
                {" "}
                <i className="fas fa-shopping-cart"></i>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="Nav-Links">
        <ul className="Nav-Links-Container">
          <div
            className="Nav-Item"
            id={
              Store.category === "Electronics"
                ? "Item-Electronics-Selected"
                : "Item-Electronics-NotSelected"
            }
            onClick={() => changeCategory("Electronics")}
          >
            {" "}
            <Link
              to="/store"
              style={{ textDecoration: "none", color: "var(--theme)" }}
            >
              <li
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                Electronics
              </li>
            </Link>
          </div>

          <div className="Nav-Item" onClick={() => changeCategory("Fashion")}>
            <Link
              to="/store"
              style={{ textDecoration: "none", color: "var(--theme)" }}
            >
              {" "}
              <li
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                Fashion
              </li>
            </Link>
          </div>
          <div className="Nav-Item" onClick={() => changeCategory("Books")}>
            <Link
              to="/store"
              style={{ textDecoration: "none", color: "var(--theme)" }}
            >
              <li
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                Books
              </li>
            </Link>
          </div>
          <div className="Nav-Item" onClick={() => changeCategory("Grocery")}>
            <Link
              to="/store"
              style={{ textDecoration: "none", color: "var(--theme)" }}
            >
              <li
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                {" "}
                Grocery
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
