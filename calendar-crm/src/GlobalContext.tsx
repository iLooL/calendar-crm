import React, { createContext, useContext, useState } from 'react';

interface GlobalData {
  profile: any,
  setProfile: any,
  loggedIn: boolean,
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
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

  return (
    <GlobalContext.Provider value={{ profile, setProfile, loggedIn, setLoggedIn }}>
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
