import React, { useEffect, useState } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux';
import { Button, Avatar, Typography, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import { setAuthenticated } from '../redux/authSlice';


declare global {
  interface Window {
    gapi: any;
  }

  interface user {
      "access_token": any,
      "token_type": any,
      "expires_in": any,
      "scope": any,
      "authuser": any,
      "prompt": any
    
  }

  interface profile {
    picture: any,
    name: any,
    email: any
  }

  interface profile {
    "id": any,
    "email": any,
    "verified_email": any,
    "name": any,
    "given_name": any,
    "family_name": any,
    "picture": any,
    "locale": any
}

}

const icon = {
    marginRight: 1,
};

const button = {
  backgroundColor: '#4285F4',
    color: 'white',
    '&:hover': {
      backgroundColor: '#357ae8',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    textTransform: 'none',
}

const Login: React.FC = () => {

  const [user, setUser] = useState<user | null>(null);
  const [profile, setProfile] = useState<profile | null>(null);
  const dispatch = useAppDispatch();
  const isAuthenticated =  useAppSelector((state: any) => state.auth.isAuthenticated);
  console.log(profile);
    const login = useGoogleLogin({
        onSuccess: (codeResponse: any) => {
          console.log(codeResponse);
          setUser(codeResponse);
          dispatch(setAuthenticated(true));
        },
        onError: (error: any) => console.log('Login Failed:', error)
    });

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
      googleLogout();
      setProfile(null);
      dispatch(setAuthenticated(false));
  };
 
    const handleLogin = () => {
      login();
    }

    const handleLogout = () => {
      logOut();
    }

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                      console.log(res.data)
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">React Google Login</Typography>
        <br />
        {profile ? (
          <Box>
            <Avatar
              alt="user image"
              src={profile.picture}
              sx={{
                width: (theme) => theme.spacing(7),
                height: (theme) => theme.spacing(7),
                marginBottom: (theme) => theme.spacing(2),
              }}
            />
            <Typography variant="h5">User Logged in</Typography>
            <Typography>Name: {profile.name}</Typography>
            <Typography>Email Address: {profile.email}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
              sx={{
                marginTop: (theme) => theme.spacing(2),
              }}
            >
              Log out
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{
              marginTop: (theme) => theme.spacing(2),
            }}
          >
            Sign in with Google <GoogleIcon />
          </Button>
        )}
      </Box>
    );
};

export default Login;
