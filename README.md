# React Knowledge Hub

A modern, responsive learning platform built with React and Vite. This multi-page application demonstrates practical web development skills through interactive features, clean UI/UX, and real-world functionality.

## Live Demo
https://huzaifa-12imran.github.io/React-Knowledge-Hub/
## What You'll Find Here

This project showcases a complete React application with:

- **Six distinct pages** connected through React Router
- **Live API integration** for dynamic content
- **Interactive quiz system** with scoring and history
- **Contact form** with validation and data persistence  
- **Dark/light theme switching** that remembers your preference
- **Fully responsive design** that works on any device

## Pages & Features

**Home** - Clean landing page with feature highlights and navigation
**Courses** - Browse 6 React learning courses with detailed information cards
**Quotes** - Get inspired with random quotes fetched from live APIs
**Quiz** - Test your React knowledge with a 5-question interactive quiz
**Contact** - Send messages through a validated contact form
**404** - Custom error page for invalid routes

### Key Functionality

The **Quotes page** pulls data from multiple API sources with automatic fallbacks, so you'll always get fresh content. The **Quiz section** tracks your progress and stores results locally - try it multiple times to see your improvement! The **Contact form** validates input and saves drafts, so you won't lose your message if you navigate away.

## Technical Highlights

Built with modern React patterns:
- Functional components with hooks (useState, useEffect, useContext)
- Client-side routing with React Router DOM
- Local storage integration for data persistence
- Responsive CSS with mobile-first design
- Theme context for dark/light mode management
- Form validation and error handling
- API integration with fallback strategies

## Getting Started

You'll need Node.js 16+ installed. Then:

```bash
# Clone and install
git clone <your-repo-url>
cd react-knowledge-hub
npm install

# Start development server
npm run dev
```

Or view the live demo at [https://huzaifa-12imran.github.io/React-Knowledge-Hub/](https://huzaifa-12imran.github.io/React-Knowledge-Hub/)

Visit `http://localhost:5173` to see the app in action.

## Project Structure

```
src/
├── components/         # Reusable UI components
├── contexts/          # React context providers
├── pages/             # Individual page components
├── App.jsx           # Main application setup
├── App.css           # Styling and themes
└── main.jsx          # Application entry point
```

## APIs Used

- **Quotable API** - Primary source for inspirational quotes
- **DummyJSON** - Backup quote provider
- Additional fallbacks ensure the quotes feature always works

## Design Features

The app uses a cohesive design system with:
- Blue/purple color palette with dark mode variants
- Consistent spacing and typography scales
- Smooth transitions and hover effects
- Grid-based responsive layouts
- Mobile navigation with hamburger menu

## What Makes It Special

This isn't just a demo - it's a functional application with real-world features like data persistence, error handling, and accessibility considerations. The code is organized, commented, and follows React best practices.

The responsive design works seamlessly from mobile phones to desktop screens. Try the dark mode toggle, complete the quiz multiple times, or test the contact form validation to see the attention to detail.

## Building for Production

```bash
npm run build
npm run preview
```

The build process creates optimized static files ready for deployment to any hosting platform.

## Deploying to GitHub Pages

This project is configured for deployment to GitHub Pages:

1. Ensure you have the `gh-pages` package installed:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This will automatically build your project and deploy it to your GitHub Pages site. The deployment script is already configured in package.json.

Note: For proper client-side routing on GitHub Pages, a custom 404.html file is included that redirects to index.html.

## License

MIT License - feel free to use this code for learning or as a foundation for your own projects.

---
