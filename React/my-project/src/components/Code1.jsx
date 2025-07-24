import React,{useState} from 'react'

export const Code1 = () => {
    const [name, setName] = useState('');
  return (
    <div>
   <input className='bg-blue-200' type="text" placeholder='Enter your name ' value={name} onChange={(e)=> setName(e.target.value)} />
   <h3>
    {name ? `Hello ${name}!`:'Please Enter your name ' }
   </h3>
    </div>
  )
}
