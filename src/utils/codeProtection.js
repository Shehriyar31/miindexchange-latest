import { toast } from 'react-toastify';

export const initializeCodeProtection = () => {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    toast.error('Access Denied: You do not have permission to view the source code.', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  });

  // Disable common keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      toast.error('Source code access is restricted for security purposes.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
      e.preventDefault();
      toast.warning('Developer tools are disabled to protect intellectual property.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    
    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      toast.warning('Developer tools access is not permitted.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      toast.warning('Console access is restricted for security reasons.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  });

  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
  });

  // Disable drag
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
};