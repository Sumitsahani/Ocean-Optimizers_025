// src/App.jsx

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InvoiceMain from './InvoiceMain'; // Assuming you have InvoiceMain component
import Landing from './Landing';
import  { Registers } from './components/Register';
import ContactUs from './components/ContactUs';
import { Login } from './components/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registers />} />
        <Route path="/invoice" element={<InvoiceMain />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <ToastContainer/>
    </Router>
  );
};

export default App;
