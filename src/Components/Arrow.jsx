import React from 'react'

export default function Arrow() {
    const New=()=>{
        let a =20;
        let b =30;
        let c=(a+b)
        alert(`20+30=${c}`)

    }
    const Name =(name,age)=>{

      alert(`My name is  "'${name}"'  Age is  "'${age}"'`)

    }
  return (
    <div>
    
        <button class="btn btn-success" onClick={New}>click</button><br/><br/>
        <button class="btn btn-warning" onClick={()=>Name("jeevan",20)}>Click</button>

    </div>
  )
}
