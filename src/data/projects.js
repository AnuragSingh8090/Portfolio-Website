import { TechStack } from '../components/tech/Tech';

// Helper function to get tech by key
export const getTech = (techKey) => {
  return TechStack[techKey] || null;
};

// Helper function to validate tech stack array
export const validateTechStack = (techArray) => {
  return techArray.filter(tech => tech !== null);
};

// Projects data with proper tech stack references
export const projectsData = [
  {
    id: 1,
    type: 'project',
    page: 1,
    title: "Bazaarwale",
    imgUrl: 'bazaarwale.webp',
    date: '12-04-2025',
    websiteUrl: 'https://bazaarwale.netlify.app/',
    githubUrl: 'https://github.com/AnuragSingh8090/BazaarWale',
    techStack: [
      TechStack.react, 
      TechStack.nodejs, 
      TechStack.expressjs, 
      TechStack.nodemailer, 
      TechStack.tailwind_css, 
      TechStack.redux_toolkit
    ],
    summary: 'BazaarWale is a modern e-commerce web application built with React and Vite, designed to provide users with a seamless online shopping experience. It features responsive product browsing, intuitive UI/UX, and a scalable frontend architecture for showcasing and purchasing products efficiently across devices.'
  },
  {
    id: 2,
    type: 'project',
    page: 1,
    title: "Movies Hub",
    imgUrl: 'movies-hub.webp',
    date: '25-08-2024',
    websiteUrl: 'https://anuragmovies.netlify.app/',
    githubUrl: 'https://github.com/AnuragSingh8090/Movie-Website-React',
    techStack: [
      TechStack.react,
      TechStack.tailwind_css
    ],
    summary: 'Developed Anurag Movies, a real-time movie discovery web application powered by the TMDB API, enabling users to browse trending movies, explore detailed film information, and discover entertainment content through a responsive and modern UI. Implemented dynamic API data fetching, optimized state management, and responsive design to ensure seamless performance across devices.'
  },
  {
    id: 3,
    type: 'project',
    page: 1,
    title: "Right Flight Travel",
    imgUrl: 'right-flight-travel.webp',
    date: '20-06-2026',
    websiteUrl: 'https://rightflighttravel.in',
    githubUrl: 'https://github.com/AnuragSingh8090/RightFlightTravel',
    techStack: [
      TechStack.react,
      TechStack.tailwind_css
    ],
    summary: 'Developed Right Flight Travel, a responsive landing page for a travel booking platform designed to showcase holiday packages, travel services, and booking information through a modern and engaging user interface. Built to provide users with a seamless experience for exploring destinations and connecting with travel services.'
  },
  {
    id: 4,
    type: 'project',
    page: 1,
    title: "1EQ Edutech",
    imgUrl: '1eq.webp',
    date: '19-03-2026',
    websiteUrl: 'https://1eq.in',
    githubUrl: '',
    techStack: [
      TechStack.react,
      TechStack.tailwind_css
    ],
    summary: 'Developed 1EQ, an accessible educational platform specially designed for deaf and non-verbal students, delivering learning content through Indian Sign Language to create an inclusive and engaging digital education experience. Built with responsive design and accessibility-focused UI to support seamless learning across devices. Focused on improving digital inclusivity by creating an intuitive interface tailored to the unique learning needs of hearing- and speech-impaired users.'
  },
  {
    id: 5,
    type: 'project',
    page: 1,
    title: "Jambimony",
    imgUrl: 'jambimony.webp',
    date: '11-05-2025',
    websiteUrl: 'https://jambimony.netlify.app/',
    githubUrl: 'https://github.com/AnuragSingh8090/SIH-2024',
    techStack: [
      TechStack.react,
      TechStack.tailwind_css
    ],
    summary: 'Developed JambiMony, a culturally inspired web platform created to represent and celebrate Indian culture and heritage through an engaging digital experience. Designed with visually rich layouts and responsive UI to showcase traditional values, cultural elements, and heritage-focused content in a modern, accessible format. Focused on blending contemporary web design with culturally authentic presentation to create an immersive user experience.'
  },
  {
    id: 6,
    type: 'project',
    page: 1,
    title: "Weather App",
    imgUrl: 'weather-app.webp',
    date: '11-05-2025',
    websiteUrl: 'https://weatherappanurag.netlify.app/',
    githubUrl: 'https://github.com/AnuragSingh8090/Weather-app-js',
    techStack: [
      TechStack.html,
      TechStack.css, 
      TechStack.javascript
    ],
    summary: 'Developed a weather application using REST API integration to fetch and display real-time weather data, including temperature, humidity, and location-based forecasts. Designed a responsive and user-friendly interface to provide accurate and up-to-date weather information seamlessly across devices.'
  }
];

// Helper function to get projects by page
export const getProjectsByPage = (page) => {
  return projectsData.filter(project => project.page === page);
};

// Helper function to calculate total pages (6 projects per page)
export const getTotalPages = () => {
  return Math.ceil(projectsData.length / 6);
};

// Helper function to get paginated projects
export const getPaginatedProjects = (page, itemsPerPage = 6) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return projectsData.slice(startIndex, endIndex);
};

// Export individual tech constants for easy access
export const TECH = {
  HTML: TechStack.html,
  CSS: TechStack.css,
  JAVASCRIPT: TechStack.javascript,
  REACT: TechStack.react,
  TAILWIND_CSS: TechStack.tailwind_css,
  BOOTSTRAP: TechStack.bootstrap,
  ANGULAR: TechStack.angular,
  TYPESCRIPT: TechStack.typescript,
  REDUX_TOOLKIT: TechStack.redux_toolkit,
  SWIPERJS: TechStack.swiperjs,
  POSTMAN: TechStack.postman,
  GITHUB: TechStack.github,
  GSAP: TechStack.gsap,
  NEXTJS: TechStack.nextjs,
  NODEJS: TechStack.nodejs,
  FIREBASE: TechStack.firebase,
  NODEMAILER: TechStack.nodemailer,
  EXPRESSJS: TechStack.expressjs
};