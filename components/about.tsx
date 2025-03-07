"use client";

import { ABOUT_TEXT } from "@/lib/sectiondata";
import { motion } from "framer-motion"
import React, { useEffect, useRef } from "react"
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function About() {
    const {ref, inView} = useInView({
        threshold: 0.75
    });
    
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1500) {
            setActiveSection("About")
        }
    }, [inView, setActiveSection, timeOfLastClick] );
    
    return (
        <motion.section 
        id="about"
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial = {{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.17
        }}
        ref={ref}
        >
            <SectionHeading> About Me </SectionHeading>
            {ABOUT_TEXT}
        </motion.section>
    )
}