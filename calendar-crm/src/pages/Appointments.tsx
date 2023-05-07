import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography, Card, CardContent } from '@mui/material';
import { useGlobalContext } from '../GlobalContext';

interface AppointmentProps {
  appointment: {
    name: string,
    email: string,
    phoneNumber: string,
    prefferedDateTime: string,
    meetingType: string,
    companyName: string,
    notes: string
  }
}

const AppointmentDetails = (appointment: any) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Appointment Details
        </Typography>

        <Typography variant="body1">
          <strong>Name:</strong> {appointment.name}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {appointment.email}
        </Typography>
        <Typography variant="body1">
          <strong>Phone Number:</strong> {appointment.phoneNumber}
        </Typography>
        <Typography variant="body1">
          <strong>Preferred Date & Time:</strong> {appointment.preferredDateTime}
        </Typography>
        <Typography variant="body1">
          <strong>Meeting Type:</strong> {appointment.meetingType}
        </Typography>
        <Typography variant="body1">
          <strong>Company Name:</strong> {appointment.companyName}
        </Typography>
        <Typography variant="body1">
          <strong>Notes:</strong> {appointment.notes}
        </Typography>
      </CardContent>
    </Card>
  );
};


const Appointments: React.FC = () => {
  const {appointments, setAppointments} = useGlobalContext();
  console.log(appointments);

  return (
    <>
      <div>Appointments</div>
      {/* <Button 
        variant="contained"
        sx={{ ml: 'auto' }} 
        color="inherit" 
        component={Link} 
        to="/booking"
        >Create Appointment
      </Button> */}
      <Button 
        variant="contained"
        sx={{ ml: 'auto' }} 
        color="inherit" 
        component={Link} 
        to="/booking"
        >Create fake Appointment
      </Button>
      <Box>
        {appointments?.length !== 0 ?
          appointments.map((item: object, key: number) => (
            <AppointmentDetails appointment={item} key={key} />
          ))
          :
          ''
        }
      </Box>
    </>
  );
};

export default Appointments;