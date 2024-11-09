import React from 'react';
import Box from '@mui/material/Box';

const SkBox = ({ children, bgcolor = 'background.paper', padding = 1, borderRadius = 1,  sx }) => {
  return (
    <Box
      bgcolor={bgcolor}
      padding={padding}
      borderRadius={borderRadius}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx, 
      }}
    >
      {children}
    </Box>
  );
};

export default SkBox;