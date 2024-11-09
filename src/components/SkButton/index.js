import React from 'react';
import Button from '@mui/material/Button';

const SkButton = ({ variant = "contained", color = "primary", onClick, children, size = "medium", disabled = false }) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      size={size}
      disabled={disabled}
      sx={{ margin: 1 }} 
    >
      {children}
    </Button>
  );
};

export default SkButton;