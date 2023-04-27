import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { cartClear } from "../control/cartSlice";

export default function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  const dispatch=useDispatch();
  return (
    <div>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Sepetim</h2>
            <h4>Sepetiniz Boş</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button className="cartClearButton" onClick={()=>dispatch(cartClear())}>Temizle</button>
          </footer>
        </section>
      )}
    </div>
  );
}
