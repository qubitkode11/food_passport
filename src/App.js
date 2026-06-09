import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar         from './components/Navbar';
import Footer         from './components/Footer';
import FloatingContact from './components/FloatingContact';

// Pages
import HomePage       from './pages/HomePage';
import CategoryPage   from './pages/CategoryPage';
import ContactPage    from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </Router>
  );
}

export default App;
