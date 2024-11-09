import React from 'react';
import Typography from '@mui/material/Typography';

const SkTypography = ({
  variant = 'body1',
  color = 'text.primary',
  align = 'left',
  children,
  sx,
  ...props 
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      align={align}
      sx={{ ...sx }} 
      {...props} 
    >
      {children}
    </Typography>
  );
};

export default SkTypography;