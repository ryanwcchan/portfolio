
export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full pl-10 bg-gradient-to-tr from-slate-950 to-slate-800 text-white">
        <h1 className="font-semibold text-5xl">Hi, I'm Ryan, a
            <br /><span className="text-blue-400">Junior Web Developer</span>
        </h1>
        <div className="flex gap-6 py-4">
            <i className="fa-brands fa-github text-4xl hover:text-blue-400 cursor-pointer"></i>
            <i className="fa-brands fa-linkedin-in text-4xl hover:text-blue-400 cursor-pointer"></i>
        </div>
        <p className="max-w-lg my-2">
            From building my first computer to writing my first lines of code, I've always been driven by a love for technology and creativity. 
            As I continue to grow, I’m not just learning to build better projects—I’m discovering who I want to become.
        </p>
    </div>
  )
}
