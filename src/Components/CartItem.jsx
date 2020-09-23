import React, { useContext, useState } from "react";
import "../App.css";
import { Context } from "../Context";
import useHover from "../useHover";

function CartItem({ item }) {
  //   const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);
  const COST = 69;

  const trashIcon = hovered ? "fill" : "line";
  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${trashIcon}`}
        onClick={() => removeFromCart(item)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" />
      <p>${COST}.00</p>
    </div>
  );
}

export default CartItem;
