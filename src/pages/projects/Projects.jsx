import "./Projects.css";
import { NavLink } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";
import { useState, useMemo } from "react";
import { projectsData, getPaginatedProjects, getTotalPages } from "../../data/projects";
import { Project_card, Vlog_card } from "../../components/project-card/Project-card";

const Projects = () => {
  const [pageNumber, setPageNumber] = useState(1);
  
  // Calculate pagination using useMemo for performance
  const paginationData = useMemo(() => {
    const totalPages = getTotalPages();
    const currentProjects = getPaginatedProjects(pageNumber);
    return {
      totalPages,
      currentProjects,
      hasNextPage: pageNumber < totalPages,
      hasPrevPage: pageNumber > 1
    };
  }, [pageNumber]);

  const increasePage = () => {
    if (paginationData.hasNextPage) {
      setPageNumber(pageNumber + 1);
    }
  };

  const decreasePage = () => {
    if (paginationData.hasPrevPage) {
      setPageNumber(pageNumber - 1);
    }
  };

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
          {paginationData.currentProjects.map((project, index) => {
            if (project.type === 'vlog') {
              return <Vlog_card key={project.id} data={project} />;
            } else if (project.type === 'project') {
              return <Project_card data={project} key={project.id + index * 2} />;
            }
            return null;
          })}
        </div>

        <div className=" w-full flex items-center justify-center select-none ">
            <div className="flex gap-3 lg:gap-[1vw] items-center  text-[#bbbbbb] text-[35px] lg:text-[2vw]">
            <TiArrowLeft 
              className={`${!paginationData.hasPrevPage ? 'disabled' : ''} cursor-pointer active:scale-[0.9] hover:text-[#64f196] transition-all duration-300`} 
              onClick={decreasePage}
            />
            <span className="font-[500] text-[20px] lg:text-[1.4vw] mt-[0.4vw] flex items-center justify-center">
              {pageNumber} / {paginationData.totalPages}
            </span>
            <TiArrowRight 
              className={`${!paginationData.hasNextPage ? 'disabled' : ''} cursor-pointer active:scale-[0.9] hover:text-[#64f196] transition-all duration-300`} 
              onClick={increasePage} 
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
