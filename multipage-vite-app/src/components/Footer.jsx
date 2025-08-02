import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showParticles, setShowParticles] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  
  useEffect(() => {
    const validRoutes = ['/', '/courses', '/quotes', '/quiz', '/contact'];
    const isValidRoute = validRoutes.includes(location.pathname);
    const is404 = location.pathname === '/404';
    
    setShouldRender(isValidRoute && !is404);
  }, [location.pathname]);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showParticles) {
      const interval = setInterval(() => {
        setParticles(prevParticles => {
          const newParticle = {
            id: Date.now(),
            x: mousePosition.x,
            y: mousePosition.y,
            size: Math.random() * 8 + 2,
            color: getRandomColor(),
            speedX: (Math.random() - 0.5) * 5,
            speedY: (Math.random() - 0.5) * 5,
            life: 100
          };
          
          const updatedParticles = prevParticles
            .map(p => ({
              ...p,
              x: p.x + p.speedX,
              y: p.y + p.speedY,
              life: p.life - 1
            }))
            .filter(p => p.life > 0);
            
          return [...updatedParticles, newParticle].slice(-50); 
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [showParticles, mousePosition]);

  const getRandomColor = () => {
    const colors = isDarkMode 
      ? ['#60a5fa', '#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6'] 
      : ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#f43f5e'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const gradientStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: isDarkMode
      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.2) 0%, rgba(30, 58, 138, 0) 50%)`
      : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2) 0%, rgba(219, 234, 254, 0) 50%)`,
    pointerEvents: 'none',
    zIndex: 1
  };

  const footerStyle = {
    backgroundColor: isDarkMode ? '#0a0f1a' : '#f0f5ff',
    color: isDarkMode ? '#f1f5f9' : '#334155',
    padding: '60px 20px 40px',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 'auto',
    transition: 'all 0.5s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    boxShadow: isDarkMode 
      ? 'inset 0 15px 15px -15px rgba(0, 0, 0, 0.5), 0 -5px 25px -5px rgba(59, 130, 246, 0.15)' 
      : 'inset 0 15px 15px -15px rgba(0, 0, 0, 0.1), 0 -5px 25px -5px rgba(37, 99, 235, 0.1)',
    borderTop: 'none'
  };

  const futuristicGridStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    perspective: '1000px',
    perspectiveOrigin: 'center bottom',
    overflow: 'hidden',
    zIndex: 0
  };

  const neonGlowStyle = {
    position: 'absolute',
    bottom: '-50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '100px',
    background: isDarkMode 
      ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, rgba(0, 0, 0, 0) 80%)'
      : 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.2) 0%, rgba(124, 58, 237, 0.1) 40%, rgba(0, 0, 0, 0) 80%)',
    filter: 'blur(20px)',
    zIndex: 0,
    animation: 'pulseGlow 4s ease-in-out infinite'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px'
  };

  const logoCircleStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${isDarkMode ? '#3b82f6' : '#2563eb'} 0%, ${isDarkMode ? '#8b5cf6' : '#7c3aed'} 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: isDarkMode 
      ? '0 0 20px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2)' 
      : '0 0 20px rgba(37, 99, 235, 0.3), 0 0 60px rgba(37, 99, 235, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '40px'
  };

  const sectionStyle = {
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
    transition: 'all 0.3s ease',
    padding: '20px',
    borderRadius: '12px',
    background: isDarkMode 
      ? 'rgba(15, 23, 42, 0.2)' 
      : 'rgba(240, 245, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    boxShadow: isDarkMode 
      ? '0 4px 20px -2px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.1) inset' 
      : '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(37, 99, 235, 0.05), 0 0 0 1px rgba(37, 99, 235, 0.05) inset',
    border: isDarkMode
      ? '1px solid rgba(59, 130, 246, 0.1)'
      : '1px solid rgba(37, 99, 235, 0.05)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: isDarkMode 
        ? '0 8px 30px -2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.15)' 
        : '0 8px 30px -2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(37, 99, 235, 0.1), 0 0 15px rgba(37, 99, 235, 0.05)'
    }
  };

  const sectionTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '20px',
    position: 'relative',
    display: 'inline-block',
    padding: '0 10px',
    color: isDarkMode ? '#60a5fa' : '#2563eb',
    textShadow: isDarkMode ? '0 0 10px rgba(59, 130, 246, 0.3)' : 'none',
    letterSpacing: '1px'
  };

  const sectionTitleBeforeStyle = {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '0',
    width: '100%',
    height: '2px',
    background: `linear-gradient(90deg, 
      transparent, 
      ${isDarkMode ? '#3b82f6' : '#2563eb'} 20%, 
      ${isDarkMode ? '#8b5cf6' : '#7c3aed'} 50%, 
      ${isDarkMode ? '#3b82f6' : '#2563eb'} 80%, 
      transparent)`,
    borderRadius: '2px',
    opacity: 0.8,
    animation: 'shimmerAccent 3s infinite linear',
    boxShadow: isDarkMode ? '0 0 8px rgba(59, 130, 246, 0.5)' : 'none'
  };

  const navLinksStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center'
  };

  const linkStyle = (isHovered) => ({
    color: isDarkMode ? '#e2e8f0' : '#334155',
    textDecoration: 'none',
    fontSize: '0.95rem',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    fontWeight: isHovered ? '500' : 'normal'
  });

  const linkBeforeStyle = (isHovered) => ({
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: isHovered ? '0%' : '50%',
    width: isHovered ? '100%' : '0%',
    height: '2px',
    background: `linear-gradient(90deg, ${isDarkMode ? '#3b82f6' : '#2563eb'}, ${isDarkMode ? '#8b5cf6' : '#7c3aed'})`,
    transition: 'all 0.3s ease',
    zIndex: -1,
    opacity: isHovered ? 1 : 0
  });

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '15px'
  };

  const socialIconStyle = (isHovered) => ({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: isHovered 
      ? `linear-gradient(135deg, ${isDarkMode ? '#3b82f6' : '#2563eb'} 0%, ${isDarkMode ? '#8b5cf6' : '#7c3aed'} 100%)`
      : isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
    color: isHovered ? '#ffffff' : (isDarkMode ? '#60a5fa' : '#3b82f6'),
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-3px) scale(1.1)' : 'translateY(0) scale(1)',
    boxShadow: isHovered 
      ? (isDarkMode ? '0 7px 15px rgba(59, 130, 246, 0.3)' : '0 7px 15px rgba(37, 99, 235, 0.2)')
      : 'none'
  });

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '300px',
    margin: '0 auto'
  };

  const inputStyle = {
    padding: '12px 15px',
    borderRadius: '8px',
    border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
    backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
    color: isDarkMode ? '#f1f5f9' : '#334155',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    width: '100%'
  };

  const buttonStyle = {
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    background: `linear-gradient(135deg, ${isDarkMode ? '#3b82f6' : '#2563eb'} 0%, ${isDarkMode ? '#8b5cf6' : '#7c3aed'} 100%)`,
    color: '#ffffff',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: isDarkMode 
      ? '0 4px 12px rgba(59, 130, 246, 0.3)' 
      : '0 4px 12px rgba(37, 99, 235, 0.2)'
  };

  const buttonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: isDarkMode 
      ? '0 6px 16px rgba(59, 130, 246, 0.4)' 
      : '0 6px 16px rgba(37, 99, 235, 0.3)'
  };

  const bottomBarStyle = {
    borderTop: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
    padding: '20px 0 0',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    position: 'relative',
    zIndex: 2
  };

  const copyrightStyle = {
    fontSize: '0.9rem',
    opacity: 0.8,
    textAlign: 'center'
  };
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const handleLogoClick = () => {
    setShowParticles(prev => !prev);
  };

  if (!shouldRender) {
    return <div className="footer-placeholder"></div>;
  }

  return (
    <footer style={footerStyle}>
      <div style={gradientStyle}></div>
      <div style={futuristicGridStyle}>
        <div className="grid-container">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`h-line-${i}`} 
              className="grid-line horizontal"
              style={{ 
                top: `${i * 10}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`v-line-${i}`} 
              className="grid-line vertical"
              style={{ 
                left: `${i * 10}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div style={neonGlowStyle}></div>

      <div className="particles-container">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={`particle-${i}`} 
            className="particle"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${3 + Math.random() * 7}px`,
              height: `${3 + Math.random() * 7}px`,
              opacity: 0.1 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: `linear-gradient(90deg, 
          transparent 0%,
          ${isDarkMode ? '#3b82f6' : '#2563eb'} 20%, 
          ${isDarkMode ? '#8b5cf6' : '#7c3aed'} 50%, 
          ${isDarkMode ? '#3b82f6' : '#2563eb'} 80%,
          transparent 100%)`,
        opacity: 0.8,
        zIndex: 1,
        animation: 'shimmerLine 3s infinite linear'
      }}></div>
      
      {showParticles && particles.map(particle => (
        <div 
          key={particle.id}
          style={{
            position: 'fixed',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: particle.color,
            opacity: particle.life / 100,
            pointerEvents: 'none',
            zIndex: 9999
          }}
        />
      ))}
      
      <div style={containerStyle}>
        <div style={logoStyle}>
          <div 
            style={logoCircleStyle} 
            onClick={handleLogoClick}
            onMouseEnter={() => setShowParticles(true)}
            onMouseLeave={() => setShowParticles(false)}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v8"></path>
              <path d="M8 12h8"></path>
            </svg>
          </div>
        </div>
        
        <div style={contentGridStyle}>
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>
              About EduHub
              <div style={sectionTitleBeforeStyle}></div>
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '15px' }}>
              EduHub is your premier learning platform with courses, quizzes, and educational resources to help you grow.
            </p>
            <div style={socialLinksStyle}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialIconStyle(hoveredIcon === 'github')}
                onMouseEnter={() => setHoveredIcon('github')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialIconStyle(hoveredIcon === 'twitter')}
                onMouseEnter={() => setHoveredIcon('twitter')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialIconStyle(hoveredIcon === 'linkedin')}
                onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>
              Navigation
              <div style={sectionTitleBeforeStyle}></div>
            </h3>
            <div style={navLinksStyle}>
              <Link 
                to="/" 
                style={linkStyle(hoveredLink === 'home')}
                onMouseEnter={() => setHoveredLink('home')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div style={linkBeforeStyle(hoveredLink === 'home')}></div>
                Home
              </Link>
              <Link 
                to="/courses" 
                style={linkStyle(hoveredLink === 'courses')}
                onMouseEnter={() => setHoveredLink('courses')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div style={linkBeforeStyle(hoveredLink === 'courses')}></div>
                Courses
              </Link>
              <Link 
                to="/quotes" 
                style={linkStyle(hoveredLink === 'quotes')}
                onMouseEnter={() => setHoveredLink('quotes')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div style={linkBeforeStyle(hoveredLink === 'quotes')}></div>
                Quotes
              </Link>
              <Link 
                to="/quiz" 
                style={linkStyle(hoveredLink === 'quiz')}
                onMouseEnter={() => setHoveredLink('quiz')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div style={linkBeforeStyle(hoveredLink === 'quiz')}></div>
                Quiz
              </Link>
              <Link 
                to="/contact" 
                style={linkStyle(hoveredLink === 'contact')}
                onMouseEnter={() => setHoveredLink('contact')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div style={linkBeforeStyle(hoveredLink === 'contact')}></div>
                Contact
              </Link>
            </div>
          </div>
          
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>
              Stay Updated
              <div style={sectionTitleBeforeStyle}></div>
            </h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '15px' }}>
              Subscribe to our newsletter for the latest updates.
            </p>
            <form style={formStyle} onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                style={{
                  ...buttonStyle,
                  ...(hoveredButton ? buttonHoverStyle : {})
                }}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div style={bottomBarStyle}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
          <p style={copyrightStyle}>
            © {new Date().getFullYear()} EduHub Learning Platform. All rights reserved.
          </p>
        </div>
      </div>
      
      <style jsx="true">{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .grid-container {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform: rotateX(60deg) translateZ(-100px);
        }
        
        .grid-line {
          position: absolute;
          background-color: rgba(59, 130, 246, 0.15);
          animation: gridPulse 3s infinite ease-in-out;
        }
        
        .grid-line.horizontal {
          width: 100%;
          height: 1px;
          transform: translateZ(0);
        }
        
        .grid-line.vertical {
          height: 100%;
          width: 1px;
          transform: translateZ(0);
        }
        
        @keyframes gridPulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
        
        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .particle {
          position: absolute;
          background-color: #3b82f6;
          border-radius: 50%;
          animation: floatParticle 5s infinite ease-in-out;
        }
        
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-30px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(-20px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes pulseGlow {
          0% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.7; transform: translateX(-50%) scale(1.1); }
          100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
        }
        
        @keyframes shimmerLine {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes shimmerAccent {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;