
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <h1 className="font-semibold text-5xl m-4">Hi, I'm Ryan, a 
            <br /><span className="text-yellow-400">Junior Web Developer</span>
        </h1>
        <div className="flex gap-6 m-4">
            <i className="fa-brands fa-github text-4xl hover:text-yellow-400"></i>
            <i className="fa-brands fa-linkedin-in text-4xl hover:text-yellow-400"></i>
        </div>
    </div>
  )
}
