'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const projects = [
  {
    title: 'getRepo.dev',
    description: 'Making a dent in Open Source world',
    image: '/getrepo.webp',
    alt: 'GetRepo',
    details: 'A platform designed to make a significant impact in the open source ecosystem by simplifying repository discovery and contribution. Features intuitive search, project insights, and tools to help users engage with open source projects more effectively.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Rest API'],
    github: 'https://github.com/cena0rton/getRepo.dev',
    live: 'https://getrepo-dev.vercel.app'
  },
  {
    title: 'Freelance Project',
    description: 'A modern dietician app for a client',
    image: '/p1.webp',
    alt: 'E-Commerce Platform',
    details: 'Built a dietician app with modern UI and features like appointment booking, diet plan creation, admin dashboard, and progress tracking and payment integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion.dev', 'Google Sheet API'],
    github: 'https://github.com/cena0rton/dietician-app',
    live: 'https://dtdietdoctorharnoor.com'
  },
  {
    title: 'Radial – SaaS Landing Experience',
    description: 'Collaborative project management tool tempalate',
    image: '/p2.webp',
    alt: 'Saas Landing Page Template',
    details: 'Engineered a high-performance, conversion-optimized marketing website for a project management SaaS platform, delivering exceptional user experience through modern web technologies and performance-first architecture.',
    tech: ['React', 'Next.js', 'Motion.dev', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/cena0rton/radial-marketing-template',
    live: 'https://radial-marketing-template.vercel.app/'
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio website showcasing my work and skills',
    image: '/p3.webp',
    alt: 'Portfolio',
    details: 'A personal portfolio website that highlights my projects, skills, and experience. Designed with a clean interface, responsive layout, and smooth animations to provide an engaging and accessible showcase of my work.',
    tech: ['Farmer Motion', 'Tailwind CSS', 'Next.js', 'UI/UX', "TypeScript"],
    github: 'https://github.com/cena0rton/portfolio-nextjs',
    live: 'https://pawanme.vercel.app'
  },
 
];




const Projects = () => {
  // Simulate loading state for skeleton demo
 
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null);
  

  return (
    <div id="projects">
    <div  className='relative border-t border-neutral-200 mt-6'>
      <motion.h1 
        className='text-2xl font-medium mt-3 text-neutral-900 tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        
      >
        I love to build stuff.
      </motion.h1>

      {selectedProject && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <motion.div transition={{ duration: 1, ease: "easeInOut" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-scroll md:overflow-y-hidden"
            layoutId={`project-${selectedProject.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Body */}
            <div className="p-8 max-h-[90vh] pb-10 md:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <motion.div
                      layoutId={`image-${selectedProject.title}`}
                      className="w-full h-full"
                    >
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>


                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className='flex flex-col gap-2 pt-4'
                  >
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div>
                    <motion.h2 
                      className="text-3xl font-medium tracking-tight text-neutral-900 mb-2"
                      layoutId={`title-${selectedProject.title}`}
                    >
                      {selectedProject.title}
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-neutral-600 mb-4"
                      layoutId={`description-${selectedProject.title}`}
                    >
                      {selectedProject.description}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">About</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </motion.div>


                  <motion.div 
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="h-full w-full mt-6 grid grid-cols-1 md:grid-cols-2 gap-0  z-0 divide-x divide-y divide-neutral-100">
       
          {  projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
                className='bg-neutral-50 w-full p-4 overflow-hidden text-left cursor-pointer'
                layoutId={`project-${project.title}`}
              >
                <motion.h2 
                whileHover={{ x: 10 }}
                  className='text-lg font-medium flex items-center justify-between'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  layoutId={`title-${project.title}`}
                >
                  {project.title}
                  <div><svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={1}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg></div>
                </motion.h2>
                
                <motion.p 
                  className='text-sm text-neutral-500'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 + 0.3 }}
                  layoutId={`description-${project.title}`}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className='w-full h-full overflow-hidden rounded-lg pt-4 pb-4'
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.4 }}
                >
                  <motion.div
                    layoutId={`image-${project.title}`}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={1000}
                      height={100}
                      className='w-full h-full object-cover rounded-lg'
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
      </div>
    </div>
    </div>
  )
}

export default Projects
