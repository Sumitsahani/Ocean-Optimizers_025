import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './components/Login';
import { Register } from "./components/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
        <ToastContainer /> 
      </div>
    </Router>
  );
}

export default App;
