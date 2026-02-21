import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ProjectIcon from '@mui/icons-material/FolderCopyRounded';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Sidebar = () => {
    return (
        <Box sx={{
            width: 250
        }}>
            {/*Title of the side bar */}
            <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    Project Manager
                </Typography>
            </Box>

            <Divider />

            {/*Options of the side bar */}

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><ProjectIcon /></ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><AssignmentIcon /></ListItemIcon>
                        <ListItemText primary="All tasks" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
  );
}

export default Sidebar;