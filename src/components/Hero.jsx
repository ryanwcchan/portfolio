import SocialMediaIcon from "./SocialMediaIcon"

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
        <div>
            <h1 className="font-semibold text-5xl leading-tight">Hi, I'm Ryan, a
                <br /><span className="text-blue-400">Junior Web Developer</span>
            </h1>
            <div className="py-4 w-full flex justify-start">
                <SocialMediaIcon icon="github" href="https://github.com/ryanwcchan" />
                <SocialMediaIcon icon="linkedin-in" href="https://linkedin.com/in/ryanwcchan" />
            </div>
            <p className="max-w-lg my-2">
                From building my first computer to writing my first lines of code, I've always been driven by a love for technology and creativity.
                As I continue to grow, I’m not just learning to build better projects—I’m discovering who I want to become.
            </p>
        </div>
    </div>
  )
}
