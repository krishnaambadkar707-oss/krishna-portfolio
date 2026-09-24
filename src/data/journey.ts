export interface JourneyItem {
  when: string
  title: string
  detail?: string
}

// Only facts supplied by Krishna. No internships or employment.
export const journey: JourneyItem[] = [
  { when: '2022', title: '10th', detail: '91.40%' },
  { when: '2024', title: '12th', detail: '78.33%' },
  {
    when: '2024 – Present',
    title: 'B.Tech, Artificial Intelligence & Data Science',
    detail: 'Prof. Ram Meghe Institute of Technology and Research, Amravati',
  },
  { when: 'Through 2nd year', title: 'CGPA', detail: '8.55' },
  { when: '2026', title: 'Manthan 4 Yuwa – Vikasit Nagpur', detail: 'Full-Stack Developer, Nagpur Traffic AI' },
  { when: '2026', title: '12+ AI / Data Science projects', detail: '6 deployed applications' },
]

export const buildAreas = [
  {
    number: '01',
    title: 'AI & Generative AI',
    text: 'RAG systems, LLM applications, intelligent assistants, prompt engineering, embeddings and AI-powered experiences.',
  },
  {
    number: '02',
    title: 'Machine Learning',
    text: 'Prediction systems, model deployment, data preprocessing and practical ML applications.',
  },
  {
    number: '03',
    title: 'Data Science',
    text: 'Data analysis, visualization, statistical analysis, trend discovery and predictive insights.',
  },
  {
    number: '04',
    title: 'AI-Powered Full Stack Applications',
    text: 'FastAPI backends, React interfaces, APIs, databases and intelligent user experiences.',
  },
]

export const principles = [
  { number: '01', title: 'Understand', text: 'Start with the problem.' },
  { number: '02', title: 'Analyze', text: 'Understand the data and requirements.' },
  { number: '03', title: 'Engineer', text: 'Build a practical and maintainable solution.' },
  { number: '04', title: 'Validate', text: 'Test models, APIs and user workflows.' },
  { number: '05', title: 'Deploy', text: 'Turn working projects into usable applications.' },
]

export const links = {
  github: 'https://github.com/krishnaambadkar707-oss',
  linkedin: 'https://linkedin.com/in/krishna-ambadkar-918955359',
  email: 'krishnaambadkar707@gmail.com',
}
