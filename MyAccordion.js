import React, { useState } from 'react'

const MyAccordion=({question,answer})=>{
    const[text, setText] = useState(false);

     const Show=()=>{
        setText(!text)
     }

     return(
        <>
        <div className='question'>
              <h2>{question}</h2>
              <p onClick={Show}>{text? <i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>  }</p>
            </div>
            <div className='answer'>
              {text &&  <p>{answer}</p>}
            </div>
        </>
     )
}
export default MyAccordion;