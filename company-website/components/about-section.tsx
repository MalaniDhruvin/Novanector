"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "transition-all duration-1000 delay-300",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="Company team" fill className="object-cover" />
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 delay-500",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
          >
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Founded in 2015, our company has been at the forefront of digital innovation. We started with a simple
              mission: to create meaningful digital experiences that solve real problems for businesses and their
              customers.
            </p>
            <p className="text-muted-foreground mb-6">
              Over the years, we've grown from a small team of passionate developers to a full-service digital agency
              with expertise in web development, mobile applications, UI/UX design, and digital marketing.
            </p>
            <p className="text-muted-foreground">
              Our approach combines technical excellence with creative thinking, allowing us to deliver solutions that
              not only meet our clients' needs but exceed their expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

