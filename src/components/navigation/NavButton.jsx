import { Github, Home, Linkedin, Notebook, Palette, Phone, Twitter, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import ResponsiveComponent from '../ResponsiveComponent';
import clsx from 'clsx';
import { motion } from 'framer-motion';
motion
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
const item = {
  hidden:{scale:0},
  show:{scale:1},
}
const NavLink = motion(Link)
const NavButton = ({ x, y, label, link, icon, newTab ,labelDirection="right"}) => {
  // backdrop-blur-[6px]: Applies a backdrop blur effect with a 6px radius, creating a frosted glass effect behind the element.
  //group: This class marks the parent <div> as a group. Any child elements can now respond to the parent’s hover state.
  //The peer and peer-hover classes in Tailwind CSS are used to create dependencies between sibling elements, enabling styles to be applied to one element based on the state of another.
  //top-0, left-0, w-full, h-full: Positions the element to cover the full area of its parent.
  //whitespace-nowrap: Prevents the text from wrapping onto multiple lines.
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center
        custom-bg
        "
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative  w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center
        custom-bg
        "
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative  w-10 h-10  xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;