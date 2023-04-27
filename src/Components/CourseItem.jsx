import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch} from "react-redux";
import { increase,decrease, removeItem } from "../control/cartSlice";

export default function CourseItem({ id, title, img, quantity, price }) {
    const dispatch=useDispatch();
  return (
    <div className="cartItem">
      <div>
        <img src={img} alt="course" />
      </div>
      <div className="cartInfo">
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button className="cartQuantityButton" onClick={()=>dispatch(increase(id))}>
            <BsChevronUp />
          </button>
          <p style={{ marginRight: "8px" }}>{quantity} </p>
          <button className="cartQuantityButton" onClick={()=>dispatch(decrease(id))}>
            <BsChevronDown />
          </button>
        </div>
        <button className="cartDeleteButton" onClick={()=>dispatch(removeItem(id))}>Sil</button>
      </div>
    </div>
  );
}
