import React from "react";
import Nav from "./Nav";
import menu1 from "../Images/menu1.jpg";
import "./Stylesheets/Home.css";
import Footer from "./Footer";
import electronics from "../Images/electronics.jpg";
import fashion from "../Images/fashion.jpg";
import books from "../Images/books.jpg";
import grocery from "../Images/grocery.jpg";
import Modal from "./Modal";
import ModalAlreadyInCart from "./ModalAlreadyInCart";
import ModalOrder from "./ModalOrder";
import { StoreContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Test from "./Test";
function Home() {
  const Store = useContext(StoreContext);
  const { orderSuccessModal, OrderSuccessModalClose, changeCategory } = Store;
  console.log(orderSuccessModal);
  console.log(OrderSuccessModalClose);
  if (orderSuccessModal) {
    OrderSuccessModalClose();
  }
  return (
    <div className="home-body">
      <Nav></Nav>
      <div className="slider-container">
        <img src={menu1} alt="" />
      </div>
      <h3>Featured Categories</h3>
      <div className="categroy-container">
        <div
          className="category-card"
          onClick={() => changeCategory("Electronics")}
        >
          <Link
            to="/store"
            style={{ textDecoration: "none", color: "var(--theme)" }}
          >
            <img src={electronics} alt="" />
            <h4>Electronics</h4>
          </Link>
        </div>
        <div
          className="category-card"
          onClick={() => changeCategory("Fashion")}
        >
          <Link
            to="/store"
            style={{ textDecoration: "none", color: "var(--theme)" }}
          >
            <img src={fashion} alt="" />
            <h4>Fashion</h4>
          </Link>
        </div>
        <div className="category-card" onClick={() => changeCategory("Books")}>
          <Link
            to="/store"
            style={{ textDecoration: "none", color: "var(--theme)" }}
          >
            <img src={books} alt="" />
            <h4>Books</h4>
          </Link>
        </div>
        <div className="category-card" onClick={() => changeCategory("Books")}>
          <Link
            to="/store"
            style={{ textDecoration: "none", color: "var(--theme)" }}
          >
            <img src={grocery} alt="" />
            <h4>Grocery</h4>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
