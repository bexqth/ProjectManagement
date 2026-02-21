import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ProjectIcon from '@mui/icons-material/FolderCopyRounded';
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/ListRounded';

const Sidebar = ({open, handleDrawerButton}) => {
    return (
        <Box sx={{
            width: open ? 250 : 60, 
            transition: '0.3s', 
            overflowX: 'hidden'
        }}>
            {/*Title of the side bar */}
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: open ? 'space-between' : 'center'}}>
                
                {open && (
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', whiteSpace: 'nowrap' }}>
                        Project Manager
                    </Typography>
                )}
                
                <IconButton onClick={handleDrawerButton}>
                    <MenuIcon />
                </IconButton>
            </Box>

            <Divider />

            {/*Options of the side bar */}

            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ height: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText 
                        primary="Dashboard" 
                        sx={{ 
                        opacity: open ? 1 : 0,
                        '& .MuiTypography-root': { whiteSpace: 'nowrap' } 
                        }} 
                    />
                    </ListItemButton>
                </ListItem>

                {/* Projects */}
                <ListItem disablePadding>
                    <ListItemButton sx={{ height: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                        <ProjectIcon />
                    </ListItemIcon>
                    <ListItemText 
                        primary="Projects" 
                        sx={{ 
                        opacity: open ? 1 : 0,
                        '& .MuiTypography-root': { whiteSpace: 'nowrap' }
                        }} 
                    />
                    </ListItemButton>
                </ListItem>

                {/* All tasks */}
                <ListItem disablePadding>
                    <ListItemButton sx={{ height: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText 
                        primary="All tasks" 
                        sx={{ 
                        opacity: open ? 1 : 0,
                        '& .MuiTypography-root': { whiteSpace: 'nowrap' } 
                        }} 
                    />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
  );
}

export default Sidebar;