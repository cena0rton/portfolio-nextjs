'use client'
import React from 'react'
import { motion } from 'motion/react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "Adobe Creative Suite", "Git", "VS Code", "Framer Motion"]
    }
  ]

  return (
    <motion.div id="skills"
    className="mt-6 border-t  pb-3 border-neutral-200">
      <motion.h2 
        className='text-2xl tracking-tight font-medium mt-6 text-neutral-900 mb-6'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      
      <div className='space-y-6'>
        {skillCategories.map((category, categoryIdx) => (
          <motion.div
            key={categoryIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIdx * 0.5 }}
          >
            <h3 className='text-lg font-medium text-neutral-900 mb-4'>{category.title}</h3>
            
            <div className='flex flex-wrap gap-3'>
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  className='bg-neutral-100 px-4 py-2 rounded-full'
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: (categoryIdx * 0.1) + (skillIdx * 0.05) }}
                >
                  <span className='text-sm font-medium text-neutral-900'>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
