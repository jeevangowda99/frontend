import React from 'react'

export default function Arraymethod() {
  let fruits=["Apple ","Bannana ","Mango ","chikku "];

let Arrayobject=[{
  Name:"Jeevan",
  Address:"Mittur",
  Phone_no:9876544567,


}]

  return (
    <div>
    
    <h1 style={{backgroundColor:"Highlight"}}>Array Method</h1>
    <h1>{fruits}</h1>

    <ol>
      {fruits.map((row)=>{
        return<li>{row}</li>
      })}
    </ol>

    <h1>{Arrayobject.map((arr)=>{
      return(
        <>
            <h1><strong>Name:</strong>{arr.Name}</h1>
            <h1><strong>Address:</strong>{arr.Address}</h1>
            <h1><strong>Phone_no:</strong>{arr.Phone_no}</h1>


       </>
    )
    })}</h1>

    </div>
  )
}
