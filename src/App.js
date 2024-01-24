import React from 'react';
import './App.css';
import { BrowserRouter as Router, } from "react-router-dom";
import MainRoutes from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './views/Components/Atoms/ScrollToTop/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainRoutes />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
