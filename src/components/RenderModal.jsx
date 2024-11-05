"use client"
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'

const RenderModal = ({children,className}) => {

  return (
   <Canvas className={clsx('w-screen -z-10 h-screen relative',className)}>
    {/* Suspense allows you to show a fallback component while waiting for some code to load,
     typically used for lazy-loaded components or resources. */}
    <Suspense fallback={null}>
        {children}
    </Suspense>
    <Environment preset='dawn'/>
   </Canvas>
  )
}

export default RenderModal