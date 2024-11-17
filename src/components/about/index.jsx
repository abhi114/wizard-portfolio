"use client"
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import ItemLayout from './ItemLayout'

 const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
            <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex flex-col items-start'}>
                <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                    Architect of Enchantment
                </h2>
                <p className='font-light text-xs sm:text-sm md:text-base'>
                    Fueled by a passion for development, I bring ideas to life with a powerful mix of tools and languages. JavaScript sits at the core of my work, guiding every project I undertake. With frameworks like React.js and Next.js, I craft seamless, user-centric websites that feel intuitive and immersive.
In mobile development, I specialize in creating responsive Android apps using React Native and Java, delivering smooth and reliable experiences across devices. On the backend, I leverage Express to build robust and scalable APIs, ensuring seamless data flow and performance. With a keen eye for UI, I ensure every project is not only functional but also visually compelling, putting user experience at the forefront. I’m always eager to explore new technologies and push the boundaries of what’s possible.
                </p>
            </ItemLayout>
             <ItemLayout className={' col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
            <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                25 + <sub className='font-semibold text-base'>Projects</sub>
            </p>
            </ItemLayout>
             <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                2 + <sub className='font-semibold text-base'>Years of Experience</sub>
            </p>
            </ItemLayout>

            <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/?username=abhi114&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Abhishek' loading='lazy'/>
            </ItemLayout>

            <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=abhi114&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Abhishek' loading='lazy'/>
            </ItemLayout>

             <ItemLayout className={"col-span-full"}>
                <img className='w-full h-auto' src='https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn' alt='Abhishek' loading='lazy'/>
            </ItemLayout>
            
            <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=abhi114&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="GitHub Streak" loading='lazy'/>
            </ItemLayout>
            <ItemLayout className={"col-span-full  md:col-span-6 !p-0"}>
                <Link className=' w-full h-auto' href={'https://github.com/abhi114/ai-calculator'} target={"_blank"}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/pin/?username=abhi114&repo=ai-calculator&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2' alt='Abhishek' loading='lazy'/>
                </Link>
            </ItemLayout>
            
        </div>
    </section>
  )
}

export default AboutDetails
