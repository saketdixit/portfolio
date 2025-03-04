"use client";

import React from 'react';
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link';

import profilephoto from "@/public/profilephoto.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";

export default function Intro() {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div 
                    initial = {{ opacity: 0 , scale:0 }}
                    animate = {{ opacity: 1 , scale:1 }} 
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                    >
                        <Image src = {profilephoto} alt="Saket portrait" 
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover
                        border-[0.35rem] border-white shadow-xl'
                        
                        />
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-4xl'
                    initial = {{ opacity: 0 , scale:0 }}
                    animate = {{ opacity: 1 , scale:1 }} 
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.1
                    }}
                    >
                        👋
                    </motion.span>

                </div>

            </div>
            <motion.p className='mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5] sm:text-4xl' 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Saket.</span> I'm a{" "}
                <span className="font-bold">full-stack engineer</span> with{" "}
                <span className="font-bold">3 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React, Python (FastAPI) and AWS</span>.
            </motion.p>
            <div className="flex items-center justify-center">
                <Link href="https://github.com/saketdixit" className="px-4">
                    <FaGithub className="h-8 w-8" />
                </Link>
                <Link href="https://www.linkedin.com/in/saketdixit/" className="px-4">
                    <FaLinkedin className='h-8 w-8' />
                </Link>
                <Link href="https://drive.google.com/file/d/15JQPjdxOCWLLVX88rGhUnU71ONTIsrAn/view?usp=sharing" className='px-4'>
                    <SiReaddotcv className='h-8 w-8' />
                </Link>            
            </div>
        </section>
    );
}