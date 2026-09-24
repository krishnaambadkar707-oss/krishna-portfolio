export interface Skill {
  name: string
  category: SkillCategory
}

export const skillCategories = [
  'Programming',
  'AI / ML / GenAI',
  'Backend',
  'Frontend',
  'Data & Visualization',
  'Computer Vision',
  'Developer Tools',
] as const

export type SkillCategory = (typeof skillCategories)[number]

const group = (category: SkillCategory, names: string[]): Skill[] => names.map((name) => ({ name, category }))

export const skills: Skill[] = [
  ...group('Programming', ['Python', 'SQL', 'C++', 'R', 'JavaScript', 'HTML', 'CSS']),
  ...group('AI / ML / GenAI', [
    'Scikit-learn',
    'Prompt Engineering',
    'RAG',
    'LLM APIs',
    'Embeddings',
    'Vector Similarity Retrieval',
  ]),
  ...group('Backend', ['FastAPI', 'REST APIs', 'Pydantic', 'SQLAlchemy']),
  ...group('Frontend', ['React', 'Vite', 'Three.js', 'Web Speech API']),
  ...group('Data & Visualization', ['NumPy', 'Pandas', 'Matplotlib', 'MySQL', 'Power BI', 'MS Excel']),
  ...group('Computer Vision', ['MediaPipe Hands', 'OpenCV']),
  ...group('Developer Tools', ['Git', 'GitHub', 'VS Code']),
]

export const strengths = [
  'Problem Solving',
  'Communication',
  'Teamwork',
  'Leadership',
  'Decision Making',
  'Time Management',
  'Quick Learning',
]
