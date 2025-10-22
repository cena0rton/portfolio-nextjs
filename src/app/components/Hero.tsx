'use client'
import React, { JSX, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'

const icons: Record<string, JSX.Element> = {
  x: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5v.01" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  ),
};

const Hero = () => {

    const [hover, setHover] = useState<number | null>(null);
   
  const links = [
   
    {
      href: "https://x.com/pawanm_7",
      label: "X",
      icon: "x"
    },
    {
      href: "https://instagram.com/pawanm_7",
      label: "Instagram",
      icon: "instagram"
    },
    {
      href: "https://linkedin.com/in/pmbpgc7",
      label: "LinkedIn",
      icon: "linkedin"
    },
    {
      href: "https://github.com/cena0rton",
      label: "GitHub",
      icon: "github"
    }
  ];

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Career", href: "#career" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Edu", href: "#education" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const [scrolled, setScrolled] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({target: ref,
    offset: ["start end", "end start"]
  });


  useMotionValueEvent( scrollYProgress, "change", (latest) => {

    console.log(latest);
   if(latest >= 0.95777){
    setScrolled(true)
   }else{
    setScrolled(false)
   }
  });
 const [hovered, setHovered] = useState<number | null>(null);
  return (
    <>
   {scrolled && <>
    <motion.div 
         transition={{ duration: 0.5 , ease: "easeInOut"}}
         initial={{ opacity: 0, width: "20" }}
         animate={{ opacity: 1, width: 'fit-content' }}
         exit={{ opacity: 0, width: "10" }}
         layoutId='nav-container-desktop'
      className=' mx-auto rounded-full fixed bottom-1 max-w-full left-0 right-0 items-center justify-center w-fit  mb-4 bg-linear-to-r from-white via-neutral-100 to-white z-40 text-center border border-neutral-300 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] '>
     
     <AnimatePresence>
     {navItems.map((item, idx) => (
       <motion.button
        layoutId={`nav-${item.label}`}
        transition={{ duration: 0.5, delay: idx * 0.05}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='relative p-4 w-fit'
         key={idx}
         onMouseEnter={() => setHovered(idx)}
         onMouseLeave={() => setHovered(null)}
         onClick={() => scrollToSection(item.href)}
       >
     { hovered === idx && <motion.span
        layoutId='hover-span'
        className='absolute inset-0 rounded-full bg-neutral-300 w-full h-full'
        />}
        <motion.span className='text-neutral-900 relative z-10'>{item.label}</motion.span>
         
       </motion.button>
     ))}
     </AnimatePresence>
   </motion.div>
   </>}
   
    <div className=' flex flex-col items-start mt-10 divide-y relative divide-neutral-200 --font-inter z-0' ref={ref}>
      <div className='flex flex-col justify-center gap-4 items-start'>
       
        <div>
          <h1 className='text-3xl font-medium tracking-tight text-neutral-900'>Pawan Mishra</h1>
          <p className='text-md text-neutral-500'>Software Engineer with an eye for design.<br/> I build clean, simple, and impactful digital experiences.</p>
          <p className='text-sm text-neutral-400 pt-1 pb-3'>Pune, Maharashtra, India</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full border-b border-neutral-100 md:border-neutral-200">

      <div className="flex space-x-4 mt-1 items-center pb-5   py-4">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className='hover:scale-110 transition-all duration-200 rounded-xl p-1  
            shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
            '
          >
            {icons[link.icon]}
          </a>
        ))}
    
      </div>

   

        {/* Desktop Navigation */}
        <motion.div 
        layoutId='nav-container-desktop'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="hidden md:flex flex-row items-center justify-end w-full relative mt-1">
        {navItems.map((item, idx) => (
          <motion.button
          layoutId={`nav-${item.label}`}
          transition={{ duration: 0.4, delay: 0.05*idx }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
            key={idx}
            onClick={() => scrollToSection(item.href)}
            className=" text-center relative font-light px-2 cursor-pointer"
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
          >
            {hover === idx && (
              <motion.div
                layoutId="hover-span-2"
                className="absolute inset-0 rounded-md bg-neutral-100 w-full h-full"
              />
            )}
            <span className='relative z-10'>{item.label}</span>
          </motion.button>
        ))}
        </motion.div>



        {/* Mobile Hamburger Menu Button */}
        {/* <div className="md:hidden flex items-center justify-end w-full relative py-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-neutral-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-neutral-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {scrolled && 
    <motion.div layoutId='nav-container-mobile' 
    transition={{ duration: 0.5 , ease: "easeInOut"}}
    initial={{ opacity: 0, width: "10" }}
    animate={{ opacity: 1, width: 'fit-content' }}
    exit={{ opacity: 0, width: "10" }}
    className='mx-auto md:hidden rounded-full fixed left-0 right-0 bottom-1 items-center justify-center w-fit  mb-4 bg-white z-30 text-center border border-neutral-300  '>
     
     <AnimatePresence>
     {navItems.map((item, idx) => (
       <motion.button
        layoutId={`nav-${item.href}`}
        transition={{ duration: 0.5, delay: idx * 0.05}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 ,}}
        className='relative p-4'
         key={idx}
         onClick={() => scrollToSection(item.href)}
         onMouseEnter={() => setHovered(idx)}
         onMouseLeave={() => setHovered(null)}
       >
     { hovered === idx && <motion.span
        layoutId='hover-span-3'
        className='absolute inset-0 rounded-full bg-neutral-300 w-full h-full'
        />}
        <motion.span className='text-neutral-900 relative z-10'>{item.label}</motion.span>
         
       </motion.button>
     ))}
     </AnimatePresence>
   </motion.div>
   }
<AnimatePresence>
      {!scrolled && (
        <motion.div
          layoutId='nav-container-mobile'
          className="md:hidden border-b border-neutral-200 bg-neutral-50 overflow-x-auto w-full border-t-0 "
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex py-0 -ml-3">
            {navItems.map((item, idx) => (
              <motion.button
              transition={{ duration: 0.4, delay: 0.2*idx }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId={`nav-${item.href}`}
                key={idx}
                onClick={() => scrollToSection(item.href)}
                className="text-left px-4 py-3 text-neutral-900 font-light hover:bg-neutral-100 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
    </>
  )
}

export default Hero

