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
         I follow simplicity, pay attention to details, and trust my intuition to structure things in a way that just feels right. I think differently, and that’s my strength. Here to shine and be limitless!
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
      <a href="https://cal.com/pawanmishra/30min" target="_blank" rel="noopener noreferrer" className="mb-6 hover:scale-110 text-neutral-700 text-base font-light bg-neutral-100 px-4 py-2 cursor-pointer relative">
        <span className="w-1 h-1 absolute top-0 -left-0 bg-neutral-300 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"></span>
        <span className="w-1 h-1 absolute top-0 right-0 bg-neutral-300 translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"></span>
        <span className="w-1 h-1 absolute bottom-0 right-0 bg-neutral-300 translate-x-1/2 translate-y-1/2 rounded-full animate-pulse"></span>
        <span className="w-1 h-1 absolute bottom-0 left-0 bg-neutral-300 -translate-x-1/2 translate-y-1/2 rounded-full animate-pulse"></span>
        Book a call?
        </a>
    )
  }
