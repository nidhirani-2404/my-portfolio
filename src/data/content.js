/**
 * Single source of truth for every piece of copy on the site.
 * Edit here — the components read from this file and nowhere else.
 */

/**
 * Paste your Google Drive / Dropbox resume share link between the quotes.
 * While this is empty the Resume button renders disabled instead of linking nowhere.
 * Drive tip: use the "Anyone with the link" share URL.
 */
export const RESUME_URL = './resume.pdf'

export const profile = {
  name: 'Nidhi Rani',
  role: 'Software Engineer',
  tagline: 'Full-Stack Developer • LLM',
  badge: 'Software Engineer • Full-Stack + LLM',
  greeting: "Hi, I'm",
  intro:
    'I’m a recent B.Tech graduate from IIT (ISM) Dhanbad with hands-on experience in full-stack development and LLM-powered applications. I enjoy building practical software, solving challenging problems, and exploring how modern AI can be integrated into real-world products.',
  supporting: 'Building products. Solving problems. Learning continuously.',
  email: 'nidhirani2404@gmail.com',
  phone: '+91 9304956687',
  photo: './nidhi.jpg',
  photoAlt: 'Portrait of Nidhi Rani',
  stickerLabel: 'MERN + LLM Developer',
  noteLines: ['Build', 'Learn', 'Create', 'Repeat'],
}

export const links = {
  github: 'https://github.com/nidhirani-2404',
  linkedin: 'https://linkedin.com/in/nidhirani2404',
  leetcode: 'https://leetcode.com/u/nidhirani2404/',
  codechef: 'https://www.codechef.com/users/nidhirani2404',
  codeforces: 'https://codeforces.com/profile/nidhirani2404',
  naukri: 'https://www.naukri.com/',
  email: 'mailto:nidhirani2404@gmail.com',
  gmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=nidhirani2404@gmail.com',
  phone: 'tel:+919304956687',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/** Facts a recruiter should absorb in the first five seconds. */
export const heroChips = [
  { label: 'IIT (ISM) Dhanbad', color: 'bg-violet-soft' },
  { label: 'B.Tech Graduate, 2026', color: 'bg-mint' },
  { label: 'Software Engineering Intern', color: 'bg-sky' },
  { label: 'DSA Problems', color: 'bg-coral' },
]

export const about = {
  eyebrow: 'About',
  heading: 'Who I am',
  paragraphs: [
    'I’m Nidhi Rani, a recent B.Tech graduate in Electronics & Communication Engineering from IIT (ISM) Dhanbad. During my college journey, my interests gradually expanded from electronics into software engineering, full-stack development, and LLM-powered applications.',
    'Through internships and personal projects, I’ve worked with React, Node.js, Express.js, MongoDB, REST APIs, authentication, LLM APIs, LangChain, and LangGraph.',
    'I enjoy turning ideas into working applications, understanding how systems work, and continuously improving my problem-solving and development skills.',
  ],
  cards: [
    {
      icon: 'Layers',
      title: 'Full-Stack Builder',
      body: 'Building complete web applications across frontend, backend, APIs, authentication, and databases.',
      color: 'bg-violet-soft',
    },
    {
      icon: 'Sparkles',
      title: 'LLM Explorer',
      body: 'Building practical applications using LLM APIs, LangChain, LangGraph, and AI workflows.',
      color: 'bg-sun',
    },
    {
      icon: 'Binary',
      title: 'Problem Solver',
      body: 'Solved Data Structures & Algorithms problems while developing a strong foundation in problem solving.',
      color: 'bg-mint',
    },
    {
      icon: 'Compass',
      title: 'Curious Learner',
      body: 'Currently exploring LLM applications, AI agents, system design, cloud technologies, and scalable software architecture.',
      color: 'bg-coral',
    },
  ],
}

export const skillGroups = [
  {
    title: 'Languages',
    icon: 'Code2',
    color: 'bg-violet-soft',
    items: ['C++', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    icon: 'MonitorSmartphone',
    color: 'bg-sky',
    items: ['React.js', 'Redux', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    color: 'bg-mint',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
  },
  {
    title: 'Generative AI & LLMs',
    icon: 'Sparkles',
    color: 'bg-sun',
    items: ['Groq API', 'LLM Integration', 'LangChain', 'LangGraph'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    color: 'bg-coral',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Libraries & Cloud',
    icon: 'Cloud',
    color: 'bg-violet-soft',
    items: ['NumPy', 'Pandas', 'AWS Basics'],
  },
  {
    title: 'Developer Tools',
    icon: 'Wrench',
    color: 'bg-sky',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'Core Concepts',
    icon: 'Brain',
    color: 'bg-mint',
    items: ['OOP', 'Data Structures & Algorithms'],
  },
]

export const experience = {
  eyebrow: 'Experience',
  heading: 'My Internship Experience',
  note: 'One internship, and the work I actually shipped during it.',
  role: 'Software Engineering Intern',
  company: 'Zipr Links Pvt. Limited',
  location: 'Remote',
  period: 'May 2025 — Jul 2025',
  summary:
    'During my Software Engineering internship, I worked on web applications involving interactive UI, validation, booking workflows, and backend-oriented functionality.',
  bullets: [
    'Engineered a flight-seat selection system with real-time visualization and dynamic pricing algorithms that adjusted fares by up to 15%.',
    'Delivered secure booking workflows that contributed to a 30% improvement in booking completion rate.',
    'Architected a Form.io-based web application with real-time validation, input sanitization, and automated JSON-schema generation.',
    'Reduced manual form-creation effort by 40% and input errors by 20%.',
  ],
  stack: ['React', 'JavaScript', 'Form.io', 'REST APIs'],
}

export const education = {
  eyebrow: 'Education',
  heading: 'Education',
  primary: {
    school: 'Indian Institute of Technology (ISM), Dhanbad',
    degree: 'B.Tech, Electronics & Communication Engineering',
    year: '2026',
    score: 'GPA: 7.92 / 10.00',
  },
  others: [
    {
      school: 'Indian Public School, Hajipur',
      degree: 'Higher Secondary (Class XII, CBSE) • Science',
      year: '2021',
      score: '89.6%',
    },
    {
      school: 'Secondary School (Class X, CBSE)',
      degree: 'Science & Mathematics',
      year: '2019',
      score: '93.0%',
    },
  ],
}

export const projects = {
  eyebrow: 'Projects',
  heading: "What I've built",
  subtitle:
    'Hands-on projects where I’ve applied full-stack development, LLMs, and AI-agent workflows.',
  featured: [
    {
      number: '01',
      title: 'TripMate AI',
      subtitle: 'Multi-Agent AI Travel Planner',
      color: 'bg-violet-soft',
      description: [
        'TripMate AI is a hands-on AI-agent project that explores how multiple specialized agents can work together to automate travel planning.',
        "The system uses a Supervisor Agent to interpret the user's request and route tasks to specialized agents for areas such as flights, hotels, weather, budgeting, and itinerary planning.",
        'The application uses LangGraph and LangChain to orchestrate the workflow and integrates external tools through MCP. PostgreSQL is used for workflow state persistence, while a human-in-the-loop step allows the user to review and approve the generated plan.',
      ],
      highlights: [
        'Supervisor Agent architecture',
        'Specialized travel agents',
        'LangGraph orchestration',
        'LangChain',
        'MCP integrations',
        'External travel/weather tools',
        'PostgreSQL state persistence',
        'Human-in-the-loop workflow',
        'FastAPI backend',
      ],
      tech: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'MCP', 'PostgreSQL'],
      demo: 'https://tripmate-ai-multi-agent-travel-planner-1hha.onrender.com/',
      github: 'https://github.com/nidhirani-2404/TripMate-AI-Multi-Agent-Travel-Planner',
    },
    {
      number: '02',
      title: 'StoryForge AI',
      subtitle: 'Full-Stack AI Storytelling Platform',
      color: 'bg-sun',
      description: [
        'StoryForge AI is a full-stack generative AI project that converts user ideas into personalized multi-chapter stories.',
        'Users can specify parameters such as topic, genre, language, writing style, age group, and characters. The application uses Groq-powered Llama models to generate content and streams responses in real time using Server-Sent Events.',
        'I also implemented context-aware story continuation by storing previous story chapters in MongoDB. Additional functionality includes illustrations, narration, PDF export, authentication, and a personal story library.',
      ],
      highlights: [
        'LLM-powered content generation',
        'Groq API',
        'Llama',
        'Real-time SSE streaming',
        'Context-aware story continuation',
        'MongoDB story history',
        'JWT authentication',
        'bcrypt',
        'AI illustrations',
        'Narration',
        'PDF generation',
        'Personal story library',
      ],
      tech: [
        'React',
        'Vite',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Groq API',
        'Llama',
        'JWT',
        'bcrypt',
        'Tailwind CSS',
        'SSE',
        'PDFKit',
      ],
      demo: 'https://nidhi-ai-storyteller.onrender.com/',
      github: 'https://github.com/nidhirani-2404/AI-Story-Teller',
    },
    {
      number: '03',
      title: 'Streamify',
      subtitle: 'Real-Time Chat & Video Calling App',
      color: 'bg-mint',
      description: [
        'Streamify is a full-stack communication project built to explore authentication, messaging, user relationships, notifications, and real-time communication workflows.',
        'The application uses React and Vite for the frontend and Node.js, Express.js, and MongoDB for the backend. JWT authentication and bcrypt password hashing are used for secure user authentication.',
        'The application also includes onboarding, friend requests, notifications, responsive UI, and chat/video functionality through Stream.',
      ],
      highlights: [
        'JWT authentication',
        'bcrypt password hashing',
        'REST APIs',
        'MongoDB persistence',
        'Chat functionality',
        'Video calling',
        'Friend requests',
        'Notifications',
        'User onboarding',
        'Responsive React UI',
      ],
      tech: [
        'React',
        'Vite',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Tailwind CSS',
        'Lucide React',
      ],
      demo: null,
      github: 'https://github.com/nidhirani-2404/Streamify-Chatapp',
    },
    {
      number: '04',
      title: 'Job Portal',
      subtitle: 'MERN Recruitment Platform',
      color: 'bg-coral',
      description: [
        'Job Portal is a full-stack recruitment application built using the MERN stack to explore real-world job-seeking and recruiter workflows.',
        'The platform supports two main user roles: students and recruiters.',
        'Students can create profiles, browse job opportunities, search for positions, and apply for jobs. Recruiters can manage job postings and applications through an administrative dashboard.',
        'The project helped me strengthen my understanding of REST APIs, authentication, database design, state management, and role-based application workflows.',
      ],
      highlights: [
        'Student and recruiter workflows',
        'Job search',
        'Job applications',
        'User profiles',
        'Recruiter job management',
        'Admin dashboard',
        'JWT authentication',
        'RESTful APIs',
        'Redux state management',
        'MongoDB',
      ],
      tech: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux', 'Tailwind CSS'],
      demo: null,
      github: 'https://github.com/nidhirani-2404/Job-Portal',
    },
  ],
  more: [
    {
      title: 'LLM Tokenizer',
      body: 'A Python learning project created to understand tokenization concepts used by language models, including encoding, decoding, token counting, and token limits.',
      tech: ['Python', 'tiktoken'],
      github: 'https://github.com/nidhirani-2404/llm-tokenizer',
      color: 'bg-sun',
    },
    {
      title: 'Netflix Clone',
      body: 'A responsive Netflix-style frontend project built to practice HTML/CSS layouts, responsive design, navigation, hero sections, and UI implementation.',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/nidhirani-2404/Netflix-Clone',
      color: 'bg-coral',
    },
  ],
  practice: {
    title: 'Python Practice Projects',
    note: 'Small builds from when I was getting comfortable with Python.',
    items: [
      'QR Code Generator',
      'File Organizer',
      'Text File Organizer',
      'Drink Water Reminder',
      'Calculator',
      'Quiz Game',
      'Express Learning',
    ],
  },
}

export const achievements = {
  eyebrow: 'Achievements',
  heading: "Milestones I'm proud of",
  items: [
    {
      icon: 'Trophy',
      title: 'JEE Achievement',
      body: 'Cleared JEE with an All India Rank in the top 1.5 percentile.',
      color: 'bg-sun',
    },
    {
      icon: 'Target',
      title: 'DSA Practice',
      body: 'Solved Data Structures & Algorithms problems across LeetCode and GeeksforGeeks.',
      color: 'bg-mint',
    },
  ],
}

export const codingProfiles = {
  heading: 'Where I solve problems',
  items: [
    {
      platform: 'LeetCode',
      handle: '@nidhirani2404',
      note: 'DSA Problems',
      url: links.leetcode,
      color: 'bg-sun',
    },
    {
      platform: 'CodeChef',
      handle: '@nidhirani2404',
      note: 'Competitive Programming',
      url: links.codechef,
      color: 'bg-coral',
    },
    {
      platform: 'Codeforces',
      handle: '@nidhirani2404',
      note: 'Competitive Programming',
      url: links.codeforces,
      color: 'bg-sky',
    },
    {
      platform: 'GitHub',
      handle: '@nidhirani-2404',
      note: 'Projects & Development',
      url: links.github,
      color: 'bg-violet-soft',
    },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  heading: "Let's connect.",
  paragraphs: [
    'I’m currently looking for opportunities to start my career as a Software Engineer, Full-Stack Developer, or LLM/GenAI Developer.',
    "If you're a recruiter, hiring manager, developer, or someone interested in collaborating, feel free to reach out.",
  ],
  cta: 'Email me',
  socials: [
    { label: 'GitHub', url: links.github, icon: 'Github' },
    { label: 'LinkedIn', url: links.linkedin, icon: 'Linkedin' },
    { label: 'Phone', url: links.phone, icon: 'Phone' },
    { label: 'LeetCode', url: links.leetcode, icon: 'Code2' },
    { label: 'CodeChef', url: links.codechef, icon: 'ChefHat' },
    { label: 'Codeforces', url: links.codeforces, icon: 'Binary' },
    { label: 'Naukri', url: links.naukri, icon: 'Briefcase' },
  ],
}

export const finalCta = {
  line1: 'Looking for my first full-time opportunity.',
  line2: "Let's build something meaningful.",
}
