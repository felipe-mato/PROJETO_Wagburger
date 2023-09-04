/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../Context/AppContext';

export default function ProductCard({ data }) {
  const [count, setCount] = useState(0);
  const {cartItems, setCartItems} = useContext(AppContext);
  const { title, thumbnail, price } = data;

  const limitedTextElements = document.querySelectorAll('.card__title');
  limitedTextElements.forEach(element => {
    const maxLength = 20;
  
    if (element.textContent.length > maxLength) {
      element.textContent = element.textContent.slice(0, maxLength);
    }
  });

  const handleClick = () => {
    setCartItems([ ...cartItems, data ]);
  };


  return (
    <section className="product-card">
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price)}</h2>
        <h2 className="card__title">{title}</h2>
        <div className="counter-container">        
          <button 
            type="button"
            className="button__add-cart"
            onClick={() => {
              setCount(count + 1);
              handleClick(title, price);
            }
            }
          >+
          </button>
          {count}
          <button 
            type="button"
            className="button__rmv-cart"
            onClick={() => setCount(count - 1)}
          >-
          </button>
        </div>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;