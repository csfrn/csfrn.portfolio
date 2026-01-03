import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypingAnimation } from "@/components/typing-animation"
import { CursorEffect } from "@/components/cursor-effect"

const projects = [
  {
    title: "Geospatial Data Quality Monitor",
    description: "Geospatial data quality pipeline designed to ensure high-accuracy mapping datasets",
    tech: "Python, SQL, Folium and Streamlit",
    github: "https://github.com/csfrn/cloud-data-engineering-portfolio/tree/main/data_engineering/geospatial_data_quality_pipeline",
  },
  {
    title: "Real-Time Fraud Detection",
    description: "AWS-based real-time fraud detection pipeline using Apache Kafka",
    tech: "Apache Kafka, Docker and Python", 
    github: "https://github.com/csfrn/cloud-data-engineering-portfolio/tree/main/data_engineering/real_time_fraud_detections",
  },
  {
    title: "Cloud Data Warehouse for Music Analytics",
    description: "Cloud-based data warehouse using AWS Redshift",
    tech: "AWS Redshift, S3 and Python",
    github: "https://github.com/csfrn/cloud-data-engineering-portfolio/tree/main/data_engineering/cloud_data_warehouse_for_music_analytics",
  },
]

const skills = [
  {
    name: "Databases and SQL for Data Science",
    image: "https://images.credly.com/size/680x680/images/f2573aac-d21c-483d-acda-afaa366b4f51/image.png",
    alt: "DB and SQL for Data Science",
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
  },
]

const experience = [
  {
    role: "Security Platform Analyst",
    company: "Vercel",
    period: "2025 - Present",
    description:
      "Build and operate automated security workflows to detect, investigate, and stop phishing, malware, and platform abuse at scale.",
  },
  {
    role: "Operations Investigations Specialist",
    company: "Airbnb",
    period: "2025",
    description:
      "Designed investigation workflows and internal tools that supported a global product launch, improving data accuracy, onboarding speed, and cross-team execution.",
  },
  {
    role: "Senior Quality Assurance Analyst",
    company: "Cruise",
    period: "2023 - 2025",
    description:
      "Built automated QA systems and analyzed geospatial data to surface critical issues early, improving autonomous navigation safety and reliability.",
  },
]

const education = [
  {
    degree: "B.S. Cloud & Network Engineering — AWS Specialization",
    institution: "Western Governors University",
    period: "2023 - Present",
    description: "Focus on cloud-native systems, networking, security, and automation. Received Excellence Award in Systems Thinking.",
  },
]

const navLinks = [
  { href: "#intro", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <CursorEffect />

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground bg-background/95 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
          <Link href="#intro" className="flex items-center" aria-label="Go to intro">
            <TypingAnimation />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium hover:opacity-60 transition-opacity"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-24 max-w-4xl">
        {/* Intro */}
        <section id="intro" className="min-h-[70vh] flex flex-col justify-center py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-12 leading-tight">
            Welcome, I&apos;m Lucas Furlan
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full max-w-xs aspect-square rounded-lg overflow-hidden flex-shrink-0 bg-muted">
              <Image
                src="/professional-portrait.png"
                alt="Lucas Furlan"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <p className="text-lg md:text-xl leading-relaxed opacity-80">
                I’m an IT and cloud operations professional with experience supporting and improving production systems at{" "}
                <strong>Vercel</strong>, <strong>Airbnb</strong>, <strong>Cruise</strong>, <strong>Meta</strong>, and{" "}
                <strong>Amazon</strong>, working across infrastructure, automation, and operations to keep systems reliable
                and teams moving fast.
              </p>

              <p className="text-lg md:text-xl leading-relaxed opacity-80 mt-4">
                Outside work, I keep learning and building side projects and I make time to unplug, travel, and enjoy life
                off-screen.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 border-t border-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Projects</h2>

          <div className="space-y-12">
            {projects.map((p) => (
              <article key={p.github}>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-base md:text-lg mb-4 leading-relaxed opacity-80">{p.description}</p>
                <p className="text-base md:text-lg mb-4 leading-relaxed opacity-80">{p.tech}</p>

                <a
                  href={p.github}
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

        {/* Certifications */}
        <section id="Certifications" className="py-20 border-t border-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Certifications</h2>

          <div className="flex flex-wrap gap-8">
            {skills.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={s.image || "/placeholder.svg"}
                    alt={s.alt}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <p className="text-sm font-medium text-center">{s.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 border-t border-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Experience</h2>

          <div className="space-y-12">
            {experience.map((job) => (
              <article key={`${job.company}-${job.role}`}>
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

        {/* Education */}
        <section id="education" className="py-20 border-t border-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Education</h2>

          <div className="space-y-12">
            {education.map((school) => (
              <article key={`${school.institution}-${school.degree}`}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">{school.degree}</h3>
                  <span
                    className="text-sm md:text-base font-medium opacity-60 tracking-wide"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    {school.period}
                  </span>
                </div>

                <p className="text-base md:text-lg font-medium mb-3 opacity-70">{school.institution}</p>
                <p className="text-base md:text-lg leading-relaxed opacity-80">{school.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-foreground">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Contact</h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">Get in touch.</p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/csfrn/furlanflucas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/furlanflucas/"
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
          <p>© 2025 CSFRN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}