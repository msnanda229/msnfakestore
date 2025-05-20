import React, { useEffect, useState } from 'react';
import './Homestore.css';
import { Link, useNavigate } from 'react-router-dom';

const Homestore = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const gotocart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...storedCart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="store-container">

      {/* NavBar */}
      <header className="navbar">
        <div className="navbar-logo">🛍 MSN FAKE STORE</div>
        <nav className="nav-links">
          <Link to="/homestore" className="nav-link">Home</Link>
          <Link to="/addcart" className="nav-link">Cart</Link>
          <button onClick={logout} className="logout-button">Logout</button>
        </nav>
      </header>

      {/* Category Buttons */}
      <div className="category-buttons">
        <button onClick={() => filterByCategory('all')}>All</button>
        <button onClick={() => filterByCategory("men's clothing")}>Men</button>
        <button onClick={() => filterByCategory("women's clothing")}>Women</button>
        <button onClick={() => filterByCategory("jewelery")}>Jewelery</button>
        <button onClick={() => filterByCategory("electronics")}>Devices</button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-title">{product.title}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-desc">{product.description.slice(0, 80)}...</div>
            <button onClick={() => gotocart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Homestore;
