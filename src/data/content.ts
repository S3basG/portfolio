import type { Project, TimelineItem } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "HorizonHelper",
    category: "Engineering",
    tags: ["Systems", "Incident Response", "UI", "React"],
    year: "2025",
    shortDescription: "Fire and incident response system designed to maintain clarity under pressure.",
    fullDescription: "A real-time incident management system built to help teams coordinate emergency responses with clear, predictable interfaces that reduce cognitive load during high-stress situations.",
    process: [
      "Analyzed emergency response workflows to identify friction points where unclear interfaces cause delays or errors during critical moments.",
      "Designed an interface hierarchy that surfaces the most critical information first, using visual weight and spatial relationships to guide attention without requiring mental processing.",
      "Built state management systems that preserve context across page transitions, ensuring responders never lose track of active incidents when switching between views."
    ],
    challenge: "Emergency response tools often overwhelm users with dense information during the exact moments when clarity is most critical. Complex navigation and context-switching create dangerous delays.",
    solution: "Created a response system with predictable layouts, persistent context awareness, and deliberate information hierarchy—allowing teams to act decisively when seconds matter.",
    image: "from-red-700 to-orange-900",
    size: 'large'
  },

  {
    id: 2,
    title: "FileTrimmer",
    category: "Engineering",
    tags: ["Tooling", "Windows", "File Systems", "Python"],
    year: "2025",
    shortDescription: "Utility for safely handling long file-path edge cases with deterministic rules.",
    fullDescription: "A Windows file system utility that addresses the 260-character path limitation through intelligent path shortening algorithms that maintain readability and prevent naming conflicts.",
    process: [
      "Studied Windows file system constraints and mapped edge cases where standard tools fail or produce unpredictable results with deeply nested directory structures.",
      "Developed deterministic algorithms that shorten file paths while preserving semantic meaning through intelligent truncation rather than arbitrary character removal.",
      "Implemented conflict resolution logic to handle cases where multiple files would produce identical shortened names, ensuring data integrity across operations."
    ],
    challenge: "Windows' 260-character path limit causes silent failures and data loss in backup systems and development environments with deep directory nesting. Existing solutions use unpredictable heuristics.",
    solution: "Built a utility with explicit, testable path-shortening rules that maintain file identity while staying within system constraints—no surprises, no data loss.",
    image: "from-blue-800 to-indigo-950",
    size: 'medium'
  },

  {
    id: 3,
    title: "Gator Leasing",
    category: "Design",
    tags: ["React Native", "MongoDB", "Express.js", "Node.js", "Mobile Dev"],
    year: "2024",
    shortDescription: "Student-focused subleasing app built to reduce risk and confusion.",
    fullDescription: "A mobile marketplace designed specifically for university students to find and list sublease opportunities, with built-in verification and transparency features to reduce common rental scams.",
    process: [
      "Interviewed students about sublease experiences to identify recurring pain points around trust, verification, and unclear lease terms that lead to disputes.",
      "Designed verification flows that balance security with ease-of-use, ensuring student IDs and lease documentation could be checked without creating onboarding friction.",
      "Built matching algorithms that surface compatible roommates and lease terms based on lifestyle preferences, reducing time wasted on incompatible listings."
    ],
    challenge: "Student subleasing is fraught with scams, unclear lease terms, and mismatched expectations. Existing platforms are built for general rentals and lack student-specific protections.",
    solution: "Created a focused marketplace with university-email verification, transparent lease summaries, and compatibility matching—reducing risk while speeding up the search process.",
    image: "from-emerald-700 to-teal-900",
    size: 'large'
  },

  {
    id: 4,
    title: "AI Cooking Assistant",
    category: "Design",
    tags: ["Python", "TensorFlow", "NLP", "Flask", "OpenAI API"],
    year: "2025",
    shortDescription: "Adaptive cooking assistant that guides without overwhelming.",
    fullDescription: "An AI-powered cooking interface that adapts its guidance level based on user expertise and real-time progress, providing support without micromanaging experienced cooks.",
    process: [
      "Studied how home cooks interact with recipes across skill levels, noting when detailed instructions help versus when they become annoying interruptions.",
      "Designed adaptive prompts that monitor cooking pace and adjust suggestion frequency—offering more guidance to beginners while giving experts space to work.",
      "Built confidence models that learn from user corrections and implicit feedback to calibrate assistance over time without requiring explicit training inputs."
    ],
    challenge: "Cooking assistants either over-explain every step (annoying experts) or provide too little guidance (confusing beginners). Static instructions can't adapt to real-time skill or context.",
    solution: "Developed an assistant that watches your pace, learns your skill level, and adjusts its guidance dynamically—helping when needed, staying quiet when you've got it under control.",
    image: "from-purple-700 to-pink-900",
    size: 'medium'
  },

  {
    id: 5,
    title: "Neural Network Playground",
    category: "Data",
    tags: ["Python", "NumPy", "Matplotlib", "Machine Learning", "Jupyter"],
    year: "2024",
    shortDescription: "Interactive neural network built from scratch to understand learning behavior.",
    fullDescription: "An educational neural network implementation built without ML libraries, featuring real-time visualization of training dynamics to develop intuition for how gradient descent shapes network behavior.",
    process: [
      "Implemented backpropagation and gradient descent from first principles using only NumPy, forcing deep engagement with the mathematics underlying modern ML frameworks.",
      "Created live visualizations showing how loss surfaces, weight updates, and activation patterns evolve during training across different hyperparameter configurations.",
      "Designed interactive controls allowing real-time manipulation of learning rates, batch sizes, and architectures to observe immediate effects on convergence behavior."
    ],
    challenge: "ML frameworks abstract away the mechanisms that determine whether models train well or fail mysteriously. Understanding requires seeing the mathematics in action, not just reading equations.",
    solution: "Built a transparent neural network from scratch with visual feedback loops showing exactly how each training decision propagates through the system—turning abstract math into observable behavior.",
    image: "from-violet-700 to-purple-900",
    size: 'medium'
  }
];

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "June 2025 - Aug 2025",
    role: "Software Engineering Intern",
    organization: "Wells Fargo",
    description: "Analyzed multilingual document metadata using langid, langdetect, and pandas across 100K+ records. Built logistic regression models and monitored model drift using Python to improve classification accuracy.",
    type: 'extracurricular'
  },
  {
    id: 2,
    year: "Jan 2024 - May 2025",
    role: "Software Developer Intern",
    organization: "Creating Real",
    description: "Deployed Go microservices, reducing API latency by 60% via optimized routing. Implemented WebSockets and OAuth2, cutting race conditions and breaches by 25%.",
    type: 'extracurricular'
  },
  {
    id: 3,
    year: "May 2023 - Aug 2023",
    role: "AI/ML Research Intern",
    organization: "NASA",
    description: "Digitized 1,000+ legacy air traffic datasets using NLP. Built ML models in Python to extract insights from 500+ unstructured Letters of Agreement. Automated data pipelines, boosting efficiency by 30%.",
    type: 'extracurricular'
  },
  {
    id: 4,
    year: "May 2022 - Aug 2022",
    role: "Project Manager & Lead System Engineer",
    organization: "NASA LSPACE Academy",
    description: "Led rover design for Preliminary Review, used by 80% of NASA software project engineers. Configured rover systems for mission-critical operations.",
    type: 'extracurricular'
  },
  {
    id: 5,
    year: "Aug 2022 - Present",
    role: "SHPEducation CpE Advisor, Event Director",
    organization: "Society of Hispanic Professional Engineers (SHPE) at UF",
    description: "Mentor SHPE members on course planning, internships, and tech careers. Planned and executed high-impact events, strengthening SHPE's internal community.",
    type: 'extracurricular'
  },
  {
    id: 6,
    year: "Jan 2025 - Present",
    role: "VP of Corporate Relations",
    organization: "ColorStack at UF",
    description: "Secured $5,200 in sponsorships from NVIDIA, Bloomberg, and Capital One for 8+ workshops and 10+ networking events. Led 300+ member organization, increasing women representation to 22%.",
    type: 'extracurricular'
  },
  {
    id: 7,
    year: "Expected Dec 2026",
    role: "B.S. in Computer Engineering",
    organization: "University of Florida",
    description: "Herbert Wertheim College of Engineering. GPA: 3.74/4.00. Coursework: Data Structures & Algorithms, Computer Organization, Microprocessor Applications, Digital Logic.",
    type: 'education'
  }
];