import React from 'react'
import Background from './Background'

const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <>
    <div className={`max-w-5xl h-full mx-auto bg-neutral-50/60 relative w-full${className}`}>
        <Background />
        <div className='p-6 pt-2'>
        {children}
        </div>
        
        <div className="absolute top-0 -left-0 w-[10px] h-full bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_10px)] border-x border-neutral-200 z-10"></div>
        <div className="absolute top-0 right-0 w-[10px] h-full bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_10px)] border-x border-neutral-200 z-10"></div>
       
    </div>
    </>
  )
}

export default Container