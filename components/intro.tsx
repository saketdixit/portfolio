"use client";

import React from 'react';
import Image from 'next/image'
import { motion } from "framer-motion"


import profilephoto from "@/public/profilephoto.jpg";
import { importantLinks } from '@/lib/data';


import { INTRO_TEXT } from '@/lib/sectiondata';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    
    return (
        <section
        ref = {ref}
        id="home"
        className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-100'>
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
            <motion.h1 className='mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5] sm:text-4xl' 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
                {INTRO_TEXT}

            </motion.h1>
            <motion.div className="flex items-center justify-center text-lg font-medium gap-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1
            }}
            >
                {
                    importantLinks.map((impLinks, index) => (
                        <a key = {index} href={impLinks.link} target="_blank" className="bg-white rounded-full p-4 outline-none borderBlack 
                    //  hover:scale-110 active:scale-105 transition dark:bg-white/10 ">
                        <impLinks.Icon className="h-8 w-8" />
                        </a>
                    ))
                }
                
            </motion.div>
        </section>
    );
}