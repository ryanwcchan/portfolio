import SocialMediaIcon from "./SocialMediaIcon"

export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto p-6 md:p-8 lg:p-10">
        <div className="w-full space-y-5">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl md:text-3xl">Hi, I'm Ryan, a</h1>
                <h1 className="font-semibold text-4xl md:text-5xl lg:text-6x leading-tight text-blue-400">Junior Web Developer</h1>
            </div>
            <div className="py-4 w-full flex justify-start space-x-4">
                <SocialMediaIcon icon="github" href="https://github.com/ryanwcchan" />
                <SocialMediaIcon icon="linkedin-in" href="https://linkedin.com/in/ryanwcchan" />
            </div>
            <p className="w-full my-2 text-lg md:text-xl">
                From building my first computer to writing my first lines of code, I've always been driven by a love for technology and creativity.
                As I continue to grow, I’m not just learning to build better projects—I’m discovering who I want to become.
            </p>
        </div>
    </div>
  )
}
