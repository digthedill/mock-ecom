import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../Components/CartItem";
import "../App.css";

function Cart() {
  const { cartItems, cartTotal, setOrdered, ordered } = useContext(Context);
  const displayCart = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <main>
      <h1>This is your shopping cart:</h1>
      {displayCart}
      {cartItems.length > 0 ? (
        <>
          <p className="total-cost">
            Total:
            {cartTotal.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <div className="order-button">
            <button onClick={() => setOrdered((p) => !p)}>
              {ordered ? "Ordering..." : "Place Order"}
            </button>
          </div>
        </>
      ) : (
        <>
          <h3>whoops, it looks like this is empty...</h3>
          <img
            src="https://i.pinimg.com/originals/70/82/af/7082afb7baa5c2a5b044b3adbdab32ff.jpg"
            width="300px"
          />
        </>
      )}
    </main>
  );
}

export default Cart;
