import { Github, Home, Linkedin, Notebook, Palette, Phone, Twitter, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
const getIcon = (icon)=>{
  switch (icon) {
    case 'home':
      return <Home className='w-full h-auto' strokeWidth={1.5}/>
      break;
    case 'about':
      return <User className='w-full h-auto' strokeWidth={1.5}/>
      break;
    case 'projects':
      return <Palette className='w-full h-auto' strokeWidth={1.5}/>
      break;
    case 'contact':
      return <Phone className='w-full h-auto' strokeWidth={1.5}/>
      break;
    case 'github':
      return <Github className='w-full h-auto' strokeWidth={1.5}/>
      break;
    case 'linkedin':
      return <Linkedin className='w-full h-auto' strokeWidth={1.5}/>
      break;
    case 'twitter':
      return <Twitter className='w-full h-auto' strokeWidth={1.5}/>
      break;
    case 'resume':
      return <Notebook className='w-full h-auto' strokeWidth={1.5}/>
      break;
   
    default:
      return <Home className='w-full h-auto' strokeWidth={1.5}/>
  }
}
const NavButton = ({ x, y, label, link, icon, newTab }) => {
  // backdrop-blur-[6px]: Applies a backdrop blur effect with a 6px radius, creating a frosted glass effect behind the element.
  return (
    <div className='absolute cursor-pointer z-50' style={{ transform: `translate(${x}, ${y})` }}>
      <Link href={link} className='text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm' aria-label={label} target={newTab?'_blank':'_self'} name={label}>
      
      <span className='relative w-14 h-14 p-4'>
        {getIcon(icon)}
      </span>
      </Link>
    </div>
  );
};

export default NavButton;