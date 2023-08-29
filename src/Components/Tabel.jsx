import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button1 from '@mui/icons-material/Download';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TextField from '@mui/material/TextField';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function Tabel() {
  return (
    <div className='asd'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone_No</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Jeevan</th>
      <td>jeevan22@gmail.com</td>
      <td>9980393014</td>
      <td>Mittur</td>
      <td>
      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit">
        Edit</button> <button type="button"   class="btn btn-success" data-bs-toggle="modal" data-bs-target="#view">
       View</button> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">
        Delete</button> </td>
      


    </tr>
    <tr>
      <th scope="row">ismail</th>
      <td>ismail22@gmail.com</td>
      <td>6547832</td>
      <td>vittla</td>
      <td>
      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit">
        Edit</button> <button type="button"   class="btn btn-success" data-bs-toggle="modal" data-bs-target="#view">
       View</button> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">
        Delete</button> </td>
    </tr>
    <tr>
      <th scope="row">Soorya</th>
      <td>Soorya22@gmail.com</td>
      <td>4563789</td>
      <td>panner</td>
      <td>
      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#edit">
  Edit
</button>  <button type="button"   class="btn btn-success" data-bs-toggle="modal" data-bs-target="#view">
View
</button> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">
  Delete</button> </td>

    </tr>
  </tbody>
</table>



<div class="modal fade" id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div class="modal-body">
        <div style={{backgroundColor:"azure"}}>
         <TextField id="filled-basic" label="Name" variant="filled"/><br/><br/>
         <TextField id="filled-basic" label="Email" variant="filled"/><br/><br/>
         <TextField id="filled-basic" label="Phone_No" variant="filled"/><br/><br/>
         <TextField id="filled-basic"  label="Address" variant="filled"/><br/><br/>

    </div>    
       </div>
      <div class="modal-footer">
      <Button startIcon={<HowToRegIcon/>}  variant="contained" size="small">Edit</Button>

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div class="modal-body">
          Your Data Deleted  
       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="view" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div class="modal-body">
        <Card sx={{ maxWidth: 345,}}>
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
          
       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</div>





    
  )
}

