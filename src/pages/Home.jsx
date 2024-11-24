import Hero from "../sections/Hero"
import Block from "../components/Block"
import Intro from "../sections/Intro"
import Projects from "../sections/Projects"
import Experience from "../sections/Experience"
import Education from "../sections/Education"
import Contact from "../sections/Contact"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
        <Hero />
        <Block />
        <Intro />
        <Block />
        <Education />
        <Block />
        <Projects />
        <Block />
        <Experience />
        <Block />
        <Contact />
    </div>
  )
}
