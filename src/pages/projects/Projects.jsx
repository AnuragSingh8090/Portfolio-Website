import "./Projects.css";
import { NavLink } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";
import { useState } from "react";
import {TechStack} from '../../components/tech/Tech'

import {Project_card, Vlog_card} from "../../components/project-card/Project-card";

const Projects = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [vlogs_projects, setVlogs_Projects] = useState([
    {
      id : 1,
      type : 'project',
      page : 1,
      title : "Bazaarwale",
      imgUrl : 'bazaarwale.webp',
      date : '12-04-2025',
      url : 'https://bazaarwale.netlify.app/',
      gitUrl : 'https://github.com/AnuragSingh8090/BazaarWale',
      techStack : [TechStack.react, TechStack.nodejs, TechStack.expressjs, TechStack.nodemailer, TechStack.tailwind_css, TechStack.redux_toolkit],
      summary : 'BazaarWale is a modern e-commerce web application built with React and Vite, designed to provide users with a seamless online shopping experience. It features responsive product browsing, intuitive UI/UX, and a scalable frontend architecture for showcasing and purchasing products efficiently across devices.'

    },
    {
      id : 2,
      type : 'project',
      page : 1,
      title : "Movies Hub",
      imgUrl : 'movies-hub.webp',
      date : '25-08-2024',
      url : 'https://anuragmovies.netlify.app/',
      gitUrl : 'https://github.com/AnuragSingh8090/Movie-Website-React',
      techStack : [TechStack.react,TechStack.tailwind_css],
      summary : 'Developed Anurag Movies, a real-time movie discovery web application powered by the TMDB API, enabling users to browse trending movies, explore detailed film information, and discover entertainment content through a responsive and modern UI. Implemented dynamic API data fetching, optimized state management, and responsive design to ensure seamless performance across devices.'

    },
    {
      id : 3,
      type : 'project',
      page : 1,
      title : "Right Flight Travel",
      imgUrl : 'right-flight-travel.webp',
      date : '20-06-2026',
      url : 'https://rightflighttravel.in',
      gitUrl : 'https://github.com/AnuragSingh8090/RightFlightTravel',
      techStack : [TechStack.react,TechStack.tailwind_css],
      summary : 'Developed Right Flight Travel, a responsive landing page for a travel booking platform designed to showcase holiday packages, travel services, and booking information through a modern and engaging user interface. Built to provide users with a seamless experience for exploring destinations and connecting with travel services.'

    },
    {
      id : 4,
      type : 'project',
      page : 1,
      title : "1EQ Edutech",
      imgUrl : '1eq.webp',
      date : '19-03-2026',
      url : 'https://1eq.in',
      gitUrl : '',
      techStack : [TechStack.react,TechStack.tailwind_css],
      summary : 'Developed 1EQ, an accessible educational platform specially designed for deaf and non-verbal students, delivering learning content through Indian Sign Language to create an inclusive and engaging digital education experience. Built with responsive design and accessibility-focused UI to support seamless learning across devices. Focused on improving digital inclusivity by creating an intuitive interface tailored to the unique learning needs of hearing- and speech-impaired users.'

    },
    {
      id : 5,
      type : 'project',
      page : 1,
      title : "Jambimony",
      imgUrl : 'jambimony.webp',
      date : '11-05-2025',
      url : 'https://jambimony.netlify.app/',
      gitUrl : 'https://github.com/AnuragSingh8090/SIH-2024',
      techStack : [TechStack.react,TechStack.tailwind_css],
      summary : 'Developed JambiMony, a culturally inspired web platform created to represent and celebrate Indian culture and heritage through an engaging digital experience. Designed with visually rich layouts and responsive UI to showcase traditional values, cultural elements, and heritage-focused content in a modern, accessible format. Focused on blending contemporary web design with culturally authentic presentation to create an immersive user experience.'

    },
    {
      id : 5,
      type : 'project',
      page : 1,
      title : "Weather App",
      imgUrl : 'weather-app.webp',
      date : '11-05-2025',
      url : 'https://weatherappanurag.netlify.app/',
      gitUrl : 'https://github.com/AnuragSingh8090/Weather-app-js',
      techStack : [TechStack.html,TechStack.css, TechStack.javascript],
      summary : 'Developed a weather application using REST API integration to fetch and display real-time weather data, including temperature, humidity, and location-based forecasts. Designed a responsive and user-friendly interface to provide accurate and up-to-date weather information seamlessly across devices.'

    },

  ])
  const pageLength = vlogs_projects.length / 6;

  const increasePage =()=>{
     pageNumber < pageLength ? setPageNumber(pageNumber + 1) : null
  }
  const decreasePage =()=>{
     pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
  }

  return (
    <div className="pb-[60px] lg:pb-0 w-full  lg:h-[90%] lg:w-[85%]  lg:rounded-2xl lg:overflow-hidden pageAnimation">
      <div className="header bg-[#111a16] sticky z-[99]  top-0 left-0 lg:static py-5 lg:py-0 lg:h-[14%] gap-3 flex items-center justify-center lg:justify-between px-7 ">
      <div className="shrink-0">
          <div className="flex items-center gap-3 text-[1.2vw] text-[#9f9fa8]">
            <h3 className="text-[22px] lg:text-[2.4vw] text-[#fff] font-[600] leading-none text-shadow-2xl">
              Projects
            </h3>{" "}
            <span className="text-[22px] h-[22px] w-[22px] lg:text-[1.8vw] lg:w-[2.2vw] lg:h-[2.2vw] text-white transition-all duration-300 projectBounce">
              <HiOutlineDocumentText />
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-[3vw]">
          <dir className="flex items-center justify-end  gap-[1vw] navlinkContainer">
            <NavLink
              to="/"
              className="text-[1.2vw] text-[#9f9fa8] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[#18181b] flex items-center justify-center  border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300   hover:text-white rounded-full "
            >
              <FaUserTie />
            </NavLink>

            <NavLink
              to="/projects"
              className="text-[1.3vw]  text-[#9f9fa8] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[#18181b] flex items-center justify-center  border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300   hover:text-white rounded-full "
            >
              <IoDocumentTextOutline />
            </NavLink>

            <NavLink
              to="/contact"
              className="text-[1.3vw]  text-[#9f9fa8] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[#18181b] flex items-center justify-center  border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300  hover:text-white rounded-full "
            >
              <TiContacts />
            </NavLink>
          </dir>
        </div>
      </div>

      <div className="main  bg-[#111111] lg:h-[86%] flex flex-col  justify-between gap-7 px-7 py-5">
        <div className="h-max max-h-full w-full  flex flex-wrap justify-between gap-5 lg:gap-8 ">
          {
            vlogs_projects.map((elem,index) =>{
             if (elem.page === pageNumber){
               if(elem.type === 'vlog'){
                 return <Vlog_card key={elem.id}/>
               }
               else if(elem.type === 'project'){
                 return <Project_card data={elem} key={elem.id + index * 2}/>
               }
             }
            })
          }

        </div>

        <div className=" w-full flex items-center justify-center select-none ">
            <div className="flex gap-3 lg:gap-[1vw] items-center  text-[#bbbbbb] text-[35px] lg:text-[2vw]">
            <TiArrowLeft className={`${pageNumber <= 1 ? 'disabled' :''} cursor-pointer active:scale-[0.9] hover:text-[#64f196] transition-all duration-300`} onClick={decreasePage}/>
            <span className="font-[500] text-[20px] lg:text-[1.4vw] mt-[0.4vw] flex items-center justify-center">{pageNumber} / {Math.ceil(pageLength)}</span>
            <TiArrowRight className={`${pageNumber >= pageLength ? 'disabled' :''} cursor-pointer active:scale-[0.9] hover:text-[#64f196] transition-all duration-300`} onClick={increasePage} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
