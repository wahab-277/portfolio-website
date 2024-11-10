import React from 'react'
import Head from '../../components/Header'
import Inter from "next/font/google";

const about = () => {
  return (
    <div>

      <Head />
      <div className='Aboutpage bg-blue-50 flex'>

      <div className="left border-x-8">
             profilepic
      </div>        
      
      <div className="right justify-center gap-11 p-10">

        <h1 className='font-bold text-8xl text-black'>About me</h1><br />
        <p className='font-medium text-4xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus fuga saepe ratione aut eius officia odio aliquid corporis dolorem, omnis animi! Vitae fuga, exercitationem soluta sunt in fugit magnam!
        </p>
        </div>

       </div>
      
    </div>  /*About*/
  )
}

export default about;
