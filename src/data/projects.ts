export type VisualKind = 'rag' | 'hana' | 'kumari' | 'traffic'

export interface Project {
  id: string
  number: string
  title: string
  subtitle?: string
  category: string
  description: string
  features: string[]
  tech: string[]
  deployed: boolean
  featured: boolean
  visual?: VisualKind
  hackathon?: { name: string; year: string; role: string }
  /**
   * Repository / live-demo URLs were not supplied, so they are null.
   * Paste the real link here (e.g. 'https://github.com/krishnaambadkar707-oss/repo')
   * and the button on the site turns on automatically.
   */
  github: string | null
  demo: string | null
}

export const projects: Project[] = [
  {
    id: 'enterprise-rag',
    number: '01',
    title: 'Enterprise RAG Knowledge Assistant',
    category: 'GenAI / RAG / Full Stack',
    description:
      'Full-stack document Q&A system using document parsing, overlapping chunking, embeddings, vector similarity retrieval, and grounded LLM generation with source citations.',
    features: [
      'JWT authentication',
      'Role-based access',
      'Conversation history',
      'Collection filtering',
      'Document management',
      'Automated RAG evaluation metrics',
    ],
    tech: ['RAG', 'LLM APIs', 'Embeddings', 'Vector Retrieval', 'Python', 'Backend APIs'],
    deployed: false,
    featured: true,
    visual: 'rag',
    github: null,
    demo: null,
  },
  {
    id: 'hana',
    number: '02',
    title: 'HANA — AI Voice & ISL Learning Companion',
    category: 'AI / Computer Vision / Education',
    description:
      'Interactive Indian Sign Language learning platform combining a 2D avatar, structured lessons, voice/text interaction, and webcam-based hand-gesture recognition.',
    features: [
      'A–Z lessons, numbers and phrases',
      'Voice and text interaction',
      'Real-time landmark visualization',
      'Gesture validation',
      'Quizzes and progress tracking',
      'Streaks, badges and certificates',
      'Local learner-data storage',
    ],
    tech: ['Computer Vision', 'MediaPipe Hands', 'AI', 'Web Speech API', 'Interactive UI'],
    deployed: false,
    featured: true,
    visual: 'hana',
    github: null,
    demo: null,
  },
  {
    id: 'kumari',
    number: '03',
    title: 'KUMARI — AI-Powered Personalized Virtual Companion',
    category: 'Generative AI',
    description:
      'Interactive AI companion with customizable persona, real-time conversation, voice input/output, mood-aware responses, and persistent user memory.',
    features: [
      'Custom persona',
      'Preference and fact extraction',
      'Persistent memory injected into LLM prompts',
      'Conversation tracking',
      'Relationship progression',
      'Gemini and OpenAI integration',
      'Offline fallback response engine',
    ],
    tech: ['Gemini', 'OpenAI', 'LLM Prompting', 'Persistent Memory', 'Voice I/O'],
    deployed: false,
    featured: true,
    visual: 'kumari',
    github: null,
    demo: null,
  },
  {
    id: 'nagpur-traffic-ai',
    number: '04',
    title: 'Nagpur Traffic AI',
    subtitle: 'Risk Heatmap & Police Deployment Decision Support',
    category: 'AI / Full Stack / Hackathon',
    description:
      'AI-based traffic risk assessment and police deployment decision-support platform designed for Nagpur.',
    features: [
      'Risk scoring and interactive heatmaps',
      'High-risk location ranking',
      'Unmanned-zone detection',
      'Police personnel allocation',
      'Dynamic redeployment simulation',
      'Explainable recommendations',
      'Baseline vs recommended comparison',
      'Police Command Center',
      'Citizen interface and reporting',
    ],
    tech: ['Risk Scoring', 'Heatmaps', 'Simulation', 'Decision Support', 'Full Stack'],
    deployed: true,
    featured: true,
    visual: 'traffic',
    hackathon: { name: 'Manthan 4 Yuwa – Vikasit Nagpur', year: '2026', role: 'Full-Stack Developer' },
    github: null,
    demo: null,
  },
  {
    id: 'aivoa',
    number: '05',
    title: 'AIVOA',
    subtitle: 'AI-Powered Customer Complaint Management System',
    category: 'Full Stack / AI',
    description:
      'Centralized complaint-management system for recording, tracking, status management, and resolution workflows, supporting structured customer-issue management.',
    features: [],
    tech: ['Full Stack', 'AI'],
    deployed: true,
    featured: false,
    github: null,
    demo: null,
  },
  {
    id: 'house-price-api',
    number: '06',
    title: 'House Price Prediction API',
    category: 'Machine Learning / Backend',
    description: 'FastAPI-based machine-learning service using Random Forest Regression for house-price prediction.',
    features: ['CSV batch prediction', 'Pydantic validation', 'Joblib model deployment'],
    tech: ['Random Forest', 'FastAPI', 'Pydantic', 'Joblib'],
    deployed: false,
    featured: false,
    github: null,
    demo: null,
  },
  {
    id: 'finance-analyzer',
    number: '07',
    title: 'Personal Finance Analyzer with Prediction',
    category: 'Data Science / Machine Learning',
    description:
      'Expense-analysis application for daily and monthly tracking, category analysis, spending-trend visualization, and future-expense prediction with overspending insights.',
    features: [],
    tech: ['Data Science', 'Machine Learning'],
    deployed: true,
    featured: false,
    github: null,
    demo: null,
  },
  {
    id: 'ecg-analyzer',
    number: '08',
    title: 'ECG Analyzer',
    category: 'Signal Processing / Data Science',
    description:
      'ECG signal-analysis system for signal filtering, heart-rate monitoring, waveform analysis, and biomedical signal visualization.',
    features: [],
    tech: ['Signal Processing', 'Data Science'],
    deployed: true,
    featured: false,
    github: null,
    demo: null,
  },
  {
    id: 'social-media-analyzer',
    number: '09',
    title: 'Social Media Behavior Analyzer',
    category: 'Data Analytics',
    description:
      'Data-analysis application examining user activity, engagement patterns, content preferences, and usage trends using data cleaning, grouping, and aggregation.',
    features: [],
    tech: ['Data Cleaning', 'Grouping', 'Aggregation'],
    deployed: true,
    featured: false,
    github: null,
    demo: null,
  },
  {
    id: 'audio-processor',
    number: '10',
    title: 'Audio Signal Processor',
    category: 'Signal Processing',
    description:
      "Audio-processing application for waveform analysis, signal smoothing, and basic noise reduction using NumPy and Python's Wave module.",
    features: [],
    tech: ['NumPy', 'Python Wave'],
    deployed: true,
    featured: false,
    github: null,
    demo: null,
  },
  {
    id: 'movie-recommendation',
    number: '11',
    title: 'Movie Recommendation Analytics System',
    category: 'R / Data Analytics',
    description:
      'R-based analytics system for analyzing movie datasets and generating recommendation insights through statistical analysis and visualization.',
    features: [],
    tech: ['R', 'Statistics', 'Visualization'],
    deployed: false,
    featured: false,
    github: null,
    demo: null,
  },
  {
    id: 'file-organizer',
    number: '12',
    title: 'Smart File Organizer + Search Engine',
    category: 'Python / Software Engineering',
    description:
      'Command-line application that organizes files and supports keyword-based search using file handling, sorting, searching, string processing, and object-oriented programming.',
    features: [],
    tech: ['Python', 'OOP', 'CLI'],
    deployed: false,
    featured: false,
    github: null,
    demo: null,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const experiments = projects.filter((p) => !p.featured)
