import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Submission: React.FC = () => {
  return (
    <>
      <div>Appointment booked</div>
      <Button component={Link} to="/appointments">Return to Appointments</Button>
    </>
  );
};



export default Submission;
