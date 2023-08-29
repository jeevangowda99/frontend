import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Mpawork() {
  
    let table=[{
        Name:"Ismail",
        Email:"ismail@gmail.com",
        Address:"Bantwal",

    },
    {
        Name:"jeevan",
        Email:"ismail@gmail.com",
        Address:"Bantwal"

    },
    {
        Name:"jesooryvan",
        Email:"ismail@gmail.com",
        Address:"Bantwal",

    }
]
let deletefunction =()=>{
  alert("your data deleted")
}

  return (
    <div>
        <div>
            <table class="table table-bordered" >
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th > Email</th>
                    <th>Adress</th>
                    <th>Action</th>
                </tr>
                {table.map((item,index)=>(
                  <div>
                    <tr>
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.Address}</td>
                        <td><button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target={`#edit1${index}`}>
                         Edit
                        </button>  <button type="button"   class="btn btn-success" >
                        View
                        </button> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete1">
                        Delete</button></td>
                        </tr>

<div class="modal fade"  id={`#edit1${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
      <div class="modal-body" >
          
      <div>
          
       <TextField id="filled-basic" label="Name" variant="filled"/><br/><br/>
       <TextField id="filled-basic" label="Email" variant="filled"/><br/><br/>
       <TextField id="filled-basic"  label="Address" variant="filled"/><br/><br/>

  </div>    
     </div>
    <div class="modal-footer">
       <Button  variant="contained" size="small">Edit</Button>

       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
</div>

                        
                ))}
             </thead>

            </table>
            


<div class="modal fade" id="delete1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div class="modal-body">
          Are You sure Delete Your Data
       </div>
      <div class="modal-footer">
        <button type="button" onClick={deletefunction} class="btn btn-info" data-bs-dismiss="modal">Yes Delete</button>
      </div>
    </div>
  </div>
</div>

  



        </div>
    </div>
  )
}
