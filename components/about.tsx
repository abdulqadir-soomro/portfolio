"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 flex items-center justify-center min-h-[60vh]">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl  text-blue-600 dark:text-blue-400 mb-4"
          >
            I'm a Full Stack Developer with a strong focus on backend engineering and scalable system design. I specialize in building secure, efficient, and maintainable server-side architectures using Node.js, Express, and NestJS, along with PostgreSQL and MongoDB for data management.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto"
          >
           I have hands-on experience integrating cloud services such as AWS (SES, SNS, EC2), Firebase, and Supabase, enabling reliable deployments, automation workflows, and real-time application features. I also work with modern frontend technologies including React, Next.js, and Tailwind CSS to deliver high-quality, responsive user interfaces.
           </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            My approach to development centers around clean architecture, code quality, and solving real-world problems through thoughtful design. I enjoy collaborating with teams, improving systems, and continuously learning new technologies to stay aligned with industry best practices.</motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
