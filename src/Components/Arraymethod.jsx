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
            <h2><strong>Name:</strong>{arr.Name}</h2>
            <h2><strong>Address:</strong>{arr.Address}</h2>
            <h2><strong>Phone_no:</strong>{arr.Phone_no}</h2>


       </>
    )
    })}</h1>

    </div>
  )
}
