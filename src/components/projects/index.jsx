import React from 'react'
import Projectlayout from './Projectlayout'

 const ProjectList = ({projects}) => {
  return (
     <div className='w-full max-w-4xl px-16 space-y-8 flex flex-col items-center py-4'>
        {projects.map((project,index)=>{
            return (<Projectlayout key={index} {...project}/>)
        })}
     </div>
  )
}

export default ProjectList