import React from "react";
import "../styles/card.css";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

  const Cards = ({ item, handleClick,setShow ,toWish}) => {
  const {price, img, offer } = item;
  // const [cart, setCart] = useState([]);

  
  // const handleChange = (item, d) => {
  //   const num = cart.indexOf(item);
  //   const arr = cart;
  //   arr[num].amount += d;

  //   if (arr[num].amount === 0)
  //   arr[num].amount = 0;
  //   console.log(arr[num].amount)
  //   setCart([...cart]);
  // };
  
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
        <div  onClick={() => setShow(false)}>

         
        {/* <FavoriteBorderIcon style={{color:'grey',marginLeft:'10px'}}/> */}
        </div>
      </div>
      <div className="details">

        <h1 id="b">MRP-Rs{price}</h1>
        <p><s>Rs {offer}</s></p>
        <br/>
        <p id='o'>10% Margin</p>
        <br/>
        <p id="i">15 pc @21,000 each</p>
        <br/>
        <button onClick={() => handleClick(item)}>Add to cart </button>
       
        <button onClick={() => toWish(item)}>Add to wishlist</button>
        {/* <div>
            <button id="m" onClick={() => handleChange(item, 1)}>+</button>
            <button id="m">{item.amount}</button>
            <button id="m" onClick={() => handleChange(item, -1)}>-</button>
          </div> */}
      </div>
    </div>
  );
};

export default Cards;
