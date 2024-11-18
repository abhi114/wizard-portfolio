"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Volume2Icon, VolumeX } from 'lucide-react'
const Sound = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const handleFirstUserInteraction = ()=>{
        const musicConsent = localStorage.getItem("musicConsent");
        if(musicConsent === 'true' && !isPlaying){
            audioRef.current.play();
            setIsPlaying(true);
        }
         ["click","keydown","touchstart"].forEach((event)=>{
                document.removeEventListener(event,handleFirstUserInteraction)
            })
    }
    useEffect(() => {
      const consent = localStorage.getItem("musicConsent");
      if(consent){
        setIsPlaying(consent==="true")
        if(consent === "true"){
            ["click","keydown","touchstart"].forEach((event)=>{
                document.addEventListener(event,handleFirstUserInteraction)
            })
        }
      }
    
      return () => {
        
      }
    }, [])
    
    const toggle = ()=>{
        const newState = !isPlaying;
        setIsPlaying(!isPlaying)
        if(!isPlaying){
            audioRef.current.play()
        }else{
            audioRef.current.pause();
        }
        localStorage.setItem("musicConsent",String(newState))
    }
  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
        <audio ref={audioRef} loop>
            <source src={"/audio/videoplayback.mp3"} type='audio/mpeg'/>
            your browser does not support the audio element.
        </audio>
        <motion.button onClick={toggle} initial={{scale:0}} animate={{scale:1}} transition={{delay:1}} className='w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg'>
            {isPlaying ? <Volume2Icon className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5}/>:
            <VolumeX className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5}/>}
        </motion.button>
    </div>
  )
}

export default Sound