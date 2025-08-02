import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {

  useEffect(() => {
    const playSound = () => {
      const audio = new Audio('/trombone.mp3');
      audio.volume = 0.3;
      audio.play().catch((e) => console.warn("Muted autoplay prevented:", e));
    };
    playSound();
  }, []);

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-404-container">
          <h1 className="notfound-404-text" title="Told you not to come here.">404</h1>
          <div className="notfound-compass-container">
            <div className="notfound-compass-bg">
              <svg
                className="notfound-compass-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                title="Your sense of direction? Nonexistent."
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <h2 className="notfound-heading">
            Oh wow… you really managed to get lost on a website. That's a skill.
          </h2>
          <p className="notfound-subheading">
            You had one job: <strong>not</strong> to end up here. But here we are.
          </p>
          <p className="notfound-description">
            This page packed its bags and dipped. Don't worry, we'll guide your lost soul back to civilization.
          </p>
        </div>

        <div className="notfound-buttons">
          <Link to="/" className="notfound-home-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            Shamefully Go Home
          </Link>

          <button onClick={() => window.history.back()} className="notfound-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Pretend This Never Happened
          </button>
        </div>

        <div className="notfound-dots">
          <div className="notfound-dot"></div>
          <div className="notfound-dot"></div>
          <div className="notfound-dot"></div>
        </div>

        <div className="notfound-links-container">
          <p className="notfound-links-title">
            You were probably looking for <em>literally anything else</em>:
          </p>
          <div className="notfound-links">
            <Link to="/courses" className="notfound-link">Courses</Link>
            <Link to="/quotes" className="notfound-link">Quotes</Link>
            <Link to="/quiz" className="notfound-link">Quiz</Link>
            <Link to="/contact" className="notfound-link">Contact</Link>
          </div>
        </div>

        <p className="notfound-footer">
          "Not all who wander are lost... except you. You're definitely lost."
        </p>
      </div>
    </div>
  );
};

export default NotFound;
