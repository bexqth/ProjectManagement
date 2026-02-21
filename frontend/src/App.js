import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Sidebar from './components/Sidebar';

const drawerWidth = 250;

function App() {
  const[open, setOpen] = useState(true);

  const handleDrawerButton= () => {
    setOpen(!open);
    console.log(open);
  }

  return (
    <Box sx={{ display: 'flex' }}>

      {/**Side bar */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 60,
          transition: '0.3s'
        }}
      >
        <Sidebar open={open} handleDrawerButton={handleDrawerButton} />
      </Drawer>

      {/**Main window with content */}
      <Box
        component="main" 
        sx={{
          paddingLeft: 5,
          minHeight: '100vh'
        }}
      >
        <h1>Dashboard</h1>
        <p>Its content.</p>
      </Box>

    </Box>
  );
}

export default App;