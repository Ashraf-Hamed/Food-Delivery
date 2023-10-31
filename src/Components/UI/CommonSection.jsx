import React from 'react'

export default function CommonSection(props) {
  return (
    <>

    <section className='common__section   '>
            <div className="container  ">
                    <h2 className='text-white'>{props.title}</h2>
            </div>
    </section>
      
    </>
  )
}
