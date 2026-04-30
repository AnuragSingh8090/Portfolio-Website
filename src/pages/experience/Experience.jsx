import "./Experience.css";
import { NavLink } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { MdWorkOutline } from "react-icons/md";
import { FaBuilding, FaMapMarkerAlt, FaClock, FaTrophy } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { experienceData } from "../../data/experience";
import { TechStack } from "../../components/tech/Tech";
import ScrollToTop from '../../components/ScrollToTop';
import ThemeToggle from "../../components/theme-toggle/ThemeToggle";

const Experience = () => {
  const totalExperience = experienceData.getTotalExperience();

  return (
    <div className="pb-[60px] lg:pb-0 w-full lg:h-[90%] lg:w-[85%] lg:rounded-2xl lg:overflow-hidden pageAnimation">
      <ScrollToTop />
      
      {/* Header */}
      <div className="header bg-[var(--bg-tertiary)] sticky z-[99] top-0 left-0 lg:static py-5 lg:py-0 lg:h-[14%] gap-3 flex items-center justify-center lg:justify-between px-7">
        <div className="shrink-0">
          <div className="flex items-center gap-3 text-[1.2vw] text-[var(--text-muted)]">
            <h3 className="text-[22px] lg:text-[2.4vw] text-[var(--text-primary)] font-[600] leading-none text-shadow-2xl">
              Experience
            </h3>
            <span className="text-[22px] h-[22px] w-[22px] lg:text-[1.8vw] lg:w-[2.2vw] lg:h-[2.2vw] text-[var(--text-primary)] transition-all duration-300">
              <MdWorkOutline />
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-[3vw]">
          <div className="flex items-center justify-end gap-[1vw] navlinkContainer">
            <NavLink
              to="/"
              className="text-[1.2vw] text-[var(--text-muted)] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[var(--bg-card)] flex items-center justify-center border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300 hover:text-[var(--text-primary)] rounded-full"
            >
              <FaUserTie />
            </NavLink>

            <NavLink
              to="/projects"
              className="text-[1.3vw] text-[var(--text-muted)] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[var(--bg-card)] flex items-center justify-center border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300 hover:text-[var(--text-primary)] rounded-full"
            >
              <IoDocumentTextOutline />
            </NavLink>

            <NavLink
              to="/experience"
              className="text-[1.3vw] text-[var(--text-muted)] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[var(--bg-card)] flex items-center justify-center border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300 hover:text-[var(--text-primary)] rounded-full"
            >
              <MdWorkOutline />
            </NavLink>

            <NavLink
              to="/contact"
              className="text-[1.3vw] text-[var(--text-muted)] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[var(--bg-card)] flex items-center justify-center border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300 hover:text-[var(--text-primary)] rounded-full"
            >
              <TiContacts />
            </NavLink>

            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main bg-[var(--bg-secondary)] lg:h-[86%] flex flex-col gap-7 px-7 py-5 overflow-y-auto">
        
        {/* Career Highlights */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <div className="bg-[var(--bg-card)] border-[1px] border-[var(--border-primary)] rounded-lg p-3 lg:p-4 text-center hover:scale-[102%] transition-all duration-300">
            <div className="text-[var(--accent-primary)] text-[20px] lg:text-[1.5vw] mb-2">
              <FaTrophy className="mx-auto" />
            </div>
            <div className="text-[var(--text-primary)] text-[16px] lg:text-[1.2vw] font-[600]">
              {experienceData.highlights.totalProjects}
            </div>
            <div className="text-[var(--text-muted)] text-[12px] lg:text-[0.8vw]">
              Projects
            </div>
          </div>

          <div className="bg-[var(--bg-card)] border-[1px] border-[var(--border-primary)] rounded-lg p-3 lg:p-4 text-center hover:scale-[102%] transition-all duration-300">
            <div className="text-[var(--accent-primary)] text-[20px] lg:text-[1.5vw] mb-2">
              <FaBuilding className="mx-auto" />
            </div>
            <div className="text-[var(--text-primary)] text-[16px] lg:text-[1.2vw] font-[600]">
              {experienceData.highlights.clientsSatisfied}
            </div>
            <div className="text-[var(--text-muted)] text-[12px] lg:text-[0.8vw]">
              Clients
            </div>
          </div>

          <div className="bg-[var(--bg-card)] border-[1px] border-[var(--border-primary)] rounded-lg p-3 lg:p-4 text-center hover:scale-[102%] transition-all duration-300">
            <div className="text-[var(--accent-primary)] text-[20px] lg:text-[1.5vw] mb-2">
              <BiCodeAlt className="mx-auto" />
            </div>
            <div className="text-[var(--text-primary)] text-[16px] lg:text-[1.2vw] font-[600]">
              {experienceData.highlights.technologiesMastered}
            </div>
            <div className="text-[var(--text-muted)] text-[12px] lg:text-[0.8vw]">
              Technologies
            </div>
          </div>

          <div className="bg-[var(--bg-card)] border-[1px] border-[var(--border-primary)] rounded-lg p-3 lg:p-4 text-center hover:scale-[102%] transition-all duration-300">
            <div className="text-[var(--accent-primary)] text-[20px] lg:text-[1.5vw] mb-2">
              <FaClock className="mx-auto" />
            </div>
            <div className="text-[var(--text-primary)] text-[16px] lg:text-[1.2vw] font-[600]">
              {totalExperience}
            </div>
            <div className="text-[var(--text-muted)] text-[12px] lg:text-[0.8vw]">
              Total Experience
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="w-full">
          <h4 className="text-[var(--text-primary)] text-[20px] lg:text-[1.6vw] font-[600] mb-4 lg:mb-6">
            Professional Journey
          </h4>
          
          <div className="space-y-6 lg:space-y-8">
            {experienceData.experiences.map((exp, index) => (
              <div key={exp.id} className="bg-[var(--bg-card)] border-[1px] border-[var(--border-primary)] rounded-lg p-4 lg:p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
                
                {/* Company & Position */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <h5 className="text-[var(--text-primary)] text-[16px] lg:text-[1.3vw] font-[600] flex items-center gap-2">
                      <span>{exp.position}</span>
                      <span className="text-[var(--text-muted)]">at</span>
                      <span className="text-[var(--accent-primary)]">{exp.company}</span>
                    </h5>
                  </div>
                  
                  <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                    <div className="flex items-center gap-2 text-[var(--text-secondary)] text-[14px] lg:text-[1vw] font-[500]">
                      <FaClock className="text-[12px] lg:text-[0.8vw]" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-[13px] lg:text-[0.9vw]">
                      <FaMapMarkerAlt className="text-[11px] lg:text-[0.7vw]" />
                      {exp.location} • {exp.type}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-[14px] lg:text-[1.1vw] mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h6 className="text-[var(--text-primary)] text-[14px] lg:text-[1.1vw] font-[500] mb-2">
                    Technologies Used:
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[var(--bg-secondary)] border-[1px] border-[var(--border-primary)] text-[var(--text-muted)] px-2 lg:px-3 py-1 lg:py-2 rounded-md text-[12px] lg:text-[0.9vw] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h6 className="text-[var(--text-primary)] text-[14px] lg:text-[1.1vw] font-[500] mb-2">
                    Key Achievements:
                  </h6>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-[var(--text-secondary)] text-[13px] lg:text-[1vw] flex items-start gap-2"
                      >
                        <span className="text-[var(--accent-primary)] mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills by Category */}
        <div className="w-full">
          <h4 className="text-[var(--text-primary)] text-[18px] lg:text-[1.4vw] font-[600] mb-3 lg:mb-4">
            Technical Skills
          </h4>
          
          <div className="space-y-4 lg:space-y-6">
            {Object.entries(experienceData.skillsByCategory).map(([category, skills]) => (
              <div key={category} className="bg-[var(--bg-card)] border-[1px] border-[var(--border-primary)] rounded-lg p-3 lg:p-4">
                <h5 className="text-[var(--accent-primary)] text-[14px] lg:text-[1.1vw] font-[600] mb-2 lg:mb-3 capitalize">
                  {category}
                </h5>
                <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  <div className="flex gap-2 lg:gap-3 min-w-max">
                    {skills.map((skillKey, skillIndex) => {
                      const techItem = Object.values(TechStack).find(tech => tech.name.toLowerCase().replace(/\s+/g, '_') === skillKey || 
                        tech.name.toLowerCase().replace(/\s+/g, '') === skillKey.replace(/_/g, '') ||
                        skillKey === 'html' && tech.name === 'HTML' ||
                        skillKey === 'css' && tech.name === 'CSS' ||
                        skillKey === 'javascript' && tech.name === 'Javascript' ||
                        skillKey === 'typescript' && tech.name === 'Typescript' ||
                        skillKey === 'react' && tech.name === 'React' ||
                        skillKey === 'angular' && tech.name === 'Angular' ||
                        skillKey === 'nextjs' && tech.name === 'Next js' ||
                        skillKey === 'expressjs' && tech.name === 'Express js' ||
                        skillKey === 'tailwind_css' && tech.name === 'Tailwind css' ||
                        skillKey === 'bootstrap' && tech.name === 'Bootstrap' ||
                        skillKey === 'redux_toolkit' && tech.name === 'Redux Toolkit' ||
                        skillKey === 'swiperjs' && tech.name === 'Swiper js' ||
                        skillKey === 'gsap' && tech.name === 'Gsap' ||
                        skillKey === 'github' && tech.name === 'Github' ||
                        skillKey === 'postman' && tech.name === 'Postman' ||
                        skillKey === 'nodejs' && tech.name === 'Node js' ||
                        skillKey === 'firebase' && tech.name === 'Firebase' ||
                        skillKey === 'nodemailer' && tech.name === 'Nodemailer'
                      );
                      
                      if (!techItem) return null;
                      
                      return (
                        <div
                          key={skillIndex}
                          title={techItem.name}
                          className="h-[40px] w-[40px] lg:h-[3vw] lg:w-[3vw] p-2 lg:p-[0.5vw] border-[1px] border-[var(--border-primary)] rounded-lg shrink-0 hover:border-[var(--accent-primary)] transition-all duration-300 bg-[var(--bg-secondary)]"
                        >
                          {techItem.svg}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;