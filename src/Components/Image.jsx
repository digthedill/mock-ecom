//logic for the site!
import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../useHover";

function Image({ className, img }) {
  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );

  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else {
      return (
        hovered && (
          <i
            onClick={() => toggleFavorite(img.id)}
            className={
              img.favorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"
            }
          ></i>
        )
      );
    }
  };

  const cartIcon = () => {
    if (cartItems.some((photo) => photo.id === img.id)) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img)}
        ></i>
      );
    } else {
      return (
        hovered && (
          <i
            className="ri-add-circle-line cart"
            onClick={() => addToCart(img)}
          ></i>
        )
      );
    }
  };

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.prototype = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.url,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
