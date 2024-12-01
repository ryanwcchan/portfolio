import Block from "../components/Block";

export default function About() {
  return (
    <div className="min-h-screen h-full w-full max-w-6xl self-center">
      <div className="flex items-center justify-center flex-col">
        <img
          src="profile-picture.jpeg"
          alt="Profile Picture"
          className="w-48 h-48 rounded-full mb-4 object-cover border-4 border-blue-500"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Ryan!</h2>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
            <p className="text-xl">
              <span className="font-semibold">Email:</span> ryanwcchan@gmail.com
            </p>
            <p className="text-xl">
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a href="https://linkedin.com/in/ryanwcchan">ryanwcchan</a>
            </p>
            <p className="text-xl">
              <span className="font-semibold">GitHub:</span>{" "}
              <a href="https://github.com/ryanwcchan">ryanwcchan</a>
            </p>
          </div>
        </div>
      </div>
      <Block />
      <div className="px-6 py-12 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
        {/* About Me */}
        <section className="space-y-8">
          <h2
            className="text-3xl text-blue-500 underline 
          decoration-green-500 font-bold"
          >
            About Me
          </h2>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            Growing up, I have always loved building and creating things. From
            piecing together my own Lego creations to assembling computers with
            my dad and rendering my first 3D animation with Blender, I loved to
            learn and create things using technology. I played a lot of flash
            games when I was a kid, and I started learning Java and C# because
            of I wanted to create my own games. In high school, I immersed
            myself in computer science and computer technology classes, where I
            built basic games using Java, and PC building further cementing my
            love for technology.
          </p>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            When it was time to choose a career path in university, I considered
            pursuing game development but ultimately decided to major in
            Information Technology. While I was uncertain about which specific
            career to pursue, I knew that my passion for technology would guide
            me. This decision opened doors to new opportunities and broadened my
            skill set beyond game development.
          </p>
          <p className="text-gray-700 dark:text-white leading-relaxed">
            Currently, I’m pursuing a career as a software developer, with a
            focus on web development. I dedicate my free time to learning and
            refining my development skills through both formal education and
            self-study.
          </p>
        </section>

        <section className="mt-12">
          <h2
            className="text-3xl text-blue-500 underline 
          decoration-green-500 font-bold pb-8"
          >
            Education Highlights
          </h2>
          <p className="mb-4">
            During my time at Ontario Tech University, I gained hands-on
            experience in database design, cloud deployment, and business
            intelligence analysis. Highlights include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white">
            <li>
              Developed an autobiography website using HTML, CSS, JavaScript
              (jQuery & AngularJS), MongoDB, and PHP for form validation. Users
              can create and update blog posts through an admin interface.
            </li>
            <li>
              Collaborated on a medicine shopping website using HTML, CSS,
              Bootstrap, Python, PostgreSQL, and Django, with user
              authentication, product categorization, and transaction tracking.
            </li>
            <li>
              Developed a Flask app for class survey analysis in MySQL (Database
              Systems).
            </li>
            <li>
              Deployed Apache web servers in Docker containers on Ubuntu, using
              OpenStack and Azure. Configured multi-VM deployments with NGINX
              load balancing and simulated cloud migration from LXD to AWS.
              Managed EC2 instances on AWS (Cloud Services).
            </li>
            <li>
              Created analytical dashboards using Tableau and Power BI to
              analyze Kaggle datasets (F1 racing, Chernobyl) and presented
              insights on performance metrics and historical events (Business
              Intelligence).
            </li>
            <li>
              Built a Raspberry Pi-powered camera system for recording
              volleyball games with a smartphone-controlled interface using
              HTML, CSS, and JavaScript (Capstone Project).
            </li>
          </ul>
        </section>

        {/* Fun Facts */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-blue-500">Fun Facts</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-white">
            <li>
              My favourite courses in university were my Web Programming,
              Database Systems, and Cloud services classes.
            </li>
            <li>I love hands on experience and learning by doing.</li>
            <li>Parkour and martial arts tricking enthusiest.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
