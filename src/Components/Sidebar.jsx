import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from "@mui/material/colors";
import { useState } from 'react';
import profile from '../assets/profile.jpg';
function Sidebar({window,mobileOpen,handleDrawerToggle}) {
    const theme=useTheme();
    const navigate=useNavigate();
    const location=useLocation();
    const drawerWidth = 248;

    const Array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
    {
      text: "Contacts Information",
      icon: <ContactsOutlinedIcon />,
      path: "/contacts",
        },
        {
          text: "Invoices Balances",
          icon: <ReceiptOutlinedIcon />,
          path: "/invoices",
        },
      ];
      const Array2 = [
        { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
        { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
        {
          text: "FAQ Page",
          icon: <HelpOutlineOutlinedIcon />,
          path: "/faq",
        },
      ];
      
      const Array3 = [
        { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
        { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
        { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
        { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
      ];
    const drawer = (
        <Stack direction="column" >
          <Toolbar >
            <Stack direction="column" mb={3}pt={2}>
            <Avatar alt="Remy Sharp" src={profile} sx={{mx:"auto",marginBottom:"10px",marginTop:"12px",width:"80px",height:"80px"}}/>
          <Typography align="center" sx={{fontSize:17}}>Mohamed Farag</Typography>
          <Typography  align="center" sx={{fontSize:17,marginTop:"10px",color:theme.palette.info.main}}>admin</Typography>
          </Stack>
</Toolbar>
          <Divider />
          <List >
            {Array1.map((item, index) => (
              <ListItem key={index} disablePadding >
                <ListItemButton onClick={()=>{
                    navigate(item.path)
                }}  sx={{backgroundColor:location.pathname==item.path?theme.palette.mode=="dark"?grey[800]:grey[400]:""}}>
                  <ListItemIcon>
                    {item.icon} 
                  </ListItemIcon>
                  <ListItemText primary={item.text} className='text-menu'/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {Array2.map((item, index) => (
              <ListItem key={index} disablePadding >
                <ListItemButton onClick={()=>{
                    navigate(item.path)
                }} sx={{backgroundColor:location.pathname==item.path?theme.palette.mode=="dark"?grey[800]:grey[400]:""}}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text}  className='text-menu'/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {Array3.map((item, index) => (
              <ListItem key={index} disablePadding >
                <ListItemButton onClick={()=>{
                    navigate(item.path)
                }} sx={{backgroundColor:location.pathname==item.path?theme.palette.mode=="dark"?grey[800]:grey[400]:""}}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text}  className='text-menu'/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      );
      const container = window !== undefined ? () => window().document.body : undefined;

  return <>
  
  <Box
          component="nav"
          sx={{ width:  { lg: drawerWidth } , flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block',lg:"none"},
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width:drawerWidth},
            }}
          >
        {drawer}
        </Drawer>
         <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', lg: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
  </>
}

export default Sidebar
