import React, { createContext, useContext, useState } from 'react';

interface GlobalData {
  profile: any,
  setProfile: any,
  loggedIn: boolean,
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
  appointments: any,
  setAppointments: any,

}

interface GlobalProviderProps {
    children: React.ReactNode
}

const GlobalContext = createContext<GlobalData | undefined>(undefined);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [profile, setProfile] = useState({
        picture: '',
        name: '',
        email: ''
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const [appointments, setAppointments] = useState([]);

  return (
    <GlobalContext.Provider value={{ profile, setProfile, loggedIn, setLoggedIn, appointments, setAppointments }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
