import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
    <h1 className="zomato">Restaurant</h1>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/restaurant">
        <li>Restaurant</li>
      </Link>
      <Link to="/cart">
        <li>Cart</li>
      </Link>
    </ul>
  </div>
  
  )
}

export default Navbar