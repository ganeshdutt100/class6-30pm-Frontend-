import React, { useState } from 'react'

const Code2 = () => {
    const [text, setText] = useState('');

   const Emoji = (word)=>{
       word = word.toLowerCase();
       if(word.includes('happy')) return '😊';
       if(word.includes('sad')) return '🥲';
       if(word.includes('love')) return '❣️';
       if(word.includes('angry')) return '😡';
       if(word.includes('cool')) return '😎';
       return '🤔'
   } 

  return (
    <div>
        <h2>live Emoji</h2>
        <input className='bg-blue-200' type="text" placeholder='Type a feeling or word...'
         onChange={(e)=>{setText(e.target.value)}} />

        <h1>{Emoji(text)}</h1>

    </div>
  )
}

export default Code2