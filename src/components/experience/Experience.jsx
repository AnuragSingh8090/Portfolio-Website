import "./Experience.css";
import { experienceData } from "../../data/experience";
import { FaBuilding, FaClock, FaTrophy } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const Experience = () => {
  const totalExperience = experienceData.getTotalExperience();
  const highlights = experienceData.highlights;

  return (
    <div className="h-max py-3 lg:h-[14%] w-full bg-[var(--bg-card)] border-[1px] border-[var(--border-primary)] gap-3 px-3 lg:px-6 lg:py-2 flex lg:items-center flex-col lg:flex-row justify-between rounded-lg lg:rounded-xl">
      <div className="h-full w-max shrink-0 text-[var(--text-secondary)] text-[18px] lg:text-[1.3vw] font-[600] flex items-center justify-center">
        Experience
      </div>
      
      <div className="h-full w-full flex items-center justify-between gap-2 lg:gap-[0.5vw] overflow-x-auto">
        {/* Total Projects */}
        <div className="flex items-center gap-1 lg:gap-[0.3vw] bg-[var(--bg-secondary)] border-[1px] border-[var(--border-primary)] rounded-lg px-2 lg:px-[0.6vw] py-1 lg:py-[0.3vw] shrink-0 hover:border-[var(--accent-primary)] transition-all duration-300">
          <FaTrophy className="text-[var(--accent-primary)] text-[12px] lg:text-[0.8vw]" />
          <div className="flex flex-col">
            <span className="text-[var(--text-primary)] text-[12px] lg:text-[0.9vw] font-[600]">
              {highlights.totalProjects}
            </span>
            <span className="text-[var(--text-muted)] text-[10px] lg:text-[0.7vw]">
              Projects
            </span>
          </div>
        </div>

        {/* Clients Satisfied */}
        <div className="flex items-center gap-1 lg:gap-[0.3vw] bg-[var(--bg-secondary)] border-[1px] border-[var(--border-primary)] rounded-lg px-2 lg:px-[0.6vw] py-1 lg:py-[0.3vw] shrink-0 hover:border-[var(--accent-primary)] transition-all duration-300">
          <FaBuilding className="text-[var(--accent-primary)] text-[12px] lg:text-[0.8vw]" />
          <div className="flex flex-col">
            <span className="text-[var(--text-primary)] text-[12px] lg:text-[0.9vw] font-[600]">
              {highlights.clientsSatisfied}
            </span>
            <span className="text-[var(--text-muted)] text-[10px] lg:text-[0.7vw]">
              Clients
            </span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex items-center gap-1 lg:gap-[0.3vw] bg-[var(--bg-secondary)] border-[1px] border-[var(--border-primary)] rounded-lg px-2 lg:px-[0.6vw] py-1 lg:py-[0.3vw] shrink-0 hover:border-[var(--accent-primary)] transition-all duration-300">
          <BiCodeAlt className="text-[var(--accent-primary)] text-[12px] lg:text-[0.8vw]" />
          <div className="flex flex-col">
            <span className="text-[var(--text-primary)] text-[12px] lg:text-[0.9vw] font-[600]">
              {highlights.technologiesMastered}
            </span>
            <span className="text-[var(--text-muted)] text-[10px] lg:text-[0.7vw]">
              Technologies
            </span>
          </div>
        </div>

        {/* Years of Experience */}
        <div className="flex items-center gap-1 lg:gap-[0.3vw] bg-[var(--bg-secondary)] border-[1px] border-[var(--border-primary)] rounded-lg px-2 lg:px-[0.6vw] py-1 lg:py-[0.3vw] shrink-0 hover:border-[var(--accent-primary)] transition-all duration-300">
          <FaClock className="text-[var(--accent-primary)] text-[12px] lg:text-[0.8vw]" />
          <div className="flex flex-col">
            <span className="text-[var(--text-primary)] text-[12px] lg:text-[0.9vw] font-[600]">
              {totalExperience}
            </span>
            <span className="text-[var(--text-muted)] text-[10px] lg:text-[0.7vw]">
              Total Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;