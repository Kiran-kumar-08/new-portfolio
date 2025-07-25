// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
// Assuming you've removed AddEditProduct if that was part of your earlier cleanup
// import AddEditProduct from './pages/AddEditProduct'; // Uncomment if you still have this page

import PrivateRoute from './components/auth/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

// <-- NEW IMPORT FOR ANIMATED BACKGROUND -->
import AnimatedBackground from './components/common/AnimatedBackground';

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <-- MAIN APP CONTAINER - ADDED relative AND REMOVED dark: classes --> */}
        <div className="relative flex flex-col min-h-screen bg-gray-50 text-gray-800">
          {/* <-- ANIMATED BACKGROUND COMPONENT - PLACE IT HERE --> */}
          <AnimatedBackground />

          {/* <-- CONTENT WRAPPER - ADDED relative AND z-10 --> */}
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

                {/* Protected Admin Routes */}
                <Route path="/admin" element={<PrivateRoute />}>
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/certificates/add" element={<AddEditCertificate />} />
                  <Route path="/admin/certificates/edit/:id" element={<AddEditCertificate />} />
                  {/* Uncomment if you still have AddEditProduct */}
                  {/* <Route path="/admin/products/add" element={<AddEditProduct />} /> */}
                  {/* <Route path="/admin/products/edit/:id" element={<AddEditProduct />} /> */}
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;