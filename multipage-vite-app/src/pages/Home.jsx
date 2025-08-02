import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="icon-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14 3l7 7-3 1-3 3-1 3-7-7 3-1 3-3 1-3zM5 13l-2 6 6-2 5-5-3-3-5 5z" />
              </svg>
            </span>
              <span>Welcome to EduHub</span>
            </div>
            <h1 className="hero-title">
              Transform Your Future with 
              <span className="hero-highlight"> Expert Learning</span>
            </h1>
            <p className="hero-description">
              Unlock your potential with our cutting-edge learning platform. Master new skills, 
              get inspired by wisdom, challenge yourself with interactive quizzes, and join a 
              community of lifelong learners.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary btn-hero">
                <span>Start Learning</span>
              </Link>
              <Link to="/quiz" className="btn btn-outline btn-hero">
                <span>Test Knowledge</span>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">10K+</span>
                <span className="stat-text">Active Learners</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">500+</span>
                <span className="stat-text">Expert Courses</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">95%</span>
                <span className="stat-text">Success Rate</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format" 
                alt="Students learning together"
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="floating-elements">
              <div className="floating-card card-1">
                <div className="course-logo">
                  <svg
                    className="logo-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 0a8 8 0 100 16v-2m0-14a8 8 0 018 8h-2a6 6 0 00-6-6z"
                    />
                  </svg>
              </div>

                <div className="card-content">
                  <div className="card-title">Interactive Learning</div>
                  <div className="card-subtitle">Hands-on experience</div>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon-enhanced">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 12m-8,0a8,8 0 1,0 16,0a8,8 0 1,0 -16,0 M12 6v6l4 2"
                    />
                  </svg>
              </div>

                <div className="card-content">
                  <div className="card-title">Goal Oriented</div>
                  <div className="card-subtitle">Achieve your dreams</div>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon-enhanced1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L3 14h7v8l10-12h-7z" />
                </svg>
              </div>

                <div className="card-content">
                  <div className="card-title">Fast Progress</div>
                  <div className="card-subtitle">Learn efficiently</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-sparkle-enhanced">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sparkle-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zM5 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zm14 0l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
                </svg>
              </span>
              <span>Why Choose EduHub</span>
            </div>
            <h2>Unlock Your Learning Potential</h2>
            <p>Discover powerful features designed to accelerate your learning journey and help you achieve your goals faster than ever before</p>
          </div>
          <div className="features-grid">
            <div className="feature-card feature-card-premium" data-tilt>
              <div className="feature-background">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=350&fit=crop&auto=format" 
                  alt="Expert-led courses"
                  className="feature-bg-image"
                />
                <div className="feature-gradient-overlay"></div>
                <div className="feature-pattern"></div>
              </div>
              
              <div className="feature-content">
                <div className="feature-header">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon-bg"></div>
                    <div className="feature-icon">
                      <svg className="feature-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3L1 9l11 6 9-5.18V17h2V9L12 3zM11 21h2v-2h-2v2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="feature-badge">Most Popular</div>
                </div>
                
                <div className="feature-body">
                  <h3>Expert-Led Courses</h3>
                  <p>Learn from industry veterans with 10+ years of experience. Get hands-on projects, real-world case studies, and personalized feedback to accelerate your career growth.</p>
                  
                  <div className="feature-highlights">
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>500+ Premium Courses</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>Industry Experts</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>Lifetime Access</span>
                    </div>
                  </div>
                </div>
                
                <div className="feature-footer">
                  <Link to="/courses" className="feature-cta">
                    <span>Explore Courses</span>
                    <div className="cta-icon">
                      <span className="arrow">→</span>
                    </div>
                  </Link>
                  <div className="feature-stats">
                    <span className="stat-number">10K</span>
                    <span className="stat-label">Students</span>
                  </div>
                </div>
              </div>
              
              <div className="feature-glow"></div>
            </div>
            
            <div className="feature-card feature-card-premium" data-tilt>
              <div className="feature-background">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=350&fit=crop&auto=format" 
                  alt="Daily inspiration"
                  className="feature-bg-image"
                />
                <div className="feature-gradient-overlay"></div>
                <div className="feature-pattern"></div>
              </div>
              
              <div className="feature-content">
                <div className="feature-header">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon-bg"></div>
                    <div className="feature-icon">
                      <svg className="feature-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 21h6v-1H9v1zm3-19a7 7 0 00-4 12.9V18h8v-3.1A7 7 0 0012 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="feature-badge">Daily Updated</div>
                </div>
                
                <div className="feature-body">
                  <h3>Daily Inspiration</h3>
                  <p>Start each day with powerful quotes from world-renowned leaders, entrepreneurs, and visionaries. Transform your mindset and stay motivated on your journey to success.</p>
                  
                  <div className="feature-highlights">
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>1000+ Curated Quotes</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>Daily Notifications</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>Save Favorites</span>
                    </div>
                  </div>
                </div>
                
                <div className="feature-footer">
                  <Link to="/quotes" className="feature-cta">
                    <span>Get Inspired</span>
                    <div className="cta-icon">
                      <span className="arrow">→</span>
                    </div>
                  </Link>
                  <div className="feature-stats">
                    <span className="stat-number">365</span>
                    <span className="stat-label">Days/Year</span>
                  </div>
                </div>
              </div>
              
              <div className="feature-glow"></div>
            </div>
            
            <div className="feature-card feature-card-premium" data-tilt>
              <div className="feature-background">
                <img 
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=500&h=350&fit=crop&auto=format" 
                  alt="Interactive quizzes"
                  className="feature-bg-image"
                />
                <div className="feature-gradient-overlay"></div>
                <div className="feature-pattern"></div>
              </div>
              
              <div className="feature-content">
                <div className="feature-header">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon-bg"></div>
                    <div className="feature-icon">
                      <svg className="feature-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                        <path d="M208 0a80 80 0 00-80 80v16a64 64 0 000 128v16a64 64 0 000 128v16a80 80 0 00160 0v-16a64 64 0 000-128v-16a64 64 0 000-128V80a80 80 0 00-80-80zm224 0a80 80 0 00-80 80v16a64 64 0 000 128v16a64 64 0 000 128v16a80 80 0 00160 0v-16a64 64 0 000-128v-16a64 64 0 000-128V80a80 80 0 00-80-80z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="feature-badge">AI Powered</div>
                </div>
                
                <div className="feature-body">
                  <h3>Smart Quizzes</h3>
                  <p>Challenge yourself with AI-powered adaptive quizzes that adjust to your skill level. Track your progress, identify knowledge gaps, and master concepts efficiently.</p>
                  
                  <div className="feature-highlights">
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>Adaptive Learning</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>Progress Tracking</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>Instant Feedback</span>
                    </div>
                  </div>
                </div>
                
                <div className="feature-footer">
                  <Link to="/quiz" className="feature-cta">
                    <span>Start Quiz</span>
                    <div className="cta-icon">
                      <span className="arrow">→</span>
                    </div>
                  </Link>
                  <div className="feature-stats">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                </div>
              </div>
              
              <div className="feature-glow"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-background">
          <div className="stats-pattern"></div>
        </div>
        <div className="stats-container">
          <div className="stats-header">
            <h2>Trusted by Learners Worldwide</h2>
            <p>Join our growing community of successful students</p>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="metric-icon">
                <svg className="metric-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4v16a1 1 0 001.447.894L12 19.118l4.553 1.776A1 1 0 0018 20V4a1 1 0 00-1.447-.894L12 5.882 7.447 3.106A1 1 0 006 4z" />
                </svg>
              </div>
              <div className="stat-number" data-count="500">500+</div>
              <div className="stat-label">Expert Courses</div>
              <div className="stat-description">Comprehensive curriculum</div>
            </div>
            <div className="stat-item">
              <div className="metric-icon">
                <svg
                  className="metric-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                >
                  <path d="M320 32L0 160l320 128 192-76.8V352h64V192l64-25.6L320 32zM112 352c-44.2 0-80 35.8-80 80v32h160v-32c0-44.2-35.8-80-80-80zm0-32a64 64 0 100-128 64 64 0 000 128zm256-96a64 64 0 11-64-64 64 64 0 0164 64zm64 128h-16.3c-15.3 0-29.9 6.2-40.6 17.1C367.4 384.6 352 410.7 352 440v24h192v-24c0-29.3-15.4-55.4-39.1-71.9-10.7-10.9-25.3-17.1-40.6-17.1z"/>
                </svg>
              </div>
              <div className="stat-number" data-count="10000">10K+</div>
              <div className="stat-label">Active Students</div>
              <div className="stat-description">Learning community</div>
            </div>
            <div className="stat-item">
              <div className="metric-icon">
                <svg className="metric-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8zm0-14a6 6 0 106 6 6.006 6.006 0 00-6-6zm0 10a4 4 0 114-4 4.005 4.005 0 01-4 4z" />
                </svg>
              </div>
              <div className="stat-number" data-count="95">95%</div>
              <div className="stat-label">Success Rate</div>
              <div className="stat-description">Proven results</div>
            </div>
            <div className="stat-item">
              <div className="metric-icon">
              <svg className="metric-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 11h-3a1 1 0 010-2h2V7a1 1 0 012 0v5a1 1 0 01-1 1z" />
              </svg>
            </div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
              <div className="stat-description">Always here to help</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-background">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop&auto=format" 
            alt="Students collaborating"
            className="cta-bg-image"
          />
          <div className="cta-overlay"></div>
        </div>
        <div className="cta-content">
          <div className="cta-badge">
            <span className="btn-text">
              <svg
              className="btn-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.5 16.5L7 19l3-3 3 3 2.5-2.5L17 17l3-9-4-4-9 3-1 3 2 2z" />
              <path d="M9 9l6 6" />
            </svg>
              Start Your Journey
            </span>
          </div>
          <h2>Ready to Transform Your Career?</h2>
          <p>Join thousands of successful students who have already advanced their careers with EduHub. Start your learning journey today and unlock your full potential.</p>
          <div className="cta-actions">
            <Link to="/courses" className="btn btn-primary btn-large btn-glow">
              <span>Get Started Today</span>
            </Link>
            <Link to="/contact" className="btn btn-outline btn-large btn-glass">
              <span>Contact Us</span>
            <span className="action-badge">
              <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 6a2 2 0 00-2-2H5a2 2 0 00-2 2v12l4-4h12a2 2 0 002-2V6z" />
              </svg>
            </span>
            </Link>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="feature-check">✓</span>
              <span>Free trial available</span>
            </div>
            <div className="cta-feature">
              <span className="feature-check">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="cta-feature">
              <span className="feature-check">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
