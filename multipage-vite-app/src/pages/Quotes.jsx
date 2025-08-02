import { useEffect, useState } from "react";

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [apiSource, setApiSource] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [quoteHistory, setQuoteHistory] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const fetchQuote = async () => {
    setLoading(true);
    setError("");
    setQuote(null);

    const apis = [
      {
        name: "Quotable",
        url: "https://api.quotable.io/random",
        transform: (data) => ({
          content: data.content,
          author: data.author
        })
      },
      {
        name: "DummyJSON Quotes",
        url: "https://dummyjson.com/quotes/random",
        transform: (data) => ({
          content: data.quote,
          author: data.author
        })
      },
      {
        name: "JSONPlaceholder (Custom)",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        transform: (data) => ({
          content: "The way to get started is to quit talking and begin doing.",
          author: "Walt Disney"
        })
      },
      {
        name: "QuoteGarden",
        url: "https://quotegarden.herokuapp.com/api/v3/quotes/random",
        transform: (data) => ({
          content: data.data.quoteText.replace(/^"|"$/g, ''),
          author: data.data.quoteAuthor
        })
      }
    ];

    for (const api of apis) {
      try {
        console.log(`Trying ${api.name}...`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(api.url, {
          signal: controller.signal,
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          },
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log(`${api.name} response:`, data);
        
        const transformedQuote = api.transform(data);
        
        if (transformedQuote.content && transformedQuote.author) {
          setQuote(transformedQuote);
          setApiSource(api.name);
          setLoading(false);
          
          const newQuote = { ...transformedQuote, id: Date.now(), apiSource: api.name };
          setQuoteHistory(prev => [newQuote, ...prev.slice(0, 9)]); 
          
          console.log(`Successfully loaded quote from ${api.name}`);
          return;
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        console.warn(`${api.name} failed:`, err.message);
        continue;
      }
    }

    setError("Unable to fetch quote from any API. Please check your internet connection and try again.");
    setLoading(false);
  };

  useEffect(() => {
    const savedFavorites = localStorage.getItem('quote-favorites');
    const savedHistory = localStorage.getItem('quote-history');
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    
    if (savedHistory) {
      setQuoteHistory(JSON.parse(savedHistory));
    }
    
    fetchQuote();
  }, []);

  useEffect(() => {
    localStorage.setItem('quote-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('quote-history', JSON.stringify(quoteHistory));
  }, [quoteHistory]);

  const addToFavorites = () => {
    if (quote && !favorites.some(fav => fav.content === quote.content)) {
      const newFavorite = { ...quote, id: Date.now(), apiSource };
      setFavorites([...favorites, newFavorite]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const shareQuote = async () => {
    if (quote) {
      const text = `"${quote.content}" - ${quote.author}`;
      
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Inspirational Quote',
            text: text,
          });
        } catch (err) {
          console.log('Error sharing:', err);
          copyToClipboard(text);
        }
      } else {
        copyToClipboard(text);
      }
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Quote copied to clipboard!');
    });
  };

  const isQuoteFavorited = () => {
    return quote && favorites.some(fav => fav.content === quote.content);
  };

  return (
    <div className="quotes-page">
      <div className="quotes-hero">
        <div className="quotes-hero-content">
          <h1>Daily Inspiration</h1>
          <p>Discover wisdom from great minds throughout history. Get inspired, motivated, and find the perfect words for any moment.</p>
          <div className="quotes-stats">
            <div className="stat">
              <span className="stat-number">{quoteHistory.length}</span>
              <span className="stat-label">Quotes Viewed</span>
            </div>
            <div className="stat">
              <span className="stat-number">{favorites.length}</span>
              <span className="stat-label">Favorites</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>
          </div>
        </div>
      </div>

      <div className="quotes-nav">
        <button 
          className={`nav-tab ${!showFavorites ? 'active' : ''}`}
          onClick={() => setShowFavorites(false)}
        >
          <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          Current Quote
        </button>
        <button 
          className={`nav-tab ${showFavorites ? 'active' : ''}`}
          onClick={() => setShowFavorites(true)}
        >
          <svg className="tab-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          Favorites ({favorites.length})
        </button>
      </div>

      {!showFavorites ? (
        <div className="quote-section">
          <div className="quote-container">
            {loading && (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Fetching inspiration...</p>
                <p className="loading-subtitle">Connecting to quote services</p>
              </div>
            )}
            
            {error && (
              <div className="error-state">
                <svg className="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <h3>Oops! Something went wrong</h3>
                <p>{error}</p>
                <button className="btn btn-primary" onClick={fetchQuote}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10" />
                    <polyline points="1 20 1 14 7 14" />
                    <path d="m3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                  Try Again
                </button>
              </div>
            )}

            {quote && !loading && !error && (
              <div className="quote-card">
                <div className="quote-content">
                  <div className="quote-mark">"</div>
                  <blockquote>
                    <p>{quote.content}</p>
                  </blockquote>
                  <div className="quote-author">
                    <span className="author-name">— {quote.author}</span>
                    {apiSource && (
                      <span className="api-source">via {apiSource}</span>
                    )}
                  </div>
                </div>
                
                <div className="quote-actions">
                  <button 
                    className={`action-btn ${isQuoteFavorited() ? 'favorited' : ''}`}
                    onClick={addToFavorites}
                    disabled={isQuoteFavorited()}
                    title={isQuoteFavorited() ? 'Already in favorites' : 'Add to favorites'}
                  >
                    {isQuoteFavorited() ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    )}
                    {isQuoteFavorited() ? 'Favorited' : 'Favorite'}
                  </button>
                  
                  <button 
                    className="action-btn"
                    onClick={shareQuote}
                    title="Share quote"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16,6 12,2 8,6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                    Share
                  </button>
                  
                  <button 
                    className="action-btn"
                    onClick={() => copyToClipboard(`"${quote.content}" - ${quote.author}`)}
                    title="Copy to clipboard"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy
                  </button>
                </div>
              </div>
            )}
          </div>

          {!error && (
            <div className="quote-controls">
              <button 
                className="btn btn-primary btn-large" 
                onClick={fetchQuote} 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="btn-spinner"></div>
                    Loading...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    Get New Quote
                  </>
                )}
              </button>
            </div>
          )}

          {quoteHistory.length > 0 && (
            <div className="quote-history">
              <h3>Recent Quotes</h3>
              <div className="history-grid">
                {quoteHistory.slice(0, 6).map((historyQuote, index) => (
                  <div 
                    key={historyQuote.id} 
                    className="history-item"
                    onClick={() => setQuote(historyQuote)}
                  >
                    <p>"{historyQuote.content.substring(0, 80)}..."</p>
                    <span>— {historyQuote.author}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="favorites-section">
          {favorites.length === 0 ? (
            <div className="empty-favorites">
              <svg className="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 17l4 4 4-4" />
                <path d="M12 12v9" />
                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
              </svg>
              <h3>No favorites yet</h3>
              <p>Start collecting your favorite quotes by clicking the heart icon on quotes you love.</p>
              <button 
                className="btn btn-primary"
                onClick={() => setShowFavorites(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                Discover Quotes
              </button>
            </div>
          ) : (
            <div className="favorites-grid">
              {favorites.map((favorite) => (
                <div key={favorite.id} className="favorite-card">
                  <div className="favorite-content">
                    <blockquote>
                      <p>"{favorite.content}"</p>
                    </blockquote>
                    <div className="favorite-author">
                      <span>— {favorite.author}</span>
                      {favorite.apiSource && (
                        <span className="api-badge">via {favorite.apiSource}</span>
                      )}
                    </div>
                  </div>
                  <div className="favorite-actions">
                    <button 
                      className="action-btn small"
                      onClick={() => shareQuote(favorite)}
                      title="Share"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16,6 12,2 8,6" />
                        <line x1="12" y1="2" x2="12" y2="15" />
                      </svg>
                    </button>
                    <button 
                      className="action-btn small"
                      onClick={() => copyToClipboard(`"${favorite.content}" - ${favorite.author}`)}
                      title="Copy"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    </button>
                    <button 
                      className="action-btn small remove"
                      onClick={() => removeFromFavorites(favorite.id)}
                      title="Remove from favorites"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3,6 5,6 21,6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quotes;