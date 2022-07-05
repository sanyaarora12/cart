import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/rough.css";
// import Wishlist from "./Wishlist";

const Rough = ({ handleClick }) => {
  const [wishList,setWishList]=useState([]);

  const toWish=(item)=>{
  wishList.push(item);
  setWishList([...wishList]);
  console.log(wishList);
  }
  return (
    <section>
      {list.map((item) => (
        <div>
           <Cards key={item.id} item={item} handleClick={handleClick} toWish={toWish}/>
           
        </div>
      ))}
     

    </section>
  );
};

export default Rough;