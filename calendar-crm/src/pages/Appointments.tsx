import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Appointments: React.FC = () => {
  return (
    <>
      <div>Appointments</div>
      <Button 
        variant="contained"
        sx={{ ml: 'auto' }} 
        color="inherit" 
        component={Link} 
        to="/booking"
        >Create Appointment
      </Button>
    </>
  );
};

export default Appointments;