import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CRMAppBar from './CRMAppBar';
import Booking from './pages/Booking';
import Submission from './pages/Submission';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Clients from './pages/Clients';
import Settings from './pages/Settings';
import Login from './pages/Login'; 

const App: React.FC = () => {

  return (
        <Router>
          <div>
            <CRMAppBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/submission" element={<Submission />} />
            </Routes>
          </div>
        </Router>
      );
    };
    
export default App;