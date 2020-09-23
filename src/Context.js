import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [ordered, setOrdered] = useState(false);

  const orderFromStore = () => {
    setCartItems([]);
    setCartTotal(0);
    setOrdered(false);
  };
  useEffect(() => {
    if (ordered) {
      setTimeout(() => {
        orderFromStore();
        console.log("your order was placed, bitch!");
      }, 3000);
    }
  }, [ordered, setOrdered]);

  const addToCart = (imgObj) => {
    setCartItems([...cartItems, imgObj]);
    setCartTotal((p) => p + 69);
  };

  const removeFromCart = (imgObj) => {
    setCartItems(cartItems.filter((img) => img !== imgObj));
    setCartTotal((p) => p - 69);
  };

  const toggleFavorite = (id) => {
    const updatedArr = photos.map((photo) => {
      if (id === photo.id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPhotos(updatedArr);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((r) => r.json())
      .then((data) => setPhotos(data));
  }, []);

  console.log("ordered?:", ordered);

  return (
    <Context.Provider
      value={{
        photos,
        toggleFavorite,
        addToCart,
        removeFromCart,
        cartItems,
        cartTotal,
        ordered,
        setOrdered,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
