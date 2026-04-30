// Experience data with dynamic calculation
export const experienceData = {
  // Your first joining date (adjust this to your actual start date)
  startDate: new Date('2022-01-15'), // Example: January 15, 2022
  
  // Calculate total experience dynamically from first company
  getTotalExperience: () => {
    // Find the earliest start date from all experiences
    const allExperiences = experienceData.experiences;
    if (!allExperiences || allExperiences.length === 0) return 'No experience';
    
    // Get the earliest start date
    const earliestStartDate = allExperiences.reduce((earliest, exp) => {
      return exp.startDate < earliest ? exp.startDate : earliest;
    }, allExperiences[0].startDate);
    
    const now = new Date();
    const start = earliestStartDate;
    
    // Calculate years and months properly
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    
    // Adjust if months is negative
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Adjust if current day is before start day in the month
    if (now.getDate() < start.getDate()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }
    
    if (years > 0 && months > 0) {
      return `${years} Year${years > 1 ? 's' : ''} ${months} Month${months > 1 ? 's' : ''}`;
    } else if (years > 0) {
      return `${years} Year${years > 1 ? 's' : ''}`;
    } else if (months > 0) {
      return `${months} Month${months > 1 ? 's' : ''}`;
    } else {
      return 'Less than a month';
    }
  },
  
  // Experience entries
  experiences: [
    {
      id: 1,
      company: "Krenai Private Ltd.",
      position: "Frontend Developer (Internship)",
      duration: "Feb 2025 - June 2025",
      startDate: new Date('2025-02-01'),
      endDate: new Date('2025-06-30'),
      location: "India",
      type: "Internship",
      description: "Translated Figma design screens into responsive Angular, HTML and CSS interfaces for client-facing web pages with focus on adaptive layouts and cross-browser compatibility.",
      technologies: ["Angular", "HTML", "CSS", "TypeScript", "Figma", "Responsive Design"],
      achievements: [
        "Translated 20+ Figma design screens into responsive Angular, HTML and CSS interfaces for client-facing web pages",
        "Enforced adaptive layouts for desktop, tablet, and mobile breakpoints",
        "Optimized frontend performance and ensured cross-browser compatibility",
        "Refined visual styling and spacing to maintain design consistency across screens"
      ]
    },
    {
      id: 2,
      company: "1EQ Edutech Private Ltd.",
      position: "Frontend Developer",
      duration: "June 2025 - Present",
      startDate: new Date('2025-06-01'),
      endDate: null, // null means current/ongoing
      location: "India",
      type: "Full-time",
      description: "Architecting and delivering production-grade React.js and Angular features across multiple core product modules while collaborating in Agile and Scrum development cycles with cross-functional teams.",
      technologies: ["React", "Angular", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS", "REST API", "Git"],
      achievements: [
        "Architected and delivered production-grade React.js and Angular features across multiple core product modules",
        "Owned end-to-end integration of RESTful APIs and third-party services, enabling real-time data workflows",
        "Implemented advanced SEO techniques including structured metadata, semantic HTML5, and lazy loading",
        "Maintained a shared library of 10+ reusable UI components that standardized design patterns and reduced development duplication across modules",
        "Collaborated in Agile and Scrum development cycles with cross-functional teams"
      ]
    }
  ],
  
  // Skills organized by categories with tech stack references
  skillsByCategory: {
    languages: [
      'html',
      'css', 
      'javascript',
      'typescript'
    ],
    'frameworks & libraries': [
      'react',
      'angular',
      'nextjs',
      'expressjs',
      'tailwind_css',
      'bootstrap',
      'redux_toolkit',
      'swiperjs',
      'gsap'
    ],
    tools: [
      'github',
      'postman',
      'nodejs',
      'firebase',
      'nodemailer'
    ]
  },
  
  // Career highlights
  highlights: {
    totalProjects: "30+",
    clientsSatisfied: "25+",
    technologiesMastered: "20+",
    yearsOfExperience: () => experienceData.getTotalExperience()
  }
};