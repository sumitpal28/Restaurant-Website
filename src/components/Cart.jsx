import React from 'react'
import { useState } from 'react'

const Cart = ({cart = []}) => {
  return (
    <div className='cart'>
   <h1>My Cart</h1>
      {cart.length === 0 ? (  // ✅ Correct condition
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src="item.image"  />
              {item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart