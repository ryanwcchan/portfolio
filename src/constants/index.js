export const pages = [
    { location: '/', icon: 'fa-solid fa-house' },
    { location: 'about', icon: 'fa-solid fa-user' },
    { location: 'projects', icon: 'fa-solid fa-layer-group' },
    { location: 'work', icon: 'fa-solid fa-briefcase' },
    { location: 'contact', icon: 'fa-solid fa-people-arrows' },
];

export const myProjects = [
    {
        id: 1,
        title: "Shopping Cart",
        description: "A simple shopping cart application built with React and React Router",
        image: "/images/shopping-cart.png",
        techStack: ["React", "React Router", "Vanilla CSS"],
        githubLink: "https://github.com/your-github-username/shopping-cart",
        demoLink: "https://your-demo-link.com/shopping-cart",
    }, 
    {
        id: 2,
        title: "Weather App",
        description: "A weather app built with React and OpenWeather API",
        image: "/images/weather-app.png",
        techStack: ["React", "OpenWeather API", "CSS"],
        githubLink: "https://github.com/your-github-username/weather-app",
        demoLink: "https://your-demo-link.com/weather-app",
    }
]

export const education = 
    {
        school: "Ontario Tech University",
        degree: "Bachelor of Information Technology",
        major: "Technology Management",
        location: "Oshawa, ON",
        duration: "Sept. 2019 - Jan. 2024",
    }

export const experience = [
    {
        id: 1,
        company: "Upwork",
        title: "Freelance Web Developer",
        duration: "2024 - Present",
        bullets: [
            "Provided web development services for clients",
            "Collaborated with clients to develop custom web solutions",
        ]
    },
    {
        id: 2,
        company: "Western Inventory Service",
        title: "Inventory Supervisor",
        duration: "February 2024 -Present",
        bullets: [
            "Managed inventory levels and ensured accurate tracking",
            "Provided training and guidance to employees",
        ]
    },
    {
        id: 3,
        company: "Western Inventory Service",
        title: "Inventory Associate",
        duration: "April 2022 - September 2022",
        bullets: [
            "Managed and maintained inventory in a warehouse",
            "Prepared and shipped orders",
            "Provided customer service",
        ]
    },
    {
        id: 4,
        company: "Facedrive Inc.",
        title: "Frontend Developer & Marketing Intern",
        duration: "April 2021 - August 2021",
        bullets: [
            "Developed a web application using React and Node.js",
            "Implemented a new feature that improved user experience",
            "Collaborated with a team of engineers to launch a new product",
        ]
    },
    {
        id: 5,
        company: "Kumon",
        title: "Tutor & Data Entry",
        duration: "May 2017 - September 2019",
        bullets: [
            "Tutored students in math and reading",
            "Provided data entry for a company",
        ]
    }
]

export const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Angular",
    "React Native",
  ]

export const backendSkills = [
    "Python",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ]

export const tools = [
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Linux",
    "Webpack",
    // "EJS",
  ]