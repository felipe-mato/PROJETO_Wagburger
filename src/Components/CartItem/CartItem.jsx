import React, { useContext } from 'react';
import { CiCircleRemove } from 'react-icons/ci'; 
import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import propTypes from 'prop-types';
import AppContext from '../../Context/AppContext';

export default function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemove = () => {
    const updatedItem = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItem);
  };

  return (
    <section className="cart-item">
      <img 
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemove}
        >
          <CiCircleRemove />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.any,
  thumbnail: propTypes.any,
  title: propTypes.any,
  price: propTypes.any
}.isRequired;