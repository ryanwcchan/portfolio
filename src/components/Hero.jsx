import SocialMediaIcon from "./SocialMediaIcon"

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-6xl my-auto p-6 md:p-8 lg:p-10 min-h-screen">
        <div className="w-full space-y-5">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl md:text-5xl lg:text-6x font-bold"><span className="text-red-500">Hi, I'm Ryan</span> | <span className="text-blue-400">Software Developer</span></h1>
            </div>
            <div className="py-4 w-full flex justify-center space-x-4">
                <SocialMediaIcon icon="github" href="https://github.com/ryanwcchan" />
                <SocialMediaIcon icon="linkedin-in" href="https://linkedin.com/in/ryanwcchan" />
            </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
}
