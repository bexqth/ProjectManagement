import React from 'react';
import { 
  Box, Typography, Grid, Button, 
  Dialog, DialogTitle, DialogContent, DialogActions, TextField 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';
import AddProjectModal from '../components/modal_wins/AddProjectModal';

const ProjectsPage = () => {

  const projectsMockData = [
      { id: 1, title: "Web Design", category: "Crafts engaging websites", color: "#e3f2fd", tasksNumber: 12},
      { id: 2, title: "Graphic Design", category: "Creates impactful visuals", color: "#fff0e0", tasksNumber: 20 },
      { id: 3, title: "Developers", category: "Builds functional solutions", color: "#f3e5f5", tasksNumber: 30 },
  ];

  const[addButtonClicked, setAddButtonClicked] = useState(false);


  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ p: 4 }}>
      {/* Title */}
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant="h4" sx={{ paddingBottom: 2,  fontWeight: 'bold', color: '#3a3a3a' }}>
          Projects
        </Typography>

        <Button
          onClick={handleOpen}
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ marginLeft: 10, borderRadius: '12px', textTransform: 'none', paddingLeft: 2, bgcolor: '#3a3a3a' }}
        >
          New Project
        </Button>
      </Box>

      {/* Grid of projects */}
      <Grid container spacing={3}>
        {/**for loop */}
            {projectsMockData.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <ProjectCard 
                        title={project.title} 
                        category={project.category} 
                        color={project.color} 
                        tasksNumber={project.tasksNumber}
                    />
                </Grid>
            )) }
      </Grid>
      
      <AddProjectModal open={open} onClose={handleClose} />
    </Box>
  );
};

export default ProjectsPage;