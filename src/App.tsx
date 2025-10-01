import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LazyWrapper from './components/LazyWrapper';
// Skip to content component for accessibility
const SkipToContent: React.FC = () => {
  const handleClick = () => {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon-blue text-white px-4 py-2 rounded-md z-50"
    >
      Skip to main content
    </a>
  );
};

// Lazy load heavy components
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Goals = React.lazy(() => import('./components/Goals'));
const Contact = React.lazy(() => import('./components/Contact'));
const FeaturedProjects = React.lazy(() => import('./components/FeaturedProjects'));
const MyJourney = React.lazy(() => import('./components/MyJourney'));
const ChatAssistant = React.lazy(() => import('./components/ChatAssistant'));
const AchievementsCarousel = React.lazy(() => import('./components/AchievementsCarousel'));
const BlogList = React.lazy(() => import('./blog/BlogList'));
const BlogPost = React.lazy(() => import('./blog/BlogPost'));

const App: React.FC = memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 transition-all duration-500 ease-in-out">
      <SkipToContent />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <LazyWrapper>
                  <Hero />
                </LazyWrapper>
                <LazyWrapper>
                  <FeaturedProjects />
                </LazyWrapper>
                <LazyWrapper>
                  <About />
                </LazyWrapper>
                <LazyWrapper>
                  <Skills />
                </LazyWrapper>
                <LazyWrapper>
                  <MyJourney />
                </LazyWrapper>
                <LazyWrapper>
                  <Projects />
                </LazyWrapper>
                <LazyWrapper>
                  <AchievementsCarousel />
                </LazyWrapper>
                <LazyWrapper>
                  <Goals />
                </LazyWrapper>
                <LazyWrapper>
                  <Contact />
                </LazyWrapper>
              </>
            )}
          />
          <Route 
            path="/blog" 
            element={
              <LazyWrapper>
                <BlogList />
              </LazyWrapper>
            } 
          />
          <Route 
            path="/blog/:slug" 
            element={
              <LazyWrapper>
                <BlogPost />
              </LazyWrapper>
            } 
          />
        </Routes>
      </main>
      <Footer />
      <LazyWrapper>
        <ChatAssistant />
      </LazyWrapper>
    </div>
  );
});

App.displayName = 'App';

export default App; 