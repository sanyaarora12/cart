import React,{useState} from "react";
import "../styles/cart.css";
import list from "../data";
import Cards from "./card";
const Wishlist = () => {
  const [wishList,setWishList]=useState([]);

  const toWish=(item)=>{
  wishList.push(item);
  setWishList([...wishList]);
  console.log(wishList);
  }
  return (
    <>
      {list.map((item) => (
        
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt=""  />
            <Cards key={item.id} item={item} toWish={toWish}/>
          </div>
        </div>
      
      ))}
    </>
  );
};

export default Wishlist;