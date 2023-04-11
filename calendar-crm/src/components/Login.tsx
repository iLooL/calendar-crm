import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

declare global {
  interface Window {
    gapi: any;
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

interface GoogleLoginProps {
  clientId: string;
  onSuccess: (response: any) => void;
  onFailure: (error: any) => void;
}

const onSuccess = () => {
  alert('SUCCESS');
};

const onFailure = (error: any) => {
  alert(error);
}

const Login: React.FC = () => {

  const clientId = '890073957017-jirhs6u4c3sfcivlvlrn8pbtgmpn4ilj.apps.googleusercontent.com';
  useEffect(() => {
    const handleClientLoad = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({ client_id: clientId });
      });
    };

    if (window.gapi) {
      handleClientLoad();
    } else {
      window.addEventListener('google-loaded', handleClientLoad);
    }

    return () => {
      window.removeEventListener('google-loaded', handleClientLoad);
    };
  }, [clientId]);

  const handleLogin = async () => {
    try {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const result = await auth2.signIn();
      onSuccess();
    } catch (error) {
      onFailure(error);
    }
  };

  return (
    <Button variant="contained" sx={button} onClick={handleLogin}>
      <GoogleIcon sx={icon} />
      Sign in with Google
    </Button>
  );
};

export default Login;
