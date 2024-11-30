export default function About() {
  return (
    <div className='min-h-screen h-full w-full'>
      <h1 className='text-5xl font-semibold mb-4'>About Me</h1>
      <h2 className="text-2xl font-semibold my-4">Hi, I'm Ryan!</h2>
      <div className="flex flex-col gap-6">
        <p className="text-lg">
        I am a recent graduate, currently working part-time as an Inventory Supervisor, and I am actively seeking opportunities to start my career in software development. 
        </p>
        <p className="text-lg">My passion for software development ignited during my internship at Facedrive, where I had the opportunity to contribute to the development of a website and mobile application. This hands-on experience gave me invaluable insight into the field and strengthened my desire to pursue a career in tech.</p>
        <p className="text-lg">Recognizing my enthusiasm for development, the CTO at Facedrive recommended I take a React Native course, where I deepened my understanding of software development concepts and honed my technical skills. This experience not only solidified my interest but also laid the foundation for my journey as a developer.</p>
        <p className="text-lg">To strengthen my skills, I have been actively engaging with The Odin Project, a comprehensive curriculum for aspiring web developers.
        Through this program, I have enhanced my proficiency in HTML, CSS, JavaScript, and React, and I have completed several projects that demonstrate my ability to build functional, responsive, and user-friendly applications.
        </p>
        <p className="text-lg">My academic background, combined with hands-on learning and practical experience, has solidified my understanding of front-end and full-stack development principles. I am eager to bring my skills, enthusiasm, and dedication to a team where I can contribute to impactful projects and grow as a software developer.</p>
      </div>
      <div className="my-6">
        <p className="text-lg"><span className="font-semibold">Email:</span> ryanwcchan@gmail.com</p>
        <p className="text-lg"><span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/ryanwcchan">ryanwcchan</a></p>
        <p className="text-lg"><span className="font-semibold">GitHub:</span> <a href="https://github.com/ryanwcchan">ryanwcchan</a></p>
      </div>
      <div className='my-6'>
        <h2 className='text-3xl font-bold mb-4 text-blue-500'>My Education</h2>
        <p className='text-lg mb-4'>
          I hold a Bachelor's degree in Information Technology from Ontario Tech University. 
          Throughout my studies, I had the opportunity to work on diverse and challenging projects 
          across multiple disciplines. Here are some highlights:
        </p>

        {/* Course 1 */}
        <div className='mb-6'>
          <h3 className='text-2xl font-semibold'>Database Systems – INFR 3810</h3>
          <ul className='list-disc list-inside text-lg'>
            <li>
              Designed Entity Relationship Diagrams (ERD) and wrote SQL queries for database modeling and data filtration.
            </li>
            <li>
              Developed a Flask app for storing class survey data in MySQL, improving data accessibility for analysis.
            </li>
            <li>
              Collaborated on a medicine shopping website using HTML, CSS, Bootstrap, Heroku, Python, PostgreSQL, and Django. 
              Implemented user authentication, product categorization, and transaction tracking, enabling seamless sales tracking.
            </li>
          </ul>
        </div>

        {/* Course 2 */}
        <div className='mb-6'>
          <h3 className='text-2xl font-semibold'>Cloud Services – INFR 2670</h3>
          <ul className='list-disc list-inside text-lg'>
            <li>
              Deployed Apache web servers within Docker containers on Ubuntu using OpenStack and Azure environments.
            </li>
            <li>
              Configured multi-VM deployments on Azure with NGINX load balancing for mock web traffic management scenarios.
            </li>
            <li>
              Simulated cloud migration by transferring containerized applications from LXD to AWS.
            </li>
          </ul>
        </div>

        {/* Course 3 */}
        <div className='mb-6'>
          <h3 className='text-2xl font-semibold'>Advanced Business Intelligence – BUSI 2500</h3>
          <ul className='list-disc list-inside text-lg'>
            <li>
              Analyzed Kaggle datasets (F1 racing, Chernobyl) and created analytical portfolios using Power BI, Tableau, and Google Data Studio.
            </li>
            <li>
              Identified key trends and insights, delivering presentations on the impacts of performance metrics and historical events.
            </li>
          </ul>
        </div>

        {/* Capstone Project */}
        <div className='mb-6'>
          <h3 className='text-2xl font-semibold'>Capstone Study Project</h3>
          <ul className='list-disc list-inside text-lg'>
            <li>
              Built a Raspberry Pi-powered camera system for recording volleyball games, utilizing off-the-shelf components.
            </li>
            <li>
              Designed a smartphone-controlled interface using HTML, CSS, and JavaScript, offering a cost-effective solution for 
              capturing game footage.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
