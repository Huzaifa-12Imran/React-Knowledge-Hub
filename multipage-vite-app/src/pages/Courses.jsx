import { useState, useMemo } from 'react';
import CourseCard from '../components/CourseCard';

const coursesData = [
  {
    id: 1,
    title: "React Fundamentals",
    level: "Beginner",
    duration: "4 weeks",
    price: "$49",
    rating: 4.8,
    students: 2340,
    instructor: "Reginald Pemberton",
    category: "Frontend",
    tags: ["React", "JavaScript", "Components"],
    description: "Learn the basics of React including components, props, and state management. Perfect for beginners starting their React journey.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop&auto=format"
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    level: "Advanced",
    duration: "6 weeks",
    price: "$89",
    rating: 4.9,
    students: 1250,
    instructor: "Bartholomew Ashworth",
    category: "Frontend",
    tags: ["React", "Hooks", "Performance"],
    description: "Master advanced React concepts like custom hooks, context patterns, and performance optimization techniques.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&auto=format"
  },
  {
    id: 3,
    title: "React with TypeScript",
    level: "Intermediate",
    duration: "5 weeks",
    price: "$69",
    rating: 4.7,
    students: 1890,
    instructor: "Cordelia Blackwood",
    category: "Frontend",
    tags: ["React", "TypeScript", "Type Safety"],
    description: "Build type-safe React applications using TypeScript for better development experience and fewer runtime errors.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&auto=format"
  },
  {
    id: 4,
    title: "React Testing Mastery",
    level: "Intermediate",
    duration: "3 weeks",
    price: "$59",
    rating: 4.6,
    students: 980,
    instructor: "Algernon Fitzwilliam",
    category: "Testing",
    tags: ["React", "Testing", "Jest"],
    description: "Learn to write comprehensive tests for React components using Jest, React Testing Library, and modern testing practices.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&auto=format"
  },
  {
    id: 5,
    title: "React Performance Optimization",
    level: "Advanced",
    duration: "4 weeks",
    price: "$79",
    rating: 4.8,
    students: 756,
    instructor: "Percival Thornbury",
    category: "Performance",
    tags: ["React", "Performance", "Optimization"],
    description: "Optimize React applications for better performance, faster loading times, and improved user experience.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format"
  },
  {
    id: 6,
    title: "React Native Mobile Development",
    level: "Beginner",
    duration: "6 weeks",
    price: "$79",
    rating: 4.5,
    students: 1456,
    instructor: "Beatrice Weatherby",
    category: "Mobile",
    tags: ["React Native", "Mobile", "iOS", "Android"],
    description: "Build cross-platform mobile applications using React Native for iOS and Android platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&auto=format"
  },
  {
    id: 7,
    title: "Next.js Full-Stack Development",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$99",
    rating: 4.9,
    students: 2100,
    instructor: "Montgomery Harrington",
    category: "Full-Stack",
    tags: ["Next.js", "React", "Full-Stack"],
    description: "Master Next.js for building full-stack React applications with server-side rendering and API routes.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop&auto=format"
  },
  {
    id: 8,
    title: "React State Management",
    level: "Intermediate",
    duration: "4 weeks",
    price: "$65",
    rating: 4.7,
    students: 1340,
    instructor: "Prudence Whitmore",
    category: "State Management",
    tags: ["React", "Redux", "Zustand", "Context"],
    description: "Learn various state management solutions including Redux, Zustand, and Context API for complex React applications.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&auto=format"
  }
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const categories = ['All', 'Frontend', 'Mobile', 'Testing', 'Performance', 'Full-Stack', 'State Management'];

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = coursesData.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      
      return matchesSearch && matchesLevel && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.students - a.students;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
        case 'price-high':
          return parseInt(b.price.slice(1)) - parseInt(a.price.slice(1));
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedLevel, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedLevel('All');
    setSelectedCategory('All');
    setSortBy('popular');
  };

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="courses-hero-content">
          <h1>Master React Development</h1>
          <p>Discover our comprehensive collection of React courses designed to take you from beginner to expert. Learn from industry professionals and build real-world projects.</p>
          <div className="courses-stats">
            <div className="stat">
              <span className="stat-number">{coursesData.length}</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat">
              <span className="stat-number">{coursesData.reduce((sum, course) => sum + course.students, 0).toLocaleString()}</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">{(coursesData.reduce((sum, course) => sum + course.rating, 0) / coursesData.length).toFixed(1)}</span>
              <span className="stat-label">Avg Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="courses-controls">
        <div className="search-section">
          <div className="search-box">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search courses, topics, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="clear-search"
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="filters-section">
          <div className="filter-group">
            <label>Level:</label>
            <select 
              value={selectedLevel} 
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="filter-select"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Sort by:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>

          <button onClick={clearFilters} className="clear-filters-btn">
            Clear Filters
          </button>
        </div>
      </div>

      <div className="results-summary">
        <p>
          Showing <strong>{filteredAndSortedCourses.length}</strong> of <strong>{coursesData.length}</strong> courses
          {searchTerm && <span> for "<strong>{searchTerm}</strong>"</span>}
        </p>
      </div>

      <div className="course-list">
        {filteredAndSortedCourses.length > 0 ? (
          filteredAndSortedCourses.map((course, index) => (
            <CourseCard 
              key={course.id}
              {...course}
              animationDelay={index * 0.1}
            />
          ))
        ) : (
          <div className="no-results">
            <svg className="no-results-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <h3>No courses found</h3>
            <p>Try adjusting your search terms or filters to find what you're looking for.</p>
            <button onClick={clearFilters} className="btn btn-primary">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;