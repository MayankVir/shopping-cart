import React, { useContext } from "react";
import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import { CartContext } from "./Cart";

toast.configure();

const Items = ({ id, name, price, img_url, quantity }) => {
const { removeItem, increment, decrement } = useContext(CartContext);


  const notify = () => {
    toast.error('Item Deleted', 
    {position: toast.POSITION.TOP})
  }


  return (
    <>
      <div className="items_info">
        <div className="item_nameAndImg">
          <div className="nameAndImg">
            <img src={img_url} alt="place-hold" class="item-img" />
            <div className="item_number">{name}</div>
          </div>
          <i
            class="fas fa-times"
            onClick={() => {
              removeItem(id);
              notify();
            }}
          ></i>
        </div>
        <div className="item_counter">
          <div className="item_counterChanger">
            <i class="fas fa-minus" onClick={() => decrement(id)}></i>
            <input type="text" placeholder={quantity} />
            <i class="fas fa-plus" onClick={() => increment(id)}></i>
          </div>
          <div className="item_price">${price}</div>
        </div>
      </div>
    </>
  );
};

export default Items;
