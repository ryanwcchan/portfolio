import Hero from "../sections/Hero"
import Block from "../components/Block"
import Intro from "../sections/Intro"
import Projects from "../sections/Projects"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
        <Hero />
        <Block />
        <Intro />
        <Block />
        <Projects />
    </div>
  )
}
