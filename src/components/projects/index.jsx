"use client"
import React from 'react'
import Projectlayout from './Projectlayout'
import { motion } from 'framer-motion'
const container = {
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.3,
      delayChildren: 1.5,
    }
  }
}
 const ProjectList = ({projects}) => {
  return (
     <motion.div variants={container} initial="hidden" animate="show" className='w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center py-4'>
        {projects.map((project,index)=>{
            return (<Projectlayout key={index} {...project}/>)
        })}
     </motion.div>
  )
}

export default ProjectList
