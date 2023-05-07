import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Box, Typography, Card, CardContent } from '@mui/material';
import { useGlobalContext } from '../GlobalContext';

interface AppointmentProps {
  // appointment: {
    name: string,
    email: string,
    phoneNumber: string,
    preferredDateTime: string,
    meetingType: string,
    companyName: string,
    notes: string
  // }
}

const Appointments: React.FC = () => {

  const {appointments, setAppointments} = useGlobalContext();
  console.log(appointments);

  const AppointmentDetails = ({
    name,
    email,
    phoneNumber,
    preferredDateTime,
    meetingType,
    companyName,
    notes,
  }: AppointmentProps) => {
    // console.log(appointment);
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Appointment Details
          </Typography>
  
          <Typography variant="body1">
            <strong>Name:</strong> {name}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {email}
          </Typography>
          <Typography variant="body1">
            <strong>Phone Number:</strong> {phoneNumber}
          </Typography>
          <Typography variant="body1">
            <strong>Preferred Date & Time:</strong> {preferredDateTime}
          </Typography>
          <Typography variant="body1">
            <strong>Meeting Type:</strong> {meetingType}
          </Typography>
          <Typography variant="body1">
            <strong>Company Name:</strong> {companyName}
          </Typography>
          <Typography variant="body1">
            <strong>Notes:</strong> {notes}
          </Typography>
        </CardContent>
      </Card>
    );
  };

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
          appointments.map((app: object, key: number) => (
            <AppointmentDetails {...app} key={key} />
          ))
          :
          ''
        }
      </Box>
    </>
  );
};

export default Appointments;