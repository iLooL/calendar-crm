import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CRMAppBar from './CRMAppBar';
import Booking from './components/Booking';
import Submission from './components/Submission';
import Dashboard from './components/Dashboard';
import Appointments from './components/Appointments';
import Clients from './components/Clients';
import Settings from './components/Settings';
import Login from './components/Login'; 

import store from './redux/store';

const App: React.FC = () => {

  return (
      <Provider store={store}>
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
      </Provider>
      );
    };
    
export default App;