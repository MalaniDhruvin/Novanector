import Image from "next/image"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Page Header */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn more about our company, our mission, and the team behind our success.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image src="2672335.jpg?height=800&width=600" alt="Company team" fill className="object-cover" />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2015, our company has been at the forefront of digital innovation. We started with a simple
                  mission: to create meaningful digital experiences that solve real problems for businesses and their
                  customers.
                </p>
                <p className="text-muted-foreground mb-6">
                  Over the years, we've grown from a small team of passionate developers to a full-service digital
                  agency with expertise in web development, mobile applications, UI/UX design, and digital marketing.
                </p>
                <p className="text-muted-foreground">
                  Our approach combines technical excellence with creative thinking, allowing us to deliver solutions
                  that not only meet our clients' needs but exceed their expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-md border border-border">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We strive to be at the cutting edge of technology, constantly exploring new tools and methodologies to
                  deliver innovative solutions.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-md border border-border">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in working closely with our clients, understanding their needs, and involving them
                  throughout the development process.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-md border border-border">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p className="text-muted-foreground">
                  We are committed to delivering high-quality solutions that are reliable, secure, and built to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals who make our company great.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "John Doe", role: "CEO & Founder", image: "smiling-man-sitting-street-cafe-table-with-his-arms-crossed.jpg?height=400&width=400" },
                { name: "Jane Smith", role: "CTO", image: "happy-joyful-hipster-guy-posing.jpg?height=400&width=400" },
                { name: "Michael Johnson", role: "Lead Designer", image: "elegant-man-with-folded-arms.jpg?height=400&width=400" },
                { name: "Glenn Williams", role: "Senior Developer", image: "portrait-optimistic-businessman-formalwear.jpg?height=400&width=400" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

