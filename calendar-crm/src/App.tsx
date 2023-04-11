import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CRMAppBar from './CRMAppBar';
import Booking from './components/Booking';
import Submission from './components/Submission';
import Dashboard from './components/Dashboard';
import Appointments from './components/Appointments';
import Clients from './components/Clients';
import Settings from './components/Settings';
import Login from './components/Login'; 

const App: React.FC = () => {

  return (
      <>
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
        {/* <Container maxWidth="xs" sx={{ my: 'auto' }}>
          <Container >
          <AppointmentForm />  
          </Container>
        </Container> */}
      </>
      );
    };
    
export default App;