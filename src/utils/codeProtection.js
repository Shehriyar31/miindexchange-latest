import { toast } from 'react-toastify';

let lastToastTime = 0;
const TOAST_DELAY = 1000; // 1 second delay between toasts

const showToast = (type, message) => {
  const now = Date.now();
  if (now - lastToastTime > TOAST_DELAY) {
    toast[type](message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    lastToastTime = now;
  }
};

export const initializeCodeProtection = () => {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showToast('error', 'Access Denied: You do not have permission to view the source code.');
  });

  // Disable common keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      showToast('error', 'Source code access is restricted for security purposes.');
    }
    
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
      e.preventDefault();
      showToast('warning', 'Developer tools are disabled to protect intellectual property.');
    }
    
    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      showToast('warning', 'Developer tools access is not permitted.');
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      showToast('warning', 'Console access is restricted for security reasons.');
    }
    
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      showToast('error', 'Page saving is not allowed for security purposes.');
    }
    
    // Disable Ctrl+A (Select All)
    if (e.ctrlKey && e.key === 'a') {
      e.preventDefault();
      showToast('warning', 'Content selection is not permitted.');
    }
    
    // Disable Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      showToast('warning', 'Content copying is restricted.');
    }
    
    // Disable Ctrl+P (Print)
    if (e.ctrlKey && e.key === 'p') {
      e.preventDefault();
      showToast('error', 'Printing is not allowed for security reasons.');
    }
    
    // Disable Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      showToast('warning', 'Element inspection is disabled.');
    }
    
    // Disable F5 and Ctrl+R (Refresh)
    if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
      e.preventDefault();
      showToast('info', 'Page refresh is controlled for security purposes.');
    }
    
    // Disable Ctrl+Shift+Delete (Clear browsing data)
    if (e.ctrlKey && e.shiftKey && e.key === 'Delete') {
      e.preventDefault();
      showToast('warning', 'Browser data access is restricted.');
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