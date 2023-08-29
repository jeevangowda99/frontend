import React from 'react'

export default function Demo() {
function New(){
    alert("hello")
}
    
  return (
    <div>
        <h1>My first components...</h1>
        <button onClick={New}>click</button>
    </div>
  )
}
