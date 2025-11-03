import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { initializeCodeProtection } from './utils/codeProtection';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Exchanges from './components/Exchanges';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Exchanges />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function App() {
  useEffect(() => {
    initializeCodeProtection();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/1MindExchange/Home" replace />} />
          <Route path="/1MindExchange/Home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/1MindExchange/Home" replace />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router>
  );
}

export default App