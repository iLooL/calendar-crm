import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Typography,
  Container
} from "@mui/material";
import { useGlobalContext } from "../GlobalContext";
import { Link, redirect, useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

type AppointmentFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  preferredDateTime: string;
  meetingType: string;
  companyName: string;
  notes: string;
};

const initialFormData: AppointmentFormData = {
  name: "",
  email: "",
  phoneNumber: "",
  preferredDateTime: "",
  meetingType: "",
  companyName: "",
  notes: "",
};

const meetingTypes = ["Speed Skating", "Slow Skating", "ballerina skating"];

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AppointmentFormData>(initialFormData);
  const { setAppointments } = useGlobalContext();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    console.log('name: ', name)
    console.log('value: ', value)
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  const handleSubmit = (event: any) => {
    console.log(event);
    event.preventDefault();
    console.log("Form data submitted:", formData);
    setAppointments((prevData: any) => {
      return [...prevData, formData]
    })
    setFormData(initialFormData);
    navigate('/submission');
  };

  const events = [
    { title: 'Meeting', start: new Date() }
  ]

  

  return (
    <Container>
      <Typography variant="h4" align="center" my={2}>
        Book with Randy
      </Typography>
    {/* <form onSubmit={handleSubmit}> */}
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            select
            name="meetingType"
            label="Meeting Type"
            value={formData.meetingType}
            onChange={handleChange}
          >
            {meetingTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="companyName"
            label="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            name="notes"
            label="Message or Notes"
            value={formData.notes}
            onChange={
              handleChange}
              />
        </Grid>
        <Grid item xs={12}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            weekends={false}
            events={events}
            // eventContent={renderEventContent}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={handleSubmit} variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {/* <Button fullWidth component={Link} to="/submission" variant="contained" color="primary" type="submit">
            Submit
          </Button> */}
        </Grid>
      </Grid>
    </form>
    </Container>
  )
    };  
    
export default Booking;