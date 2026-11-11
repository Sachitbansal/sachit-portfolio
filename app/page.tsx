import { Credentials, Journey } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
import { SmoothScroll } from "@/components/motion"
import { Nav } from "@/components/Nav"
import { Process } from "@/components/Process"
import { Services } from "@/components/Services"
import { Thinking } from "@/components/Thinking"
import { Toolkit } from "@/components/Toolkit"
import { Work } from "@/components/Work"

// Order follows the v3 brief: hero + credibility, why me, services, projects, journey,
// credentials, how I work, contact. The Toolkit scroll scene stays between services and projects.
export default function Page() {
  return (
    <main className="overflow-x-clip">
      <SmoothScroll />
      <Nav />
      <Hero />
      <Thinking />
      <Services />
      <Toolkit />
      <Work />
      <Journey />
      <Credentials />
      <Process />
      <Contact />
    </main>
  )
}
