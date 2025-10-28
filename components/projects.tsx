"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Food Panda Clone",
      description: "A complete food delivery application clone with modern UI and full functionality",
      imageUrl: "https://i.postimg.cc/k64mbp07/hospital-management.png",
      technologies: ["React", "CSS", "JavaScript"],
      githubUrl: "https://github.com/abdulqadir-soomro/Food-Panda-clone",
      featured: true
    },
    {
      title: "Netflix Clone",
      description: "Netflix clone built with Bootstrap, featuring responsive design and modern UI components",
      imageUrl: "https://i.postimg.cc/VS4w58H7/smart-paw.png",
      technologies: ["Bootstrap", "CSS", "JavaScript"],
      githubUrl: "https://github.com/abdulqadir-soomro/netflix",
      featured: true
    },
    {
      title: "Todo Application with React & Redux",
      description: "Making a todo application using reactjs, redux toolkit and firebase",
      imageUrl: "https://i.postimg.cc/YGswfx7Y/ds-py.png",
      technologies: ["React", "Redux", "Firebase"],
      githubUrl: "https://github.com/abdulqadir-soomro/todo-application-react",
      featured: true
    },
    {
      title: "E-commerce with Firebase",
      description: "Ecommerce project with Firebase integration for real-time data management",
      imageUrl: "https://i.postimg.cc/k64mbp07/hospital-management.png",
      technologies: ["React", "Firebase", "JavaScript"],
      githubUrl: "https://github.com/abdulqadir-soomro/Ecommerce",
      featured: false
    },
    {
      title: "Weather App",
      description: "Weather App using HTML, CSS and Javascript",
      imageUrl: "https://i.postimg.cc/VS4w58H7/smart-paw.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/abdulqadir-soomro/Weather-app1",
      featured: false
    },
    {
      title: "Blog Website",
      description: "A blog website with content management features",
      imageUrl: "https://i.postimg.cc/VS4w58H7/smart-paw.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/abdulqadir-soomro/Blog-website",
      featured: false
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* All Main Projects in One Row */}
        <div className="flex flex-row flex-wrap justify-center gap-8 mb-16 overflow-x-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group min-w-[320px] max-w-[400px] flex-1"
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a href="https://github.com/abdulqadir-soomro" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
