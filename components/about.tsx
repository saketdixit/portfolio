"use client";

import { ABOUT_TEXT } from "@/lib/sectiondata";
import { motion } from "framer-motion"
import React from "react"
import SectionHeading from "./section-heading";

export default function About() {
    return (
        <motion.section 
        id="about"
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial = {{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.17
        }}
        >
            <SectionHeading> About Me </SectionHeading>
            {ABOUT_TEXT}
        </motion.section>

    )
}