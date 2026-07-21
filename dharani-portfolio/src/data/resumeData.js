// All content below is sourced from Dharani M's resume.
// Update the placeholder URLs (profile links, live demo links, resume PDF)
// with your real links once available.

export const profile = {
  name: 'Dharani M',
  titles: [
    'Robotics & Automation Engineer',
    'Full Stack Java Developer',
    'Web Developer',
  ],
  location: 'Ooty, Tamil Nadu, India',
  email: 'dharanimoorthy51@gmail.com',
  phone: '+91-9159231445',
  summary:
    "Engineering graduate with Honours in Robotics and Automation Engineering (CGPA 8.5/10). I build reliable software with Java, Python, and MySQL, and enjoy shaping that logic into clean, responsive web interfaces. My background bridges hardware and software — from mechanical testing and Arduino prototyping to full-stack web applications — giving me a practical, systems-level approach to problem solving. I completed a Java Development Internship and have hands-on project experience across the stack. I'm looking for an entry-level Software Developer role where I can keep building, keep learning, and contribute from day one.",
  highlights: [
    {
      label: 'Robotics & Automation',
      detail: 'Honours degree grounded in mechanical systems, automation, and applied engineering.',
    },
    {
      label: 'Web Development',
      detail: 'Builds responsive, accessible interfaces with HTML5, CSS3, JavaScript, and React.',
    },
    {
      label: 'Java Development',
      detail: 'Completed a dedicated internship in Core Java, OOP, and exception handling.',
    },
    {
      label: 'Problem Solving',
      detail: 'Strong analytical foundation from DBMS, SQL, and Data Structures & Algorithms.',
    },
    {
      label: 'Teamwork',
      detail: 'Collaborated across mechanical and software workflows in academic and internship settings.',
    },
    {
      label: 'Innovation',
      detail: 'Combines hardware prototyping (3D printing, Arduino) with software builds.',
    },
  ],
  socials: {
    github: 'https://github.com/', // TODO: add real GitHub URL
    linkedin: 'https://linkedin.com/', // TODO: add real LinkedIn URL
    leetcode: 'https://leetcode.com/', // TODO: add real LeetCode URL
    email: 'mailto:dharanimoorthy51@gmail.com',
  },
  resumeFile: '/resume.pdf', // place your resume PDF in the /public folder with this name
}

export const skills = {
  Programming: [
    { name: 'Java', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 88 },
    { name: 'JavaScript', level: 78 },
    { name: 'SQL', level: 82 },
  ],
  Frameworks: [
    { name: 'Spring Boot', level: 60 },
    { name: 'React', level: 70 },
    { name: 'Vite', level: 70 },
  ],
  'Web Development': [
    { name: 'Responsive Web Design', level: 88 },
    { name: 'REST APIs', level: 72 },
    { name: 'UI Development', level: 85 },
    { name: 'Frontend Development', level: 85 },
    { name: 'Backend Development', level: 68 },
  ],
  Tools: [
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 82 },
    { name: 'IntelliJ IDEA', level: 78 },
    { name: 'VS Code', level: 88 },
    { name: 'Arduino IDE', level: 70 },
    { name: 'Fusion 360', level: 65 },
  ],
  Database: [{ name: 'MySQL', level: 80 }],
}

export const experience = [
  {
    role: 'Java Development Intern',
    org: 'Remote',
    duration: '3 Months',
    period: '',
    points: [
      'Completed training in Core Java, Object-Oriented Programming (OOP), and Exception Handling.',
      'Developed Java-based applications and gained hands-on experience in debugging and problem-solving.',
    ],
  },
  {
    role: '3D Printing & Arduino Development',
    org: 'Offline',
    duration: '15 Days',
    period: 'Jul 2024 – Oct 2024',
    points: [
      'Conducted mechanical testing on 3D-printed PLA samples with different infill patterns to evaluate and improve structural performance.',
      'Designed and fabricated prototypes using Arduino and 3D printing technologies, optimizing print parameters to enhance strength and reduce manufacturing defects.',
    ],
  },
]

export const projects = [
  {
    title: 'Event Management System',
    technologies: ['Java', 'MySQL', 'HTML', 'CSS'],
    description:
      'A web-based Event Management System for managing event registrations, bookings, and scheduling from a single dashboard.',
    features: [
      'User authentication and role-based access',
      'Database-driven booking and scheduling workflow',
      'Streamlined event management using MySQL',
    ],
    github: 'https://github.com/', // TODO: link real repo
    demo: '#', // TODO: link live demo
    image: null,
  },
  {
    title: 'Degree of Freedom (DOF) Calculator',
    technologies: ['Python', 'Tkinter'],
    description:
      'A GUI-based desktop application that calculates Degree of Freedom using the Gibbs Phase Rule, built for mechanical/robotics use cases.',
    features: [
      'Interactive Tkinter interface',
      'Input validation for accurate results',
      'Instant calculation of system degrees of freedom',
    ],
    github: 'https://github.com/', // TODO: link real repo
    demo: '#',
    image: null,
  },
]

export const education = [
  {
    institution: 'Dhaanish Ahmed Institute of Technology',
    degree: 'Bachelor of Engineering, Robotics and Automation (Honours)',
    period: 'Nov 2022 – May 2026',
    detail: 'CGPA: 8.5 / 10',
  },
  {
    institution: 'C.S.I Gell Memorial Girls Higher Secondary School',
    degree: 'Higher Secondary Education',
    period: 'Jun 2019 – May 2022',
    detail: '71%',
  },
  {
    institution: 'C.S.I Gell Memorial Girls Higher Secondary School',
    degree: 'Matriculation / Secondary Education',
    period: 'Jun 2019 – May 2022',
    detail: '70%',
  },
]

export const certifications = [
  {
    title: 'Java Programming Certification',
    issuer: 'Infosys Springboard',
  },
  {
    title: 'Python Programming Certification',
    issuer: 'Certifying Body', // TODO: confirm issuing body
  },
  {
    title: 'Fusion 360 Certification',
    issuer: 'Autodesk', // TODO: confirm issuing body
  },
]

export const achievements = [
  {
    title: 'Honours Degree',
    detail: 'Pursuing B.E. in Robotics and Automation Engineering with Honours, CGPA 8.5/10.',
  },
  {
    title: 'Applied Engineering Project',
    detail: 'Independently designed and fabricated 3D-printed and Arduino-based prototypes with measurable strength improvements.',
  },
  {
    title: 'Multi-domain Certification',
    detail: 'Certified across Java, Python, and Fusion 360 — spanning software and mechanical design tools.',
  },
]
