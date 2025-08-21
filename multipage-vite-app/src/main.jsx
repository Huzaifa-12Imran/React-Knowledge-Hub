import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Quotes from './pages/Quotes';
import Quiz from './pages/Quiz';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const AppWithProviders = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/React-Knowledge-Hub">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="quotes" element={<Quotes />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithProviders />
  </React.StrictMode>
);
