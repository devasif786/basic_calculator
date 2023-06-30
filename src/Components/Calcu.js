import React, { useState } from 'react'
import './Calcu.css'

export default function Calcu() {
    const [input , setInput]=useState()
    const [inputTwo , setInputTwo]=useState()
    const [result, setResult]=useState(0)
    const hd=()=>{
      if(input<inputTwo){
        setResult(input%inputTwo)
      }
    }

  return (
    <div>
    <input type='number' value={input} onChange={()=>setInput(input)}/>

    <input type='number' value={inputTwo} onChange={()=>setInputTwo(inputTwo)}/>

    <button onClick={()=>setResult(input+inputTwo)}>+Add</button>
    <button   onClick={()=>setResult(input-inputTwo)}>-Sub</button>
    <button  onClick={()=>setResult(input*inputTwo)}>*MultiPlication</button>
    <button  onClick={hd}>%Division</button>
    <button>Delete</button>
    <h1>{result}</h1>
    </div>
  )
}
