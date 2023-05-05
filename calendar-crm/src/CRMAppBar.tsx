import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAppSelector } from './redux/hooks';

const CRMAppBar: React.FC = () => {
  const isAuthenticated =  useAppSelector((state: RootState) => state.auth.isAuthenticated);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-controls="crm-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="crm-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/">
              Dashboard
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/appointments">
              Appointments
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/clients">
              Clients
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/settings">
              Settings
            </MenuItem>
          </Menu>
          <Typography 
            variant="h6" 
            >
            { isAuthenticated ? 
              'Welcome back!'
              :
              ''
            }
          </Typography>
          <Button 
            sx={{ ml: 'auto' }} 
            color="inherit" 
            component={Link} 
            to="/login"
            >Login
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CRMAppBar;
