import Image from 'next/image'
import React from 'react'

const Background = () => {
  return (
    <div className='relative z-20'>   
        <div className=' w-full max-h-44 overflow-hidden z-10 mask-b-from-90%'>
        <Image src='/bg.webp' alt='Background' width={1024} height={100} className='object-fit opacity-50' />
        </div>
        <div className="rounded-full absolute left-6 -bottom-22 -translate-y-1/2 bg-neutral-100 p-1 z-0">
        <Image src="/pfp.jpeg" alt="Pawan Mishra" width={100} height={100} className='rounded-full object-cover'/>
        </div>
        </div>
  )
}

export default Background