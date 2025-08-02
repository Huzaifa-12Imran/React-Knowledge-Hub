import React, { Suspense, useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [key, setKey] = useState(0); 
  
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
    console.log("Route changed to:", location.pathname);
    
    window.scrollTo(0, 0);
    
    const validRoutes = ['/', '/courses', '/quotes', '/quiz', '/contact', '/404'];
    const isValidRoute = validRoutes.some(route => 
      location.pathname === route || 
      (route !== '/' && location.pathname.startsWith(route + '/'))
    );
    
    if (!isValidRoute && location.pathname !== '/404') {
      navigate('/404', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="app-container" key={key}>
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
