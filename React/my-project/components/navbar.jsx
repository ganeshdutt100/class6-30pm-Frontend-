import React, { useState } from 'react'

const navbar = () => {
  const  [state , setState]= useState(20);
  return (
    <div>
        <p>{state}</p>
        <button onClick={()=>setState(state+1)} className='bg-blue-500 p-2 rounded-2xl'>Add</button>
        <button onClick={()=>setState(state-1)} className='bg-blue-500 p-2 rounded-2xl'>Sub</button>
    </div>
  )
}

export default navbar