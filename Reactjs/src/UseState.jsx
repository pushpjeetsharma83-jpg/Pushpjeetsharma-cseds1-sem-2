import React, { useState } from 'react'

function UseState() {
  const[color,setColor]=useState('blue');
  const mouseover=()=>{
    // setColor('red');
    setColor(color=='blue'?'red':'blue')
  }

  //counter
  const[count,setCount]=useState(0);
  const increament=()=>{
    setCount(count+1);
  }
  const decreament=()=>{
    setCount(count-1);
  }
  const reset=()=>{
    setCount(0);
  }


  return (
    <>
      <h1>Use State</h1>
      <p style={{ color: color }} onMouseOver={mouseover}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quaerat! Blanditiis distinctio rem voluptas harum magnam asperiores debitis commodi amet qui consequuntur cum, inventore quasi dolores, rerum reiciendis. Praesentium, dolorum?
      </p>
      <div>
        <h2>{count}</h2>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default UseState