import React, { useState } from 'react'
import { Api, Data } from './Data'
import MyAccordion from './MyAccordion'


const Accordion = ()=>{
    const[data , setData] = useState(Api);
  return (
    <>
        <h1>React Questions</h1>
        <div className='container'>
        <div className='accordionBlock'>
          {
            data.map((item)=>{
              return(
                <>
                <MyAccordion {...item}/>
                </>
              )
            })
          }
        </div>
        </div>
    </>
  )
}

export default Accordion
