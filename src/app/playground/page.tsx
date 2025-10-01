'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link';

const Page = () => {

  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "Career", href: "/career" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" }
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (

    <div className='relative flex items-center justify-between gap-4 p-2 rounded-md border border-neutral-200 bg-neutral-100 w-xl'>
      <div className="flex w-full relative">
        {navItems.map((nav, idx) => (
          <Link
            href={nav.href}
            key={idx}
            className='flex-1 text-blue-500 text-center relative py-2'
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 rounded-md border border-neutral-200 bg-neutral-800 w-full h-full"
              />
            )}
            <span className='relative z-10'>{nav.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page;