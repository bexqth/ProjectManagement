import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, AvatarGroup, Avatar, Chip, IconButton } from '@mui/material';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';

const ProjectCard = ({ color, title, category, progress, tasksNumber }) => {
    return(
        <Card sx={{
            borderRadius: '24px', 
            minHeight: '200px', 
            display: 'flex', 
            flexDirection: 'column',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            overflow: 'hidden'    
        }}>
            <Box sx={{ backgroundColor: color, p: 3, display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
                    {title}
                </Typography>
                    
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>        
                    {category}
                </Typography>

                <Typography sx={{ fontSize: 15, mb: 1, color: '#333' }}>        
                    Tasks to do: {tasksNumber}
                </Typography>
            </Box>

            <Box sx={{ 
                    p: 2, 
                    px: 3,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    bgcolor: '#fff'
                }}>
                <Typography sx={{ fontWeight: 'bold', color: '#000' }}>
                    All tasks
                </Typography>
                
                <IconButton sx={{ 
                    bgcolor: '#f5f5f5', 
                    borderRadius: '12px',
                    width: '40px',
                    height: '40px',
                    '&:hover': { bgcolor: '#eeeeee' }
                }}>
                    <ArrowIcon sx={{ fontSize: '14px', color: '#000' }} />
                </IconButton>
            </Box>
        </Card>

    );
};

export default ProjectCard;