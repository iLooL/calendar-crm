import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Typography
} from "@mui/material";
import { Link } from 'react-router-dom';

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
  const [formData, setFormData] = useState<AppointmentFormData>(initialFormData);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    console.log('name: ', name)
    console.log('value: ', value)
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData(initialFormData);
  };

  return (
    <>
    <Typography variant="h4" align="center" my={2}>
      Book with Randy
    </Typography>
    <form onSubmit={handleSubmit}>
      <Grid container sx={{maxWidth: '50%', mx: 'auto'}}spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="preferredDateTime"
            label="Preferred Date and Time"
            type="datetime-local"
            value={formData.preferredDateTime}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
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
              <Button fullWidth component={Link} to="/submission" variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
    </>
  )
    };  
    
export default Booking;