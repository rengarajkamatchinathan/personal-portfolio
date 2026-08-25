import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { About } from "@/components/about"
import { ProjectsGrid } from "@/components/projects-grid"
import { Experience } from "@/components/experience"
import { Capabilities } from "@/components/capabilities"
import { Certifications } from "@/components/certifications"
import { BlogSection } from "@/components/blog-section"
import { Education } from "@/components/education"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { generateWebsiteStructuredData, generatePersonStructuredData } from "@/lib/structured-data"

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rengaraj.vercel.app'
  const websiteStructuredData = generateWebsiteStructuredData(baseUrl)
  const personStructuredData = generatePersonStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <main className="relative min-h-screen overflow-hidden scanlines">
        <div aria-hidden="true" className="tech-grid pointer-events-none absolute inset-x-0 top-0 h-[38rem] opacity-60" />
        <CursorGlow />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <About />
          <ProjectsGrid />
          <Experience />
          <Capabilities />
          <Certifications />
          <BlogSection />
          <Education />
          <Footer />
        </div>
      </main>
    </>
  )
}
