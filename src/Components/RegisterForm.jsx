import React from 'react'
import TextField from '@mui/material/TextField';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Button } from '@mui/material';


export default function Register() {
  return (
    <div style={{width:"500px",backgroundColor:"azure",marginLeft:"500px"}}>
         <h1 style={{color:"red",backgroundColor:"orange"}}>REGISTER FORM</h1>
         <TextField id="filled-basic" label="Name" variant="filled"/><br/><br/>
         <TextField id="filled-basic" label="Email" variant="filled"/><br/><br/>
         <TextField id="filled-basic" label="Phone_No" variant="filled"/><br/><br/>
         <TextField id="filled-basic"  label="Password" variant="filled"/><br/><br/>
         <Button startIcon={<HowToRegIcon/>}  variant="contained" size="small">Register</Button>

    </div>
  )
}
