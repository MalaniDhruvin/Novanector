import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Lightbulb,
  BarChart,
  Shield,
  Server,
  Zap,
  MessageSquare,
  FileText,
} from "lucide-react"
import Footer from "@/components/footer"

const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive, fast, and user-friendly websites using the latest technologies including React, Next.js, and Vue.js.",
    icon: Globe,
  },
  {
    title: "Mobile Development",
    description:
      "Building native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces and experiences that delight users and achieve business goals.",
    icon: Palette,
  },
  {
    title: "Backend Development",
    description:
      "Developing robust server-side applications and APIs using Node.js, Python, and Java to power your digital products.",
    icon: Server,
  },
  {
    title: "Database Design",
    description:
      "Creating efficient and scalable database structures using SQL and NoSQL solutions like PostgreSQL, MongoDB, and Firebase.",
    icon: Database,
  },
  {
    title: "Innovation Consulting",
    description:
      "Helping businesses identify and implement innovative digital solutions to stay ahead of the competition.",
    icon: Lightbulb,
  },
  {
    title: "Data Analytics",
    description:
      "Implementing data analytics solutions to help businesses make data-driven decisions and gain valuable insights.",
    icon: BarChart,
  },
  {
    title: "Cybersecurity",
    description:
      "Protecting your digital assets with comprehensive security solutions and best practices implementation.",
    icon: Shield,
  },
  {
    title: "Cloud Solutions",
    description:
      "Leveraging cloud technologies like AWS, Azure, and Google Cloud to build scalable and reliable applications.",
    icon: Code,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving the speed and efficiency of your existing applications to provide a better user experience.",
    icon: Zap,
  },
  {
    title: "Chatbot Development",
    description:
      "Creating intelligent chatbots and conversational interfaces to enhance customer service and engagement.",
    icon: MessageSquare,
  },
  {
    title: "Technical Documentation",
    description:
      "Producing comprehensive technical documentation to support your software products and internal processes.",
    icon: FileText,
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Page Header */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services & Skills</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We stay up-to-date with the latest technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "React", level: 95 },
                { name: "Next.js", level: 90 },
                { name: "Node.js", level: 85 },
                { name: "TypeScript", level: 90 },
                { name: "Python", level: 80 },
                { name: "React Native", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "PostgreSQL", level: 85 },
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-32 w-32 mx-auto bg-card rounded-full flex items-center justify-center shadow-md mb-4">
                    <span className="text-2xl font-bold text-primary">{tech.level}%</span>
                    <svg className="absolute top-0 left-0" width="128" height="128" viewBox="0 0 128 128">
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeDasharray={`${tech.level * 3.77} 377`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        className="text-primary"
                        transform="rotate(-90 64 64)"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We follow a structured approach to ensure the success of every project.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12 relative">
                {[
                  {
                    title: "Discovery",
                    description:
                      "We start by understanding your business, goals, and requirements through in-depth discussions and research.",
                  },
                  {
                    title: "Planning",
                    description:
                      "We create a detailed project plan, including timelines, milestones, and deliverables.",
                  },
                  {
                    title: "Design",
                    description:
                      "Our designers create wireframes and visual designs that align with your brand and user needs.",
                  },
                  {
                    title: "Development",
                    description:
                      "Our development team brings the designs to life, writing clean, efficient, and maintainable code.",
                  },
                  {
                    title: "Testing",
                    description:
                      "We thoroughly test the solution to ensure it meets quality standards and works flawlessly.",
                  },
                  {
                    title: "Deployment",
                    description: "We deploy the solution to production, ensuring a smooth transition.",
                  },
                  {
                    title: "Support",
                    description: "We provide ongoing support and maintenance to keep your solution running smoothly.",
                  },
                ].map((step, index) => (
                  <div key={index} className={`md:flex items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2 p-4">
                      <div className={`md:${index % 2 === 0 ? "text-right" : "text-left"}`}>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex justify-center items-center relative">
                      <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                        {index + 1}
                      </div>
                    </div>

                    <div className="md:w-1/2 p-4 md:hidden">
                      <div className="flex items-center mb-2">
                        <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-2">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

