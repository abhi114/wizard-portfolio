import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({children,className})=>{
  return (
    <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-8',className)}>
                {children}
            </div>
  )
}
 const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-8 w-full'>
            <ItemLayout className={'col-span-8 row-span-2 flex flex-col items-start'}>
                <h2 className='text-xl text-left w-full capitalize'>
                    Architect of Enchantment
                </h2>
                <p className='font-light'>
                    Fueled by a passion for development, I bring ideas to life with a powerful mix of tools and languages. JavaScript sits at the core of my work, guiding every project I undertake. With frameworks like React.js and Next.js, I craft seamless, user-centric websites that feel intuitive and immersive.
In mobile development, I specialize in creating responsive Android apps using React Native and Java, delivering smooth and reliable experiences across devices. On the backend, I leverage Express to build robust and scalable APIs, ensuring seamless data flow and performance. With a keen eye for UI, I ensure every project is not only functional but also visually compelling, putting user experience at the forefront. I’m always eager to explore new technologies and push the boundaries of what’s possible.
                </p>
            </ItemLayout>
             <ItemLayout className={'col-span-4 text-accent'}>
            <p className='font-semibold w-full text-left text-5xl'>
                25 + <sub className='font-semibold text-base'>Projects</sub>
            </p>
            </ItemLayout>
             <ItemLayout className={'col-span-4 text-accent'}>
                <p className='font-semibold w-full text-left text-5xl'>
                2 + <sub className='font-semibold text-base'>Years of Experience</sub>
            </p>
            </ItemLayout>

            <ItemLayout className={"col-span-4 !p-0"}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/?username=abhi114&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Abhishek' loading='lazy'/>
            </ItemLayout>

            <ItemLayout className={"col-span-8 !p-0"}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=abhi114&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Abhishek' loading='lazy'/>
            </ItemLayout>
            
           
            
        </div>
    </section>
  )
}

export default AboutDetails
