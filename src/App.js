import React, { useState } from "react";
import './App.css';
import Rough from "./components/Rough";
import Nav from "./components/nav";
import Cart from "./components/cart";
// import Wishlist from "./components/Wishlist";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart,item]);
  };

  const handleChange = (item, d) => {
    const num = cart.indexOf(item);
    const arr = cart;
    arr[num].amount += d;

    if (arr[num].amount === 0)
    arr[num].amount = 0;
    console.log(arr[num].amount)
    setCart([...cart]);
    
  };

  return (
    <>
      <Nav setShow={setShow} size={cart.length} />

      {show ? (
        <Rough handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
  
      {/* <div className="cc">
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      </div> */}
    </>
  );
};

export default App;
