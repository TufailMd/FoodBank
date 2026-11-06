import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import Cart from './pages/Cart';
import SearchResults from './pages/SearchResults';

import restaurantData from './data/restaurants.json';

const SIMULATE_ERROR = false;

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      if (SIMULATE_ERROR) {
        setError(
          'Failed to load restaurants. Please check your connection and try again.'
        );
      } else {
        setRestaurants(restaurantData);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [retryCount]);

  const handleRetry = () => setRetryCount((c) => c + 1);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, quantity: c.quantity + 1 } : c))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) => {
      const item = prev.find((c) => c.id === id);
      if (!item) return prev;
      if (item.quantity === 1) return prev.filter((c) => c.id !== id);
      return prev.map((c) =>
        c.id === id ? { ...c, quantity: c.quantity - 1 } : c
      );
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const sharedProps = {
    restaurants,
    cart,
    loading,
    error,
    search,
    filter,
    onSearchChange: setSearch,
    onFilterChange: setFilter,
    onRetry: handleRetry,
    onAdd: addToCart,
    onIncrease: increaseQty,
    onDecrease: decreaseQty,
    onRemove: removeFromCart,
  };

  return (
    <BrowserRouter>
      <PageTransition isContentLoading={loading}>
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar cart={cart} />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home               {...sharedProps} />} />
              <Route path="/restaurant/:id" element={<RestaurantDetails  {...sharedProps} />} />
              <Route path="/cart" element={<Cart               {...sharedProps} />} />
              <Route path="/search" element={<SearchResults      {...sharedProps} />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </PageTransition>
    </BrowserRouter>
  );
}