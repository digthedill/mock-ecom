import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);
  const cartIcon = cartItems.length < 1 ? "line" : "fill";

  return (
    <div className="header">
      <Link to="/">
        <h1>My Photos or Your Photos</h1>
      </Link>
      <Link to="/cart">
        <i className={`ri-shopping-cart-${cartIcon} ri-fw ri-2x`}></i>
      </Link>
    </div>
  );
}
export default Header;
