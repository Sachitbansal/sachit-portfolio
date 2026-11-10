import { About, Record } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"
import { SmoothScroll } from "@/components/motion"
import { Nav } from "@/components/Nav"
import { Process } from "@/components/Process"
import { Services } from "@/components/Services"
import { Toolkit } from "@/components/Toolkit"
import { Work } from "@/components/Work"

export default function Page() {
  return (
    <main className="overflow-x-clip">
      <SmoothScroll />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Toolkit />
      <Work />
      <Process />
      <Record />
      <Contact />
    </main>
  )
}
