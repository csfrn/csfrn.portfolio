import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypingAnimation } from "@/components/typing-animation"
import { CursorEffect } from "@/components/cursor-effect"

export default function Home() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A modern web application built with Next.js and TypeScript",
      github: "https://github.com/username/project-alpha",
    },
    {
      title: "Project Beta",
      description: "Full-stack solution with real-time data synchronization",
      github: "https://github.com/username/project-beta",
    },
    {
      title: "Project Gamma",
      description: "Open-source tool for developer productivity",
      github: "https://github.com/username/project-gamma",
    },
  ]

  const skills = [
     {
      name: "Databases and SQL for Data Science",
      image: "https://images.credly.com/size/680x680/images/f2573aac-d21c-483d-acda-afaa366b4f51/image.png",
      alt: "Databases and SQL for Data Science",
    },
    {
      name: "AWS Cloud Practitioner",
      image: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      alt: "AWS Certified Cloud Practitioner",
    },
    {
      name: "CompTIA A+",
      image: "https://images.credly.com/size/680x680/images/f6d62c5d-1e1d-4de6-92ee-8dc8c80b1c7b/blob",
      alt: "CompTIA A+ Certification",
    },
    {
      name: "CompTIA Security+",
      image: "https://images.credly.com/size/680x680/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
      alt: "CompTIA Security+ Certification",
    }
  ]

  const experience = [
    {
      role: "Senior Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading frontend architecture and mentoring junior developers",
    },
    {
      role: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: "Built and shipped multiple products from conception to launch",
    },
    {
      role: "Software Engineer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed web applications for diverse client base",
    },
  ]

  return (
    <div className="min-h-screen">
      <CursorEffect />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground bg-background/95 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
          <Link href="#intro" className="flex items-center">
            <TypingAnimation />
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link href="#intro" className="text-sm font-medium hover:opacity-60 transition-opacity">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:opacity-60 transition-opacity">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:opacity-60 transition-opacity">
                Skills
              </Link>
              <Link href="#experience" className="text-sm font-medium hover:opacity-60 transition-opacity">
                Experience
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:opacity-60 transition-opacity">
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-24 max-w-4xl">
        <section id="intro" className="min-h-[70vh] flex flex-col justify-center py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-12 leading-tight">Welcome, I'm Lucas Furlan</h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full max-w-xs aspect-square bg-muted rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/professional-portrait.png"
                alt="Lucas Furlan"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg md:text-xl leading-relaxed opacity-80">
                I'm a passionate developer focused on creating elegant solutions to complex problems. With expertise in
                modern web technologies and cloud infrastructure, I build scalable applications that make a difference.
              </p>
              <p className="text-lg md:text-xl leading-relaxed opacity-80 mt-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, and
                continuously learning to stay at the forefront of software development.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <article key={index} className="group">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-base md:text-lg mb-4 leading-relaxed opacity-80">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  View on GitHub →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20 border-t border-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Skills</h2>
          <div className="flex flex-wrap gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={skill.image || "/placeholder.svg"}
                    alt={skill.alt}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Experience</h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <article key={index}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">{job.role}</h3>
                  <span
                    className="text-sm md:text-base font-medium opacity-60 tracking-wide"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    {job.period}
                  </span>
                </div>
                <p className="text-base md:text-lg font-medium mb-3 opacity-70">{job.company}</p>
                <p className="text-base md:text-lg leading-relaxed opacity-80">{job.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Contact</h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">Interested in working together? Get in touch.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:lucas@example.com"
                className="inline-flex items-center gap-2 px-5 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Email Me
              </a>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground py-8 mt-20">
        <div className="container mx-auto px-6 max-w-4xl text-center text-sm opacity-60">
          <p>© 2025 Lucas Furlan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
