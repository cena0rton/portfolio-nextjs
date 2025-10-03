import React from 'react'
import Image from 'next/image'

const Education = () => {

  return (
    <div id="education">
        <div className='mt-6 border-t border-t-neutral-200'>
           <p className='text-2xl tracking-tight font-medium mt-3 text-neutral-900'>Education</p>
           
            <div className='flex flex-row gap-4 justify-between items-center mt-4'>
               

            <div className=" flex flex-col gap-1">
             <p className='text-base tracking-tight text-neutral-900 mb-1'>Birla Institute of Technology and Sciences, Pilani</p>
              
            <p className='text-sm text-neutral-700'>B.Tech in Electronics and Electrical Engineering</p>
            <p className='text-sm text-neutral-600'>Masters Of Sciences Chemistry</p>
            <p className='text-sm text-neutral-500'>2020-2025</p>
           

           </div>
           <Image src="/bits.png" alt="Birla Institiute of Technology and Sciences, Pilani" width={80} height={80} />
            </div>
           
         
        </div>
    </div>
  )
}

export default Education