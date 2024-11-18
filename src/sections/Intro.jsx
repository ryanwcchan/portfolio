export default function Intro() {

  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Tailwind",
  ]

  return (
    <div className="flex flex-col space-y-4 max-w-6xl mb-10 h-min-screen">
        <h1 className="text-4xl text-blue-500 py-6">My <span className="underline decoration-red-500 font-semibold">Skills</span></h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {skills.map((skill, index) => (
                <div key={index} className="bg-blue-500 p-2 rounded-lg text-center font-semibold">
                {skill}
                </div>
            ))}
        </div>
        <div className="flex flex-col gap-6 md:flex-row justify-center items-center py-6">
            <div className="w-full md:w-1/2 md:max-w-[45%] lg:max-w-[40%]">
                <img
                    className="w-full h-auto max-h-[400px] md:max-h-[450px] lg:max-h-[500px] min-h-[250px] object-cover border-4 border-red-500 rounded-xl object-center"
                    src="profile-picture.jpeg"
                    alt="Profile Picture"
                />
            </div>
            <div className="flex flex-col justify-center space-y-6 md:w-1/2 md:max-w-[55%] lg:max-w-[60%]">
                <h1 className="text-3xl font-semibold">I love building stuff</h1>
                <p className="w-full my-2 text-md md:text-lg">
                Ever since I was a kid, I have always been passionate about building and creating things. From piecing together my own Lego creations to assembling computers with my dad and creating my first game, the joy of creation has always driven me forward.
                </p>
                <p className="w-full my-2 text-md md:text-lg">
                Now, as a software developer, I bring that same curiosity and passion to crafting innovative solutions through clean, functional code. Whether it's building user-friendly interfaces or solving challenging problems, I thrive on turning ideas into reality.
                </p>
            </div>
        </div>
    </div>
  )
}
