import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';
import { ToastContainer } from 'react-toastify';

import { useEffect } from 'react';
import { initializeCodeProtection } from './utils/codeProtection';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Exchanges from './components/Exchanges';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    initializeCodeProtection();
  }, []);

  return (
    <div className="app-container">
      <CustomCursor />
      <Preloader />
      <Header />
      <HeroSection />
      <Services />
      <Exchanges />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
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
  );
}

export default App