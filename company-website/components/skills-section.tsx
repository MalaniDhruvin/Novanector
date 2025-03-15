"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Database, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

const skills = [
  {
    title: "Web Development",
    description: "Creating responsive, fast, and user-friendly websites using the latest technologies.",
    icon: Globe,
  },
  {
    title: "Mobile Development",
    description: "Building native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces and experiences.",
    icon: Palette,
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side applications and APIs.",
    icon: Code,
  },
  {
    title: "Database Design",
    description: "Creating efficient and scalable database structures.",
    icon: Database,
  },
  {
    title: "Innovation Consulting",
    description: "Helping businesses identify and implement innovative digital solutions.",
    icon: Lightbulb,
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services & Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={cn(
                "bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1",
                "transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "delay-100": index % 3 === 0 },
                { "delay-300": index % 3 === 1 },
                { "delay-500": index % 3 === 2 },
              )}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

