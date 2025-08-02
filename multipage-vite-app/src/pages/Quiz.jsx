import { useState, useEffect } from "react";

const CustomIcons = {
  AllQuestions: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Beginner: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
      <path d="M12 2L4 6v12l8 4 8-4V6L12 2zm0 2.8L18 8v8l-6 3-6-3V8l6-3.2z"/>
      <path d="M12 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
      <path d="M12 12.5L11 11h2l-1 1.5z"/>
    </svg>
  ),
  Intermediate: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
      <path d="M3.05 13.05h7.9v7.9h-7.9v-7.9zm10 0h7.9v7.9h-7.9v-7.9zm-10-10h7.9v7.9h-7.9v-7.9zm10 0h7.9v7.9h-7.9v-7.9z"/>
      <path d="M14.8 9.8L12 7l-2.8 2.8 2.8 2.8 2.8-2.8z"/>
    </svg>
  ),
  Advanced: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
      <path d="M15 2.013H9V9h6V2.013zm-2 4V4h-2v2.013h2zm8 4H17v6h4v-6zm-2 4v-2h-2v2h2zm-14 2H1v6h4v-6zm2-8h6v6H7v-6zm2 4v-2H7v2h2zm-2 4h6v6H7v-6zm2 4v-2H7v2h2z"/>
    </svg>
  ),
  Home: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  Submit: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  ),
  Timer: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  ),
  Correct: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10b981" width="20" height="20">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  Incorrect: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" width="20" height="20">
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
    </svg>
  ),
  Book: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
    </svg>
  ),
  Refresh: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
    </svg>
  ),
  Celebration: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M2 22l14-5-9-9-5 14zm10.35-15.35L16 3l4.65 4.65-3.65 3.65-4.65-4.65zm7.07-1.41L17.07 3l2.83-2.83 2.36 2.36-2.84 2.83z"/>
    </svg>
  )
};

const questions = [
  {
    id: 1,
    question: "What is a React component?",
    options: [
      "A CSS file",
      "A reusable piece of UI",
      "A database table",
      "An HTML element"
    ],
    answer: "A reusable piece of UI",
    explanation: "React components are reusable pieces of UI that can accept inputs (props) and return React elements describing what should appear on the screen.",
    difficulty: "Beginner",
    category: "Fundamentals"
  },
  {
    id: 2,
    question: "Which hook is used for state management in functional components?",
    options: ["useEffect", "useRef", "useState", "useRouter"],
    answer: "useState",
    explanation: "useState is the React hook that allows you to add state to functional components. It returns an array with the current state value and a function to update it.",
    difficulty: "Beginner",
    category: "Hooks"
  },
  {
    id: 3,
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "Java XML",
      "Java Syntax eXtension"
    ],
    answer: "JavaScript XML",
    explanation: "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
    difficulty: "Beginner",
    category: "JSX"
  },
  {
    id: 4,
    question: "How do you pass data from parent to child components?",
    options: ["Hooks", "State", "Props", "Events"],
    answer: "Props",
    explanation: "Props (short for properties) are how you pass data from parent components to child components in React. They are read-only and help make components reusable.",
    difficulty: "Beginner",
    category: "Props"
  },
  {
    id: 5,
    question: "Which hook is used to perform side effects in functional components?",
    options: ["useState", "useFetch", "useEffect", "useLoad"],
    answer: "useEffect",
    explanation: "useEffect is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
    difficulty: "Intermediate",
    category: "Hooks"
  },
  {
    id: 6,
    question: "What is the virtual DOM in React?",
    options: [
      "A copy of the real DOM kept in memory",
      "A new HTML standard",
      "A React component type",
      "A CSS framework"
    ],
    answer: "A copy of the real DOM kept in memory",
    explanation: "The virtual DOM is a JavaScript representation of the real DOM kept in memory. React uses it to optimize updates by comparing changes and updating only what's necessary.",
    difficulty: "Intermediate",
    category: "Virtual DOM"
  },
  {
    id: 7,
    question: "What is the purpose of keys in React lists?",
    options: [
      "To style list items",
      "To help React identify which items have changed",
      "To sort the list",
      "To add event listeners"
    ],
    answer: "To help React identify which items have changed",
    explanation: "Keys help React identify which items have changed, been added, or removed. This helps React optimize re-rendering of lists.",
    difficulty: "Intermediate",
    category: "Lists & Keys"
  },
  {
    id: 8,
    question: "What is React Context used for?",
    options: [
      "Styling components",
      "Managing component lifecycle",
      "Sharing data across components without prop drilling",
      "Handling form validation"
    ],
    answer: "Sharing data across components without prop drilling",
    explanation: "React Context provides a way to share values between components without having to explicitly pass props through every level of the tree (prop drilling).",
    difficulty: "Advanced",
    category: "Context"
  },
  {
  id: 9,
  question: "Which library is commonly used for routing in React apps?",
  options: ["React Router", "Redux", "Axios", "Express"],
  answer: "React Router",
  explanation: "React Router is a standard library for routing in React applications. It allows for navigation among views and handling URL parameters.",
  difficulty: "Beginner",
  category: "Routing"
  },
  {
    id: 10,
    question: "How can you lift state up in React?",
    options: ["Using useReducer", "By passing callbacks to child components", "Using Redux", "By using useEffect"],
    answer: "By passing callbacks to child components",
    explanation: "Lifting state up involves moving shared state to a common ancestor and updating it through callback functions passed to children.",
    difficulty: "Intermediate",
    category: "State Management"
  },
  {
    id: 11,
    question: "What does the useRef hook do?",
    options: [
      "Manages state",
      "Triggers re-renders",
      "References DOM elements or persists values across renders",
      "Subscribes to data changes"
    ],
    answer: "References DOM elements or persists values across renders",
    explanation: "useRef creates a mutable object which can store a value without causing re-renders. It's also used to reference DOM elements directly.",
    difficulty: "Intermediate",
    category: "Hooks"
  },
  {
    id: 12,
    question: "What is prop drilling?",
    options: [
      "Passing props to nested components unnecessarily",
      "Using props with invalid types",
      "Drilling holes in prop-types",
      "A debugging method for props"
    ],
    answer: "Passing props to nested components unnecessarily",
    explanation: "Prop drilling refers to passing props through several levels of components that don’t need them just to reach the intended recipient component.",
    difficulty: "Intermediate",
    category: "Props"
  },
  {
    id: 13,
    question: "Which React hook is best for handling form input state?",
    options: ["useEffect", "useReducer", "useContext", "useState"],
    answer: "useState",
    explanation: "useState is ideal for managing simple, local state like form input values. For more complex logic, useReducer can be considered.",
    difficulty: "Beginner",
    category: "Forms"
  },
  {
    id: 14,
    question: "What does lazy loading in React help with?",
    options: [
      "Improving typing speed",
      "Reducing the initial load time by loading components on demand",
      "Reducing memory leaks",
      "Avoiding prop drilling"
    ],
    answer: "Reducing the initial load time by loading components on demand",
    explanation: "Lazy loading defers the loading of components until they're needed, which helps improve the performance of large React apps.",
    difficulty: "Advanced",
    category: "Performance"
  },
  {
    id: 15,
    question: "How do you handle errors in a React component tree?",
    options: ["useErrorBoundary", "try/catch inside render", "Error Boundaries", "useTry"],
    answer: "Error Boundaries",
    explanation: "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree and display a fallback UI.",
    difficulty: "Advanced",
    category: "Error Handling"
  },
  {
    id: 16,
    question: "What is the main difference between useEffect and useLayoutEffect?",
    options: [
      "useLayoutEffect is asynchronous, useEffect is not",
      "useEffect runs before painting the DOM, useLayoutEffect after",
      "useLayoutEffect runs synchronously after DOM changes but before paint",
      "There is no difference"
    ],
    answer: "useLayoutEffect runs synchronously after DOM changes but before paint",
    explanation: "useLayoutEffect fires synchronously after all DOM mutations but before the browser has painted, while useEffect runs after painting.",
    difficulty: "Advanced",
    category: "Hooks"
  }
];
function Quiz() {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [quizHistory, setQuizHistory] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanations, setShowExplanations] = useState(false);
  const [quizMode, setQuizMode] = useState('all'); 
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('quizHistory');
    if (savedHistory) {
      setQuizHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    let interval;
    if (startTime && !submitted) {
      interval = setInterval(() => {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, submitted]);

  const filteredQuestions = questions.filter(q => {
    if (quizMode === 'all') return true;
    return q.difficulty.toLowerCase() === quizMode;
  });

  const startQuiz = () => {
    setStartTime(Date.now());
    setCurrentQuestion(0);
    setUserAnswers({});
    setSubmitted(false);
    setShowExplanations(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (index, option) => {
    setUserAnswers(prev => ({ ...prev, [index]: option }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = calculateScore();
    const result = {
      score,
      total: filteredQuestions.length,
      percentage: Math.round((score / filteredQuestions.length) * 100),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      timeSpent: timeSpent,
      mode: quizMode,
      answers: userAnswers
    };

    const updatedHistory = [...quizHistory, result];
    setQuizHistory(updatedHistory);
    localStorage.setItem('quizHistory', JSON.stringify(updatedHistory));
    
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    filteredQuestions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        score++;
      }
    });
    return score;
  };

  const getScoreMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return { message: "Perfect! You're a React master!", color: "gold" };
    if (percentage >= 80) return { message: "Excellent work! You know React very well!", color: "green" };
    if (percentage >= 60) return { message: "Good job! Keep learning and practicing!", color: "blue" };
    if (percentage >= 40) return { message: "Not bad! Review the concepts and try again!", color: "orange" };
    return { message: "Keep studying! You'll improve with practice!", color: "red" };
  };

  return (
    <div className="quiz-page">
      <div className="quiz-hero">
        <div className="quiz-hero-content">
          <div className="quiz-hero-title">
            <div className="quiz-hero-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <h1>React Knowledge Quiz</h1>
          </div>
          <p>Challenge yourself with our interactive React quiz. Select your difficulty level and test your knowledge of React concepts, hooks, and best practices.</p>
          <div className="quiz-stats">
            <div className="stat">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <span className="stat-number">{questions.length}</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <span className="stat-number">{quizHistory.length}</span>
              <span className="stat-label">Attempts</span>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2V9h2v8zm4 0h-2v-6h2v6zm-8 0H6v-4h2v4z"/>
                </svg>
              </div>
              <span className="stat-number">
                {quizHistory.length > 0 ? Math.round(quizHistory.reduce((sum, h) => sum + h.percentage, 0) / quizHistory.length) : 0}%
              </span>
              <span className="stat-label">Avg Score</span>
            </div>
          </div>
        </div>
      </div>

      {!startTime ? (
        <div className="quiz-setup">
          <div className="setup-container">
            <h2>Choose Your Challenge</h2>
            <p>Select the difficulty level that matches your React experience:</p>
            
            <div className="difficulty-selector">
              <div 
                className={`difficulty-card ${quizMode === 'all' ? 'selected' : ''}`}
                onClick={() => setQuizMode('all')}
              >
                <div className="difficulty-icon">
                  <CustomIcons.AllQuestions />
                </div>
                <h3>All Questions</h3>
                <p>{questions.length} questions</p>
                <span className="difficulty-badge mixed">Mixed</span>
              </div>
              
              <div 
                className={`difficulty-card ${quizMode === 'beginner' ? 'selected' : ''}`}
                onClick={() => setQuizMode('beginner')}
              >
                <div className="difficulty-icon">
                  <CustomIcons.Beginner />
                </div>
                <h3>Beginner</h3>
                <p>{questions.filter(q => q.difficulty === 'Beginner').length} questions</p>
                <span className="difficulty-badge beginner">Beginner</span>
              </div>
              
              <div 
                className={`difficulty-card ${quizMode === 'intermediate' ? 'selected' : ''}`}
                onClick={() => setQuizMode('intermediate')}
              >
                <div className="difficulty-icon">
                  <CustomIcons.Intermediate />
                </div>
                <h3>Intermediate</h3>
                <p>{questions.filter(q => q.difficulty === 'Intermediate').length} questions</p>
                <span className="difficulty-badge intermediate">Intermediate</span>
              </div>
              
              <div 
                className={`difficulty-card ${quizMode === 'advanced' ? 'selected' : ''}`}
                onClick={() => setQuizMode('advanced')}
              >
                <div className="difficulty-icon">
                  <CustomIcons.Advanced />
                </div>
                <h3>Advanced</h3>
                <p>{questions.filter(q => q.difficulty === 'Advanced').length} questions</p>
                <span className="difficulty-badge advanced">Advanced</span>
              </div>
            </div>

            <button className="btn btn-primary btn-large" onClick={startQuiz}>
              <span className="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
              Start Quiz
            </button>
          </div>
        </div>
      ) : !submitted ? (
        <div className="quiz-container">
          <div className="quiz-header">
            <div className="quiz-info">
              <span className="quiz-mode">
                <div className="mode-icon">
                  {quizMode === 'all' && <CustomIcons.AllQuestions />}
                  {quizMode === 'beginner' && <CustomIcons.Beginner />}
                  {quizMode === 'intermediate' && <CustomIcons.Intermediate />}
                  {quizMode === 'advanced' && <CustomIcons.Advanced />}
                </div>
                {quizMode.charAt(0).toUpperCase() + quizMode.slice(1)} Mode
              </span>
              <span className="quiz-timer">
                <CustomIcons.Timer />
                {formatTime(timeSpent)}
              </span>
            </div>
            <div className="quiz-progress">
              <div className="progress-text">
                <span className="progress-count">{Object.keys(userAnswers).length}</span> of <span className="progress-total">{filteredQuestions.length}</span> answered
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(Object.keys(userAnswers).length / filteredQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="quiz-form">
            {filteredQuestions.map((q, index) => (
              <div key={q.id} className="quiz-question">
                <div className="question-header">
                  <div className="question-number">Question {index + 1}</div>
                  <div className="question-meta">
                    <span className={`difficulty-tag ${q.difficulty.toLowerCase()}`}>
                      {q.difficulty}
                    </span>
                    <span className="category-tag">{q.category}</span>
                  </div>
                </div>
                
                <h3 className="question-text">{q.question}</h3>
                
                <div className="quiz-options">
                  {q.options.map((option, optionIndex) => (
                    <label 
                      key={option} 
                      className={`quiz-option ${userAnswers[index] === option ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={userAnswers[index] === option}
                        onChange={() => handleChange(index, option)}
                        required
                      />
                      <span className="option-indicator">{String.fromCharCode(65 + optionIndex)}</span>
                      <span className="option-text">{option}</span>
                      <span className="option-checkmark">✓</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="quiz-actions">
              <button 
                type="button" 
                className="btn btn-outline"
                onClick={() => {
                  setStartTime(null);
                  setUserAnswers({});
                  setTimeSpent(0);
                }}
              >
                <span className="btn-icon">
                  <CustomIcons.Home />
                </span>
                Back to Setup
              </button>
              <button 
                type="submit" 
                className="btn btn-primary btn-large"
                disabled={Object.keys(userAnswers).length < filteredQuestions.length}
              >
                <span className="btn-icon">
                  <CustomIcons.Submit />
                </span>
                Submit Quiz ({Object.keys(userAnswers).length}/{filteredQuestions.length})
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="quiz-results">
          <div className="results-container">
            <div className="results-header">
              <div className="results-title">
                <div className="results-icon">
                  <CustomIcons.Celebration />
                </div>
                <h2>Quiz Complete!</h2>
              </div>
              <div className="results-meta">
                <span className="meta-item">
                  <div className="meta-icon">
                    {quizMode === 'all' && <CustomIcons.AllQuestions />}
                    {quizMode === 'beginner' && <CustomIcons.Beginner />}
                    {quizMode === 'intermediate' && <CustomIcons.Intermediate />}
                    {quizMode === 'advanced' && <CustomIcons.Advanced />}
                  </div>
                  Mode: {quizMode.charAt(0).toUpperCase() + quizMode.slice(1)}
                </span>
                <span className="meta-item">
                  <div className="meta-icon">
                    <CustomIcons.Timer />
                  </div>
                  Time: {formatTime(timeSpent)}
                </span>
              </div>
            </div>

            <div className="score-display">
              <div className="score-circle">
                <div className="score-number">{calculateScore()}</div>
                <div className="score-total">/ {filteredQuestions.length}</div>
                <div className="score-percentage">
                  {Math.round((calculateScore() / filteredQuestions.length) * 100)}%
                </div>
              </div>
              
              <div className="score-details">
                <div className="score-breakdown">
                  <div className="breakdown-item correct">
                    <span className="breakdown-icon">
                      <CustomIcons.Correct />
                    </span>
                    <span>Correct: {calculateScore()}</span>
                  </div>
                  <div className="breakdown-item incorrect">
                    <span className="breakdown-icon">
                      <CustomIcons.Incorrect />
                    </span>
                    <span>Incorrect: {filteredQuestions.length - calculateScore()}</span>
                  </div>
                  <div className="breakdown-item time">
                    <span className="breakdown-icon">
                      <CustomIcons.Timer />
                    </span>
                    <span>Time: {formatTime(timeSpent)}</span>
                  </div>
                </div>
                
                <div className="score-message">
                  <p style={{ color: `var(--${getScoreMessage(calculateScore(), filteredQuestions.length).color})` }}>
                    {getScoreMessage(calculateScore(), filteredQuestions.length).message}
                  </p>
                </div>
              </div>
            </div>

            <div className="results-actions">
              <button 
                className="btn btn-outline"
                onClick={() => setShowExplanations(!showExplanations)}
              >
                <span className="btn-icon">
                  <CustomIcons.Book />
                </span>
                {showExplanations ? 'Hide' : 'Show'} Explanations
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSubmitted(false);
                  setUserAnswers({});
                  setStartTime(null);
                  setTimeSpent(0);
                }}
              >
                <span className="btn-icon">
                  <CustomIcons.Refresh />
                </span>
                Take Again
              </button>
            </div>

            {showExplanations && (
              <div className="explanations">
                <h3>Answer Explanations</h3>
                {filteredQuestions.map((q, index) => (
                  <div key={q.id} className="explanation-item">
                    <div className="explanation-header">
                      <span className="question-num">Q{index + 1}</span>
                      <span className={`result-indicator ${userAnswers[index] === q.answer ? 'correct' : 'incorrect'}`}>
                        {userAnswers[index] === q.answer ? <CustomIcons.Correct /> : <CustomIcons.Incorrect />}
                      </span>
                    </div>
                    <div className="explanation-content">
                      <p className="explanation-question">{q.question}</p>
                      <p className="explanation-answer">
                        <strong>Correct Answer:</strong> {q.answer}
                      </p>
                      {userAnswers[index] !== q.answer && (
                        <p className="explanation-your-answer">
                          <strong>Your Answer:</strong> {userAnswers[index] || 'Not answered'}
                        </p>
                      )}
                      <p className="explanation-text">{q.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {quizHistory.length > 1 && (
              <div className="quiz-history">
                <h3>Your Progress</h3>
                <div className="history-grid">
                  {quizHistory.slice(-6).reverse().map((result, index) => (
                    <div key={index} className="history-card">
                      <div className="history-score">
                        {result.score}/{result.total}
                      </div>
                      <div className="history-percentage">
                        {result.percentage}%
                      </div>
                      <div className="history-details">
                        <div className="history-mode">{result.mode}</div>
                        <div className="history-date">{result.date}</div>
                        {result.timeSpent && (
                          <div className="history-time">{formatTime(result.timeSpent)}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
