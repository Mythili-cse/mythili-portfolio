export const profile = {
  name: 'Mythili L',
  title: 'Aspiring Software Engineer',
  subtitle: 'AI & Full Stack Developer',
  tagline:
    'Computer Science Engineering student building software at the intersection of Generative AI and full stack web development.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'mythililakshmipathy16@gmail.com',
  github: 'https://github.com/Mythili-cse',
  linkedin: 'https://www.linkedin.com/in/mythili-l-98b390328/',
  college: 'Agni College of Technology',
  degree: 'B.E. Computer Science Engineering',
  year: '3rd Year',
  graduation: '2028',
  resumeUrl: '/Mythili_L_Resume.pdf',
}

export const summary = {
  eyebrow: 'About',
  heading: 'Building software that solves real problems',
  paragraphs: [
    "I'm a Computer Science Engineering student at Agni College of Technology, currently in my third year, with a steady focus on writing software that actually works for the people using it. Most of what I build lives at the intersection of Generative AI and full stack web development — systems that respond intelligently, and interfaces that make that intelligence usable.",
    'My interest in AI started with prompt engineering: understanding how to shape instructions so a model produces something reliable, not just impressive. That curiosity pulled me into the surrounding stack — REST APIs, responsive frontends, and the everyday engineering discipline of shipping something that holds up outside a notebook.',
    "I learn by building. Three internships and a handful of independent projects later, I've gotten comfortable moving between backend logic and frontend polish, and I'm looking for a team where I can keep doing both.",
  ],
}

export const objective =
  'Seeking software engineering internship and placement opportunities where I can apply my knowledge of Artificial Intelligence, Generative AI, Prompt Engineering, and Full Stack Development — while continuously learning, collaborating with teams, and building impactful software solutions.'

export type SkillCategory = {
  category: string
  icon: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'code-2',
    skills: ['C', 'Python', 'Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    category: 'AI & Web',
    icon: 'sparkles',
    skills: ['Generative AI', 'Prompt Engineering', 'REST APIs', 'Responsive Web Development'],
  },
  {
    category: 'Tools',
    icon: 'terminal',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Render'],
  },
]

export type Internship = {
  company: string
  duration: string
  domain?: string
  project?: string
  description: string
}

export const internships: Internship[] = [
  {
    company: 'RISE Internship',
    duration: '1 Month',
    domain: 'Generative AI & Prompt Engineering',
    project: 'AI Content Creation System',
    description:
      'Designed and developed an AI-powered content generation application using prompt engineering concepts, modern web technologies, and responsive interface design.',
  },
  {
    company: 'Approtech Internship',
    duration: '1 Month',
    domain: 'Full Stack Python Development',
    description:
      'Worked on full-stack application development, gaining practical experience across frontend and backend technologies while building scalable software solutions.',
  },
  {
    company: 'Tianode Internship',
    duration: '1 Month',
    description:
      'Completed a one-month internship focused on practical industry exposure, collaborative development workflows, and core software engineering practices.',
  },
]

export type Project = {
  title: string
  description: string
  features: string[]
  tech: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'AI Content Creation System',
    description:
      'An AI-powered web application that generates high-quality, ready-to-use content by applying structured prompt engineering techniques on top of a clean, responsive interface.',
    features: [
      'AI-powered content generation across multiple formats',
      'Clean, dashboard-style user interface',
      'Fully responsive across devices',
      'Optimized for fast response times',
      'User-friendly, distraction-free workflow',
    ],
    tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Mythili-cse',
    demo: '#',
    featured: true,
  },
]

export const education = {
  degree: 'Bachelor of Engineering',
  field: 'Computer Science Engineering',
  college: 'Agni College of Technology',
  location: 'Chennai, Tamil Nadu',
  graduation: 'Expected Graduation — 2028',
}

export type Certification = {
  title: string
  issuer: string
  icon: string
}

export const certifications: Certification[] = [
  { title: 'Higher Diploma in Computer Applications (HDCA)', issuer: 'Bharat Sevak Samaj', icon: 'award' },
  { title: 'Deep Learning', issuer: 'NPTEL', icon: 'brain-circuit' },
  { title: 'RISE Internship Certificate', issuer: 'RISE', icon: 'certificate' },
  { title: 'Approtech Internship Certificate', issuer: 'Approtech', icon: 'certificate' },
  { title: 'Tianode Internship Certificate', issuer: 'Tianode', icon: 'certificate' },
]

export const achievements = [
  'Completed multiple software development internships across AI and full stack domains',
  'Built and shipped an end-to-end AI Content Creation System',
  'Completed the NPTEL Deep Learning certification',
  'Hands-on, applied experience in Generative AI & Prompt Engineering',
  'Actively developing skills in modern Software Engineering and Full Stack Development',
  'Maintains an active, growing GitHub portfolio',
]

export const languages = ['Tamil', 'English']
