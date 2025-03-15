import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />

        {/* Featured Services Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive range of digital services to help your business thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Creating responsive, fast, and user-friendly websites using the latest technologies.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <p className="text-muted-foreground">
                  Building native and cross-platform mobile applications for iOS and Android.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Designing intuitive and engaging user interfaces and experiences.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild>
                <Link href="/skills" className="flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a look at some of our recent projects that showcase our expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="group bg-card rounded-lg overflow-hidden shadow-md border border-border hover:border-primary/50 transition-all duration-300">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="e-commerce.png?height=600&width=800"
                    alt="E-Commerce Platform"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    E-Commerce Platform
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A full-featured e-commerce platform with product management, cart functionality, and payment
                    processing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Next.js</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <div className="group bg-card rounded-lg overflow-hidden shadow-md border border-border hover:border-primary/50 transition-all duration-300">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="healthcare.png?height=600&width=800"
                    alt="Healthcare Mobile App"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Healthcare Mobile App
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A mobile application for healthcare providers to manage patient appointments and medical records.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">React Native</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Firebase</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild>
                <Link href="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business grow with our digital solutions.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

