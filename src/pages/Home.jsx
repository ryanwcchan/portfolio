import Hero from "../components/Hero"
import Intro from "../components/Intro"
import Block from "../components/Block"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
        <Hero />
        <Block />
        <Intro />
    </div>
  )
}
