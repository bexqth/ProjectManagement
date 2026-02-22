import React from 'react';
import { 
  Box, Typography, Grid, Button, 
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, 
  colors
} from '@mui/material';
import { BlockPicker } from 'react-color';
import { useState } from 'react';

const AddProjectModal = ({onClose, open}) => {
    const [color, setColor] = useState('#e3f2fd');

    return (
        <Box>
            <Dialog fullWidth maxWidth="xs" onClose={onClose} open={open}
                slotProps={{
                    paper: {
                        sx: { 
                            borderRadius: '20px',
                            p: 1  
                        }
                    }
                }}
            >
                <DialogTitle sx={{ fontWeight: 'bold'}}>
                    Project form
                </DialogTitle>
                
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.4 }}>
                    <Typography variant="body2" sx={{fontWeight: 'bold' }}>
                        Project details
                    </Typography>
                    
                    <TextField 
                        label="Project Title" 
                        fullWidth
                        size="small"
                        variant="outlined" 
                        sx={{ 
                            '& .MuiInputBase-input': { fontSize: '14px' },
                            '& .MuiOutlinedInput-root': {borderRadius: '12px',}
                        }}
                    />
                    <TextField 
                        label="Category" 
                        fullWidth
                        size="small"
                        
                        variant="outlined"
                        sx={{ 
                            '& .MuiInputBase-input': { fontSize: '14px' },
                            '& .MuiOutlinedInput-root': {borderRadius: '12px',}
                        }}
                    />

                    <Typography variant="body2" sx={{fontWeight: 'bold' }}>
                        Select Project Color:
                        </Typography>

                        {/* BLOCK PICKER */}
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <BlockPicker 
                                color={color}
                                onChange={(color) => {
                                    setColor(color.hex);
                                }}
                                triangle="hide"
                                width="100%"
                                colors={['#e3f2fd', '#fff0e0', '#f3e5f5', '#e8f5e9', '#3a3a3a', '#D9E3F0', '#F47373', '#697689']}
                            />
                        </Box>
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose} sx={{ color: '#FFFFFF', backgroundColor: '#3a3a3a', borderRadius: '10px', textTransform: 'none', px: 4,}} >Cancel</Button>
                    <Button onClick={onClose} sx={{ color: '#FFFFFF', backgroundColor: '#3a3a3a', borderRadius: '10px', textTransform: 'none', px: 4,}}>Save</Button>
                </DialogActions>
            </Dialog>
        </Box>

    );
}

export default AddProjectModal;