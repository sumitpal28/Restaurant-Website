import React from "react";
import { useState } from "react";


const Restaurentlist = ({cart, setcart, Addtocart}) => {
  const [fordata] = useState([
    {
      id: 1,
      name: "The Food Lounge",
      image:
        "https://www.walksofitaly.com/blog/wp-content/uploads/2011/05/DSC_0195.jpg",
      rating: 4.5,
      cuisine: "Italian",
      location: "New York, USA",
      priceRange: "10",
      delivery: true,
    },
    {
      id: 2,
      name: "Spicy Delights",
      image:
        "https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2022/10/THEME_FOOD_INDIAN-CUISINE-GettyImages-526749337-1.jpg",
      rating: 4.2,
      cuisine: "Indian",
      location: "Mumbai, India",
      priceRange: "20",
      delivery: true,
    },
    {
      id: 3,
      name: "Sushi World",
      image:
        "https://th.bing.com/th/id/R.dc2e227098876c0ae52c1cc10ea96e39?rik=bFD1HyTbdrGGvA&riu=http%3a%2f%2fmannersandmischief.com%2fwp-content%2fuploads%2f2014%2f11%2fmaki-sushi.jpg&ehk=tZ4BFXPdsxuQZbu3X2sqDAAw4YatEkhFEhH2vTKIE%2bw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      rating: 4.8,
      cuisine: "Japanese",
      location: "Tokyo, Japan",
      priceRange: "30",
      delivery: false,
    },
    {
      id: 4,
      name: "Burger House",
      image:
        "https://www.thespruceeats.com/thmb/-1U_zQGsbDA9mDtfCkkdyv6BbAA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-veggie-burgers-recipe-3377169-step-07-774b33dd9e734ebfa5739e3e5125ebf9.jpg",
      rating: 4.3,
      cuisine: "American",
      location: "Los Angeles, USA",
      priceRange: "40",
      delivery: true,
    },
    {
      id: 5,
      name: "Green Leaf Café",
      image:
        "https://th.bing.com/th/id/OIP.TFOHxuo4oRqOpU2UDYXVvQHaEK?rs=1&pid=ImgDetMain",
      rating: 4.6,
      cuisine: "Vegetarian",
      location: "London, UK",
      priceRange: "50",
      delivery: true,
    },
    {
      id: 6,
      name: "Taco Fiesta",
      image:
        "https://th.bing.com/th/id/OIP._26D1XlwDqfmG8A0kvfaLQHaE7?rs=1&pid=ImgDetMain",
      rating: 4.1,
      cuisine: "Mexican",
      location: "Mexico City, Mexico",
      priceRange: "60",
      delivery: false,
    },
    {
      id: 7,
      name: "French Delight",
      image:
        "https://images.squarespace-cdn.com/content/v1/5eda67d138e392717dfbfb7c/970795cb-beb1-4e77-9207-f5a9c7d5ee75/galettedesrois+2022.jpg?format=1500w",
      rating: 4.7,
      cuisine: "French",
      location: "Paris, France",
      priceRange: "70",
      delivery: true,
    },
    {
      id: 8,
      name: "BBQ Nation",
      image:
        "https://1.bp.blogspot.com/-vzU5VPhUycg/W_LS9s5RcYI/AAAAAAAAPVE/VDf6kxsp4WsLHAsX9_ReIvfIKYAt7MiwQCLcBGAs/s1600/IMG_3881.JPG",
      rating: 4.4,
      cuisine: "BBQ",
      location: "Sydney, Australia",
      priceRange: "80",
      delivery: false,
    },
    {
      id: 9,
      name: "Dim Sum Palace",
      image:
        "https://th.bing.com/th/id/OIP.rtsEc2L_D2JjlgNsHY4v5wAAAA?rs=1&pid=ImgDetMain",
      rating: 4.5,
      cuisine: "Chinese",
      location: "Beijing, China",
      priceRange: "90",
      delivery: true,
    },
    {
      id: 10,
      name: "Greek Taverna",
      image:
        "https://th.bing.com/th/id/OIP.326gyuHFC1a2r5m9Jg8U3QHaEd?rs=1&pid=ImgDetMain",
      rating: 4.6,
      cuisine: "Greek",
      location: "Athens, Greece",
      priceRange: "$$",
      delivery: false,
    },
  ]);

  const [price, setprice] = useState("");
  const [rating, setrating] = useState("");
  const [couisine, setcousine] = useState("");
  const [all, setall] = useState(fordata);

  const Addfilter = () => {
    const filtered = fordata.filter((item) => {
      return (
        (!price || item.priceRange === price.toString()) &&
        (!rating || item.rating === parseFloat(rating)) &&
        (!couisine || item.cuisine === couisine)
      );
    });
    setall(filtered);
  };

  return (
    
    <div>

      <p className="inp">
      <select className="inputs" value={price} onChange={(e) => setprice(e.target.value)}>
        <option value="">Price Select</option>
        {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((val) => (
          <option key={val} value={val}>
            {" "}
            {val}{" "}
          </option>
        ))}
      </select>

      <select className="inputs" value={rating} onChange={(e) => setrating(e.target.value)}>
        <option value=""> Select Rating</option>
        {[4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8].map((val) => (
          <option kay={val} value={val}>
            {" "}
            {val}{" "}
          </option>
        ))}
      </select>
     

      <select className="inputs" value={couisine} onChange={(e) => setcousine(e.target.value)}>
        <option value="">Select Cuision</option>
        {["Italian", "Indian", "American"].map((val) => (
          <option key={val} value={val}>
            {" "}
            {val}{" "}
          </option>
        ))}
      </select>
      
      <button className="find" onClick={Addfilter}>FIND</button>
      </p>

<div className="dish">
      <h2>Restaurant List</h2>
      <ul className="dish-container">
        {all.map((restaurant) => (
          <li key={restaurant.id} className="dish-item">
            <h2>{restaurant.name}</h2>
            <img src={restaurant.image} alt={restaurant.name} width="200" />
            <p>Rating: {restaurant.rating}</p>
            <p>Cuisine:{restaurant.cuisine}</p>
            <p>Location:{restaurant.location}</p>
            <p>Price:{restaurant.priceRange}</p>
            <p>
              Delivery:{restaurant.delivery ? "Available" : "Not Available"}
            </p>
            <button onClick={() => Addtocart(restaurant)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
};

export default Restaurentlist;
