import React, { useState } from 'react'
import './Calcu.css'

export default function Calcu() {
    const [input , setInput]=useState()
    const [inputTwo , setInputTwo]=useState()
    const [result, setResult]=useState(0)
    const handleD=()=>{
      setInput(0)
      setInputTwo(0)
      setResult(0)
    }
    const hd=()=>{
      if(Number(inputTwo)==0){
        setResult('Cant divide with 0')
      }
      else{
        setResult(Number(input)/Number(inputTwo))
      }
    }

  return (
    <div>
    <input type='number' value={input} onChange={(e)=>setInput(e.target.value)}/>

    <input type='number' value={inputTwo} onChange={(e)=>setInputTwo(e.target.value)}/>

    <button onClick={()=>setResult(Number(input)+Number(inputTwo))}>+Add</button>
    <button   onClick={()=>setResult(input-inputTwo)}>-Sub</button>
    <button  onClick={()=>setResult(input*inputTwo)}>*MultiPlication</button>
    <button  onClick={hd}>/Division</button>
    <button onClick={handleD}>Delete</button>
    <h1>{result}</h1>
    </div>
  )
}
