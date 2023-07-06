import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className='cart'>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className='list-group'>
                    {cartItems.map((item) => (
                        <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
                            <span className='item-name'>{item.name}</span>
                            <span className='item-price'>{item.price}</span>
                            <button className='btn btn-danger' onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;