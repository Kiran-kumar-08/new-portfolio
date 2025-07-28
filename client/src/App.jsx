import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AddEditCertificate from './pages/AddEditCertificate';
import PrivateRoute from './components/auth/PrivateRoute';
import AnimatedBackground from './components/common/AnimatedBackground';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { FaRegFilePdf } from 'react-icons/fa';

// 🌟 Floating Resume Button
const FloatingResumeButton = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (!isHome) return null;

  return (
    <a
      href="/Kiran_Resume.pdf"
      download
      title="Download Resume"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 animate-pulse"
    >
      <FaRegFilePdf className="text-lg" />
      <span className="hidden md:inline text-sm font-medium">Resume</span>
    </a>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          {/* ThunderstormBackground needs to be outside the main content wrapper
              and positioned absolutely to cover the whole screen behind everything. */}
          <AnimatedBackground />


          {/* This div acts as the main container for all your visible content,
              positioned relatively and ensuring it sits above the background. */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/login" element={<AdminLogin />} />

                {/* Nested Routes for Private Routes */}
                <Route path="/admin" element={<PrivateRoute />}>
                  <Route index element={<AdminDashboard />} /> {/* Use index for default child route */}
                  <Route path="certificates/add" element={<AddEditCertificate />} />
                  <Route path="certificates/edit/:id" element={<AddEditCertificate />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>

          <FloatingResumeButton />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
