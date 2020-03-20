import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Router from "./Components/Router";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Components/Product";
export const StoreContext = React.createContext();
function App() {
  const cat = useSelector(state => state.category);
  console.log(cat);
  const [Products, setProducts] = useState([]);
  const [ProductsAll, setProductsAll] = useState([]);
  const [Cart, setCart] = useState([]);
  const [CartTotal, setCartTotal] = useState();
  const [cartAfterRemoval, setCartAfterRemoval] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemExistsModalOpen, setItemExistsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const [searchResult, setSearchResult] = useState([]);
  const [category, setCategory] = useState("");
  const [orderSuccessModal, setOrderSuccessModal] = useState(false);
  const [catData, setCatData] = useState({});
  const [searching, setSearching] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  // const [itemInCart, setItemInCart] = useState(false);

  useEffect(() => {
    if (category === "") {
      Axios.get("http://localhost:3001/products")
        .then(res => {
          setProducts(res.data);
          setProductsAll(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  const fetchCategoryDetails = async category => {
    const res = await Axios.get(`http://localhost:3001/categories/${category}`);
    console.log(res.data);
    setCatData(res.data);
  };

  useEffect(() => {
    console.log(category);

    if (category.length > 0) {
      Axios.get(`http://localhost:3001/products/category/${category}`).then(
        res => {
          console.log(res.data);
          setCategoryProducts(res.data);
          setCategory("");
          setSearchResult([]);
          fetchCategoryDetails(category);
        }
      );
    }
  }, [category]);

  const totals = () => {
    var total = 0;
    Cart.forEach(item => {
      total = total + item.product_unit_price * item.quantity;
    });
    setCartTotal(total);
  };

  const add2Cart = async product => {
    console.log(product)
    var alreadyInCart = false;
    setModalProduct(product);
    const tempProducts2 = JSON.parse(JSON.stringify(ProductsAll));
    console.log(tempProducts2);
    const item = tempProducts2.find(item => {
      return product._id == item._id
    })
    const indexInAll = tempProducts2.indexOf(item);
    console.log(indexInAll)
    Cart.forEach(item => {
      if (item._id === product._id) {
        alreadyInCart = true;
      }
    });
    if (alreadyInCart) {
      setItemExistsModalOpen(true);
      return console.log("Item Already In Cart");
    }
    if (!product.quantity) {
      console.log(Products)
      product.quantity = 1;
      product.total = product.quantity * product.product_unit_price;
      product.inCart = true;
      item.quantity = 1;
      item.total = product.quantity * product.product_unit_price;
      item.inCart = true;
      console.log(Products)
    }
    console.log(item)

    tempProducts2[indexInAll] = item;
    setProducts(tempProducts2);
    await setCart([...Cart, product]);
    totals();
    setModalOpen(true);
  };

  useEffect(() => {
    console.log(Cart);
  }, [Cart]);


  useEffect(() => {
    console.log(Products);
  }, [Products])
  const increment = _id => {
    const tempCart = JSON.parse(JSON.stringify(Cart));
    tempCart.forEach(item => {
      if (item._id === _id) {
        item.quantity = item.quantity + 1;
        item.total = item.product_unit_price * item.quantity;
      }
    });
    setCart(tempCart);
    totals();
  };

  const decrement = _id => {
    const tempCart = JSON.parse(JSON.stringify(Cart));
    const selectedProduct = tempCart.find(item => item._id == _id);
    const index = tempCart.indexOf(selectedProduct);
    tempCart[index].quantity = tempCart[index].quantity - 1;
    console.log(tempCart[index].quantity);

    if (tempCart[index].quantity == 0) {
      removeItemFromCart(tempCart[index]._id);
    } else {
      tempCart[index].total =
        tempCart[index].quantity * tempCart[index].product_unit_price;
      setCart(tempCart);
      totals();
    }
  };

  useEffect(() => {
    console.log(cartAfterRemoval);
  }, [cartAfterRemoval]);

  const removeItemFromCart = _id => {
    console.log(_id);
    const tempCart = JSON.parse(JSON.stringify(Cart));
    const tempProducts = JSON.parse(JSON.stringify(Products));
    const tempProducts2 = JSON.parse(JSON.stringify(ProductsAll));
    console.log(tempProducts2)
    tempCart.forEach(product => {
      const productIndex = tempProducts2.indexOf(product);
      console.log(productIndex)
    })
    console.log(tempProducts)
    const product = tempProducts.find(item => item._id === _id);
    const index = tempProducts.indexOf(product);
    console.log(index);
    tempProducts[index].inCart = false;
    delete tempProducts[index].quantity;
    delete tempProducts[index].total;
    const cartAfterRemoval = tempCart.filter(item => {
      return item._id !== _id;
    });

    console.log(cartAfterRemoval);
    setCart(cartAfterRemoval);
    setProducts(tempProducts);
    totals();
  };

  const emptyCart = () => {
    setCart([]);
  };

  const modalOpen = () => {
    setModalOpen(true);
  };

  const modalAlreadyOpen = () => {
    setItemExistsModalOpen(true);
  };

  const modalClose = () => {
    setModalOpen(false);
    setItemExistsModalOpen(false);
  };

  const searchItems = search => {
    console.log(search);
    if (search.length < 1) {
      setSearching(false);
    } else {
      const result = Products.filter(
        item =>
          item.product_name.includes(search) ||
          item.product_brand.includes(search)
      );
      setSearchResult(result);
      setSearching(true);
    }
  };

  const changeCategory = category => {
    setCategory(category);
  };

  const OrderSuccessModalOpen = () => {
    setOrderSuccessModal(true);
  };

  const OrderSuccessModalClose = () => {
    setOrderSuccessModal(false);
  };

  const emptyCategories = () => {
    setCategoryProducts([]);
    setCatData({});
  }

  const checkCartStatus = (product) => {

    const prod = Products.find(item => {
      return item._id === product._id
    });

    const index = Products.indexOf(prod);
    console.log(index);
    return index;
  }
  return (
    <div className="App">
      <StoreContext.Provider
        value={{
          Products: Products,
          add2Cart: add2Cart,
          Cart: Cart,
          increment: increment,
          decrement: decrement,
          removeItemFromCart: removeItemFromCart,
          CartTotal: CartTotal,
          emptyCart: emptyCart,
          isModalOpen: isModalOpen,
          modalOpen: modalOpen,
          modalClose: modalClose,
          modalProduct: modalProduct,
          itemExistsModalOpen: itemExistsModalOpen,
          modalAlreadyOpen: modalAlreadyOpen,
          searchItems: searchItems,
          searchResult: searchResult,
          changeCategory: changeCategory,
          OrderSuccessModalOpen: OrderSuccessModalOpen,
          orderSuccessModal: orderSuccessModal,
          OrderSuccessModalClose: OrderSuccessModalClose,
          catData: catData,
          searching: searching,
          category: category,
          categoryProducts,
          emptyCategories,
          checkCartStatus
        }}
      >
        <Router></Router>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
