import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Sidebar from './components/Sidebar';

const drawerWidth = 250;

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/**Side bar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth
        }}
      >
        <Sidebar></Sidebar>
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