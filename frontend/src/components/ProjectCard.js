import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, AvatarGroup, Avatar, Chip, IconButton } from '@mui/material';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';
import AssignmentIcon from '@mui/icons-material/Assignment';

const ProjectCard = ({ color, title, description, progress, tasksNumber }) => {
    return(
        <Card sx={{
            borderRadius: '20px', 
            minHeight: '200px',
            display: 'flex', 
            flexDirection: 'column',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            overflow: 'hidden', 
            p: 0.8,
        }}>
            <Box sx={{ borderRadius: '18px', backgroundColor: color, p: 3, display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
                    {title}
                </Typography>
                    
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>        
                    {description}
                </Typography>

                <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip 
                        icon={<AssignmentIcon style={{ fontSize: '16px', color: '#1a1a1a' }} />}
                        label={`${tasksNumber} tasks`} 
                        sx={{ 
                            bgcolor: 'rgba(255,255,255,0.5)', 
                            fontWeight: 'bold',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }} 
                    />
                </Box>
            </Box>

            <Box sx={{ 
                    padding: 1,
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