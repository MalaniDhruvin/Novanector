import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "e-commerce.png?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    featured: true,
  },
  {
    title: "Healthcare Mobile App",
    description: "A mobile application for healthcare providers to manage patient appointments and medical records.",
    image: "healthcare.png?height=600&width=800",
    tags: ["React Native", "Firebase", "Node.js"],
    featured: true,
  },
  {
    title: "Financial Dashboard",
    description: "An interactive dashboard for financial data visualization and analysis.",
    image: "dashboard.png?height=600&width=800",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Real Estate Platform",
    description: "A platform for real estate listings with advanced search and filtering capabilities.",
    image: "real-estate.png?height=600&width=800",
    tags: ["Vue.js", "Node.js", "MongoDB", "Google Maps API"],
    featured: true,
  },
  {
    title: "Social Media Analytics Tool",
    description: "A tool for tracking and analyzing social media performance across multiple platforms.",
    image: "social_media.png?height=600&width=800",
    tags: ["React", "Python", "Django", "Chart.js"],
  },
  {
    title: "Inventory Management System",
    description: "A comprehensive system for tracking inventory, orders, and suppliers.",
    image: "inventory.png?height=600&width=800",
    tags: ["Angular", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile application for tracking workouts, nutrition, and fitness goals.",
    image: "fitness_app.png?height=600&width=800",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    title: "Educational Learning Platform",
    description: "An online platform for courses, quizzes, and educational content.",
    image: "education1.png?height=600&width=800",
    tags: ["Next.js", "GraphQL", "MongoDB", "AWS"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Page Header */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent projects that showcase our expertise and creativity.
            </p>
          </div>
        </section>

        {/* Project Filters */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="rounded-full">
                All
              </Button>
              <Button variant="outline" className="rounded-full">
                Web Development
              </Button>
              <Button variant="outline" className="rounded-full">
                Mobile Apps
              </Button>
              <Button variant="outline" className="rounded-full">
                UI/UX Design
              </Button>
              <Button variant="outline" className="rounded-full">
                E-Commerce
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-card rounded-lg overflow-hidden shadow-md border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
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
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dive deeper into some of our most successful projects and learn how we solved complex challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card rounded-lg overflow-hidden shadow-md border border-border">
                <div className="relative h-80">
                  <Image
                    src="case_studies1.png?height=800&width=1200"
                    alt="E-Commerce Platform Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">How We Increased Sales by 200% for an E-Commerce Client</h3>
                  <p className="text-muted-foreground mb-6">
                    Learn how we redesigned and optimized an e-commerce platform to dramatically increase conversion
                    rates and sales.
                  </p>
                  <Button>Read Case Study</Button>
                </div>
              </div>

              <div className="bg-card rounded-lg overflow-hidden shadow-md border border-border">
                <div className="relative h-80">
                  <Image
                    src="case_studies2.png?height=800&width=1200"
                    alt="Healthcare App Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Revolutionizing Patient Care with Mobile Technology</h3>
                  <p className="text-muted-foreground mb-6">
                    Discover how our healthcare mobile app helped a medical practice improve patient engagement and
                    streamline operations.
                  </p>
                  <Button>Read Case Study</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

