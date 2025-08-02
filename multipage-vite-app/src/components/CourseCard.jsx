function CourseCard({ 
  title, 
  level, 
  duration, 
  description, 
  price, 
  rating, 
  students, 
  instructor, 
  category, 
  tags, 
  image,
  animationDelay = 0 
}) {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'level-beginner';
      case 'Intermediate': return 'level-intermediate';
      case 'Advanced': return 'level-advanced';
      default: return 'level-beginner';
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="star filled" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="star half" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#half-star)" />
        </svg>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="star empty" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div 
      className="course-card enhanced"
      style={{ 
        animationDelay: `${animationDelay}s`,
        '--animation-delay': `${animationDelay}s`
      }}
    >
      <div className="course-header">
        <div className="course-image-container">
          <img 
            src={image} 
            alt={title}
            className="course-img-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
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
              <span className="logo-text">Course</span>
        </div>

          <div className="course-overlay">
            <div className="course-category-badge">{category}</div>
            <div className={`course-level-badge ${getLevelColor(level)}`}>
              {level}
            </div>
          </div>
        </div>
      </div>

      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        
        <div className="course-tags">
          {tags.map((tag, index) => (
            <span key={index} className="course-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="course-instructor">
          <svg className="instructor-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>{instructor}</span>
        </div>

        <div className="course-rating">
          <div className="stars">
            {renderStars(rating)}
          </div>
          <span className="rating-text">
            {rating} ({students.toLocaleString()} students)
          </span>
        </div>
      </div>

      <div className="course-footer">
        <div className="course-meta">
          <div className="meta-item">
            <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span>{duration}</span>
          </div>
          <div className="course-price">
            <span className="price">{price}</span>
          </div>
        </div>
        
        <div className="course-actions">
          <button className="btn btn-outline btn-sm">
            Preview
          </button>
          <button className="btn btn-primary btn-sm">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;