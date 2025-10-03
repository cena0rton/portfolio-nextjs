'use client'
import React from 'react'

import { motion } from 'motion/react'

const Career = () => {
    const career = [
      {
        title: "Research Thesis | Aug 2024 to Dec 2024",
        company: "Government of India.",
        description: "Worked on Improving 5G Network Coverage at Mormugao Port and Indian Naval Vessel.",
      },

        {
            title: "Software Engineer | Present",
            company: "Greateway Pvt Ltd.",
            description: "Worked with clients to build their websites using React.js and Java",
        },
        {
            title: "Data Analyst | May 2023 to Jul 2023",
            company: "Autoven.",
            description: "Monitoring and analyzing data to improve the performance of the EV Battery vehicles.",
        }
    ]   
  return (
    <motion.div id="career"
    initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
    className="mt-6 border-t border-t-neutral-200 "> 
        <h2 className='text-2xl tracking-tight font-medium mt-3 text-neutral-900 mb-4'>Experience</h2>
        <div className='flex flex-col gap-4 w-full bg-neutral-50'>
        {career.map((car, idx)=>
          (  <div key={idx} className='flex flex-col bg-neutral-50'>
            <div className='flex justify-between items-center'>
          <h3 className='text-lg font-medium text-neutral-900 mb-1'>{car.company}</h3>
          {/* <p className='text-sm text-neutral-500 pr-3'>X</p> */}
          </div>
          <p className='text-sm text-neutral-800'>{car.title}</p>
          <p className='text-sm text-neutral-500'>{car.description}</p>
          </div>
         ))}
          </div>
    </motion.div>
  )
}

export default Career
