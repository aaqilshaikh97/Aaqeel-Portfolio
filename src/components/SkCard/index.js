import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';

const SkCard = ({ title, image, children, actions, sx }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: 2, borderRadius: 6, ...sx }}> 
      {image && <CardMedia component="img" height="140" image={image} alt={title} />}
      <CardContent>
        {title && <Typography gutterBottom variant="h5" component="div">{title}</Typography>}
        <Typography variant="body2" color="text.secondary">
          {children}
        </Typography>
      </CardContent>
      {actions && (
        <CardActions>
          {actions}
        </CardActions>
      )}
    </Card>
  );
};

export default SkCard;