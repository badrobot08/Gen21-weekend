import React,{useState} from 'react'

 function FunctionalState() {

    const [number,setNumber] = useState(0)



  return (
    <div>
        <h1>Counter: {number}</h1>
        <br/>
        <button onClick={()=>{setNumber(number +1)}}>Increase</button>
        <button onClick={()=>{setNumber(number - 1)}}>Decrease</button>
    </div>
  )
}


export default FunctionalState