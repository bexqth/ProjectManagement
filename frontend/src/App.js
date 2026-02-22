import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Sidebar from './components/Sidebar';
import ProjectsPage from './pages/ProjectsPage';

const drawerWidth = 250;

function App() {
  const[open, setOpen] = useState(true);

  const handleDrawerButton= () => {
    setOpen(!open);
    console.log(open);
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      backgroundColor: '#f1f1f1',
      minHeight: '100vh',
      width: '100vw'
    }}>

      {/**Side bar */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 60,
          transition: '0.3s',
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 60,
            boxSizing: 'border-box',
            transition: '0.3s',
            borderRadius: '25px 25px 25px 25px', 
            overflow: 'hidden',
            left: 15,
            top: 15,
            height: 'calc(100% - 30px)',
            border: 'none',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
          },
        }}
      >
        <Sidebar open={open} handleDrawerButton={handleDrawerButton} />
      </Drawer>

      {/**Main window with content */}
      <Box
        component="main" 
        sx={{
          paddingLeft: 3,
          minHeight: '100vh',
          flexGrow: 1, //gets the rest
          width: '100%',
          transition: '0.3s',
        }}
      >
        <ProjectsPage />
      </Box>

    </Box>
  );
}

export default App;