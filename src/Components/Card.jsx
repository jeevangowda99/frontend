import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button1 from '@mui/icons-material/Download';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345,marginLeft:'550px' }}>
      <CardMedia
        sx={{ height: 140 }}
         image="https://cdn2.yamaha-motor.eu/prod/product-assets/2022/YZF1000R1SPL/2022-Yamaha-YZF1000R1SPL-EU-Icon_Performance-Static-001-03.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          Yamaha R1m
        </Typography>
        <Typography   variant="body2" color="text.secondary">
        The R1M is the most advanced production motorcycle ever created by Yamaha.
         Built specifically for supreme performance on the racetrack, it is equipped with revolutionary electronic control technology that enables you to push even harder and discover your true potential.
        </Typography>
      </CardContent>
      <CardActions>
        <Button  color="info" startIcon={<Button1/>} variant="outlined"   size="small">Download the Image</Button>
        <Button  startIcon={<CurrencyRupeeIcon/>}  variant="contained" size="small">Price</Button>
        
        
      </CardActions>
      
    </Card>
    
  );
}
