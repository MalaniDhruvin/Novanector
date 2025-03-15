"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Briefcase, GraduationCap, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description:
      "Leading the development of web applications for enterprise clients, managing a team of developers, and implementing best practices for code quality and performance.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2017 - 2020",
    description:
      "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality products.",
  },
  {
    title: "Junior Developer",
    company: "WebCraft Studios",
    period: "2015 - 2017",
    description:
      "Assisted in the development of websites and web applications. Gained experience in HTML, CSS, JavaScript, and PHP.",
  },
]

const education = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2013 - 2015",
    description: "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    period: "2009 - 2013",
    description: "Focused on Programming and Database Management. Participated in various coding competitions.",
  },
]

const awards = [
  {
    title: "Best Web Application",
    organization: "Tech Awards",
    year: "2022",
    description:
      "Recognized for developing an innovative web application that improved user experience and accessibility.",
  },
  {
    title: "Innovation in Technology",
    organization: "Digital Excellence Awards",
    year: "2019",
    description: "Awarded for implementing cutting-edge technologies in client projects.",
  },
]

export default function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Qualifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team brings years of experience and expertise to every project we undertake.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
                  <h4 className="text-lg font-semibold">{exp.title}</h4>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-primary">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div
            className={cn(
              "transition-all duration-700 delay-500",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Awards</h3>
            </div>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
                  <h4 className="text-lg font-semibold">{award.title}</h4>
                  <p className="text-primary">{award.organization}</p>
                  <p className="text-sm text-muted-foreground mb-2">{award.year}</p>
                  <p className="text-muted-foreground">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

