"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { toast, Toaster } from 'sonner';
export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("name is"+ data.name)
    const templateParams = {
      to_name:"Abhishek Nigam",
      from_name: data.Name,
      reply_to: data.email,
      message: data.message,
    }
    sendEmail(templateParams)
  };
  console.log(errors);
   const sendEmail = (params) => {
      const toastId = toast.loading("Sending Your Message,Please Wait...",{className:'custom-bg'})

    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID,process.env.NEXT_PUBLIC_TEMPLATE_ID,params, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
          throttle:10000,
        }
      })
      .then(
        () => {
          //console.log('SUCCESS!');
          toast.success("I have Recieved your Message,I will get Back To You Soon....!",{id:toastId,className:'custom-bg'})
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("There was an error sending your message,Please Try again Later...!",{id:toastId})
        },
      );
  };
  return (
   <>
   <Toaster theme='dark' richColors={true}/>
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
      <input type="text" placeholder="Name" {...register("Name", {required:'This Field is Required',minLength:{value:3,message:"Name should be atleast 3 characters long"}})} className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>
      {errors.Name && <span className='inline-block self-start text-accent text-sm custom-bg rounded-md p-1'>{errors.Name.message}</span>}
      <input type="email" placeholder="email" {...register("email", {required: 'This Field is Required'})} className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>
      {errors.email && <span className='inline-block self-start text-accent text-sm custom-bg rounded-md p-1'>{errors.email.message}</span>}
      <textarea placeholder='message' {...register("message", {required: 'This Field is Required', maxLength:{value:500,message:'Message Should be less than 500 characters'}, minLength:{value:50,message:'Message Should be atleast 50 characters'}})} className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>
       {errors.message && <span className='inline-block self-start text-accent text-sm custom-bg rounded-md p-1'>{errors.message.message}</span>}
      <input value={"Cast Your Message"} className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop:blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg cursor-pointer capitalize' type="submit" />
    </form></>
  );
}