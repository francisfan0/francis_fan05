export interface ResumeItem {
  id: string;
  keyword: string;
  title: string;
  description: string;
  technicalDetails: string;
  recruiterNotes: string;
  projects: string[];
  skills: string[];
}

// Add your resume content here
// You can search by keyword, title, or any skill
export const resumeData: ResumeItem[] = [
  {
    id: "1",
    keyword: "svm",
    title: "Support Vector Machine (SVM)",
    description: "Machine learning algorithm for classification and regression",
    technicalDetails: "Used SVM for binary classification in project X. Implemented with scikit-learn, achieved 85% accuracy on test set.",
    recruiterNotes: "Be ready to explain: 1) How SVM finds the optimal hyperplane 2) Kernel trick concept 3) When to use SVM vs other algorithms 4) Your specific implementation details",
    projects: ["Project X - Classification Model", "Course Y - ML Final Project"],
    skills: ["scikit-learn", "Python", "Machine Learning", "Classification"]
  },
  {
    id: "2",
    keyword: "react",
    title: "React.js",
    description: "JavaScript library for building user interfaces",
    technicalDetails: "Built personal website using React with TypeScript. Implemented responsive design, dark mode, and routing.",
    recruiterNotes: "Be ready to explain: 1) Component lifecycle 2) State vs props 3) Hooks (useState, useEffect) 4) Virtual DOM concept 5) Your specific project challenges",
    projects: ["Personal Website", "Course Project Z"],
    skills: ["React", "TypeScript", "JavaScript", "CSS", "HTML"]
  },
  {
    id: "3",
    keyword: "python",
    title: "Python",
    description: "High-level programming language for data science and web development",
    technicalDetails: "Extensive experience with Python for data analysis, machine learning, and web development. Used in multiple academic and personal projects.",
    recruiterNotes: "Be ready to explain: 1) Key Python features (list comprehensions, decorators, context managers) 2) Popular libraries (pandas, numpy, scikit-learn) 3) Your experience level and specific use cases 4) Python vs other languages",
    projects: ["Data Analysis Project", "ML Research", "Web Scraping Tool"],
    skills: ["Python", "Data Analysis", "Web Development", "Automation"]
  },
  {
    id: "4",
    keyword: "machine learning",
    title: "Machine Learning",
    description: "Subset of artificial intelligence focused on algorithms and statistical models",
    technicalDetails: "Implemented various ML algorithms including supervised and unsupervised learning. Experience with feature engineering, model evaluation, and deployment.",
    recruiterNotes: "Be ready to explain: 1) Supervised vs unsupervised learning 2) Overfitting and how to prevent it 3) Cross-validation techniques 4) Feature selection methods 5) Your specific ML projects and results",
    projects: ["Classification Model", "Recommendation System", "NLP Project"],
    skills: ["Machine Learning", "scikit-learn", "TensorFlow", "Feature Engineering"]
  }
  // Add more items here following the same structure
  // Example template:
  /*
  {
    id: "unique-id",
    keyword: "search-term",
    title: "Technology/Concept Name",
    description: "Brief description",
    technicalDetails: "Your specific experience and implementation details",
    recruiterNotes: "What you need to know for recruiter calls - be specific about concepts, challenges, and your role",
    projects: ["Project 1", "Project 2"],
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  }
  */
];
