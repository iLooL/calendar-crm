import React, { useEffect, useState } from 'react';
import { Button, Avatar, Typography, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';

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

// interface GoogleLoginProps {
//   clientId: string;
//   onSuccess: (response: any) => void;
//   onFailure: (error: any) => void;
// }

const Login: React.FC = () => {

  const [user, setUser] = useState<user | null>(null);
  const [profile, setProfile] = useState<profile | null>(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse: any) => {
          console.log(codeResponse);
          setUser(codeResponse)
        },
        onError: (error: any) => console.log('Login Failed:', error)
    });

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

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

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
              onClick={logOut}
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
            onClick={() => login()}
            sx={{
              marginTop: (theme) => theme.spacing(2),
            }}
          >
            Sign in with Google 🚀
          </Button>
        )}
      </Box>
    );
};

export default Login;
