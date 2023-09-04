import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../Context/AppContext';

export default function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, cur) => cur.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible? 'cart--active': ''}`} >
      <div className="cart-items">items do carrinho</div>
      {
        cartItems.map((cartItem) => <CartItem key = {cartItem.id} data={cartItem} />)
      }
      <div className="cart-resume">Total R$:{totalPrice}</div>
    </section>
  );
}
