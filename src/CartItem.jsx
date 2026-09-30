import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, selectCartItems,selectTotalAmount,selectTotalQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping,onItemRemoved }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const items=useSelector(selectCartItems);
const totalQuantity=useSelector(selectTotalQuantity);
const [checkoutMessage,setChekcoutMessage]=useState('');
  // Calculate total amount for all products in the cart
  const totalAmount=useSelector(selectTotalAmount);
 

  const handleContinueShopping = (e) => {
   
  };

const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};

  const handleIncrement = (item) => {
  dispatch(updateQuantity({name:item.name, quantity:item.quantity+1}));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({name:item.name, quantity:item.quantity-1}));
  };

  const handleRemove = (item) => {
  dispatch(removeItem(item.name));
  onItemRemoved(item.name);
  };

const formatPrice=(n)=>`${n}`;

  return (
    <main>    
        <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: {totalAmount}</h2>
      <p>Total Plants: <strong>{totalQuantity}</strong></p>
      {cart.length==0 ? (
      <p className='cart-empty'>Your cart is empty. Please add plant to get started!!!</p>
      ):(
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{formatPrice(item.cost)}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${Number(item.cost.replace('$', '')) * item.quantity}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      )}
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={()=>handleCheckoutShopping('e')}>Checkout</button>
      </div>
    </div>
    </main>

  );
};

export default CartItem;


