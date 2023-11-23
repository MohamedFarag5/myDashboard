import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material'

function Layout(props) {
    const theme=useTheme();
    const { window } = props;
    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
  

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar handleDrawerToggle={handleDrawerToggle} setMode={props.setMode}/>
        <Sidebar window={window} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3,width: { lg: `calc(100% - ${drawerWidth}px)` }}}>
            <Outlet/>       
          
          
        </Box>
      </Box>
    );
  }
  
  Layout.propTypes = {
   
    window: PropTypes.func,
  };

export default Layout
