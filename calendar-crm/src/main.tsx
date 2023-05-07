import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GlobalProvider } from './GlobalContext';

const clientId = '890073957017-jirhs6u4c3sfcivlvlrn8pbtgmpn4ilj.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
        <GlobalProvider>
          <App />
        </GlobalProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
