'use client'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div id="about" className="mt-3 ">
      <motion.h2 
        className='text-2xl tracking-tight font-medium text-neutral-900 mb-3'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      
      <div className='bg-neutral-50 rounded-lg'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className='text-neutral-700 leading-relaxed mb-6 max-w-2xl'>
         I follow simplicity, pay attention to details, and trust my intuition to structure things in a way that just feels right. I think differently, and that’s my strength. I move Fast.
          </p>
        
          <Hire/>
        </motion.div>
      </div>
    </div>
  )
}

export default About

const Hire = () => {
    return (
      <a href="https://cal.com/pawanmishra/30min" target="_blank" rel="noopener noreferrer" className="mb-6 hover:scale-110 text-neutral-700 text-base font-light bg-white px-4 py-2 cursor-pointer relative group shadow-[inset_-12px_-8px_40px_#46464620]">
        <span className="size-1 absolute top-0 -left-0 bg-neutral-500 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse group-hover:bg-blue-500"></span>
        <span className="w-1 h-1 absolute top-0 right-0 bg-neutral-500 translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse group-hover:bg-blue-500"></span>
        <span className="w-1 h-1 absolute bottom-0 right-0 bg-neutral-500 translate-x-1/2 translate-y-1/2 rounded-full animate-pulse group-hover:bg-blue-500"></span>
        <span className="w-1 h-1 absolute bottom-0 left-0 bg-neutral-500 -translate-x-1/2 translate-y-1/2 rounded-full animate-pulse group-hover:bg-blue-500"></span>
        Connect with Me!
        </a>
    )
  }
