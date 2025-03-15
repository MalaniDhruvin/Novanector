"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
  },
  {
    title: "Healthcare Mobile App",
    description: "A mobile application for healthcare providers to manage patient appointments and medical records.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "Node.js"],
  },
  {
    title: "Financial Dashboard",
    description: "An interactive dashboard for financial data visualization and analysis.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
  },
  {
    title: "Real Estate Platform",
    description: "A platform for real estate listings with advanced search and filtering capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Node.js", "MongoDB", "Google Maps API"],
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent projects that showcase our expertise and creativity.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group bg-card rounded-lg overflow-hidden shadow-md border border-border hover:border-primary/50 transition-all duration-300",
                "transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "delay-100": index % 2 === 0 },
                { "delay-300": index % 2 === 1 },
              )}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="group">
                  View Project
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}

