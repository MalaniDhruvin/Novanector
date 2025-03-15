import { Briefcase, GraduationCap, Award } from "lucide-react"
import Footer from "@/components/footer"

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description:
      "Leading the development of web applications for enterprise clients, managing a team of developers, and implementing best practices for code quality and performance.",
    responsibilities: [
      "Lead a team of 5 developers on multiple client projects",
      "Architect and implement scalable web applications using React and Next.js",
      "Collaborate with designers and product managers to deliver high-quality products",
      "Mentor junior developers and conduct code reviews",
      "Implement CI/CD pipelines and DevOps best practices",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2017 - 2020",
    description:
      "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to deliver high-quality products.",
    responsibilities: [
      "Developed and maintained web applications using React, Node.js, and MongoDB",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Optimized application performance and improved load times by 40%",
      "Integrated third-party APIs and services",
      "Participated in agile development processes",
    ],
  },
  {
    title: "Junior Developer",
    company: "WebCraft Studios",
    period: "2015 - 2017",
    description:
      "Assisted in the development of websites and web applications. Gained experience in HTML, CSS, JavaScript, and PHP.",
    responsibilities: [
      "Developed and maintained client websites using HTML, CSS, and JavaScript",
      "Assisted senior developers with larger projects",
      "Fixed bugs and implemented small features",
      "Created and maintained documentation",
      "Participated in client meetings and presentations",
    ],
  },
]

const education = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2013 - 2015",
    description: "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
    courses: [
      "Advanced Web Development",
      "Software Architecture",
      "Database Systems",
      "Machine Learning",
      "User Experience Design",
    ],
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    period: "2009 - 2013",
    description: "Focused on Programming and Database Management. Participated in various coding competitions.",
    courses: [
      "Introduction to Programming",
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Web Development Fundamentals",
      "Database Management",
    ],
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
  {
    title: "Outstanding Team Leader",
    organization: "Company Recognition Program",
    year: "2021",
    description: "Recognized for exceptional leadership and team management skills.",
  },
]

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Page Header */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience & Qualifications</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team brings years of experience and expertise to every project we undertake.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <Briefcase className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="mb-12 border-l-4 border-primary/30 pl-6 hover:border-primary transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-primary text-lg">{exp.company}</p>
                    </div>
                    <p className="text-muted-foreground mt-2 md:mt-0 md:text-right">{exp.period}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-12 border-l-4 border-primary/30 pl-6 hover:border-primary transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{edu.degree}</h3>
                      <p className="text-primary text-lg">{edu.institution}</p>
                    </div>
                    <p className="text-muted-foreground mt-2 md:mt-0 md:text-right">{edu.period}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Courses:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {edu.courses.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Awards & Recognition</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-primary mb-1">{award.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">{award.year}</p>
                  <p className="text-muted-foreground">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Skills</h3>

                  {[
                    { name: "JavaScript/TypeScript", level: 95 },
                    { name: "React & Next.js", level: 90 },
                    { name: "HTML & CSS", level: 95 },
                    { name: "Node.js", level: 85 },
                    { name: "Database Management", level: 80 },
                  ].map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Soft Skills</h3>

                  {[
                    { name: "Project Management", level: 90 },
                    { name: "Team Leadership", level: 85 },
                    { name: "Communication", level: 95 },
                    { name: "Problem Solving", level: 90 },
                    { name: "Time Management", level: 85 },
                  ].map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
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

