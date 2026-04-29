
import "./Skills.css";
import { TechStack } from "../tech/Tech";

const Skills = () => {
  const skills = [
    TechStack.html,

    TechStack.css,

    TechStack.javascript,

    TechStack.react,

    TechStack.tailwind_css,

    TechStack.bootstrap,

    TechStack.angular,

    TechStack.typescript,

  TechStack.redux_toolkit,
 
  TechStack.swiperjs,

   TechStack.postman,

  TechStack.github,

    TechStack.gsap,

    

  ];

  return (
    <div className="h-max py-3 lg:h-[14%] w-full bg-[var(--bg-card)] border-[1px] border-[var(--border-primary)] gap-3 px-3 lg:px-6 lg:py-2 flex  lg:items-center flex-col lg:flex-row justify-between rounded-lg  lg:rounded-xl">
      <div className="h-full w-max shrink-0 text-[var(--text-secondary)] text-[18px] lg:text-[1.3vw] font-[600] flex items-center justify-center">
        Skills
      </div>
      <div className="h-full  w-full  flex items-center overflow-x-hidden  ">
        <div className="h-full px-[0.8vw]  flex items-center slidingAnimation gap-3 lg:gap-[0.8vw]">
          {skills.map((elem,index) => {
            return (
              <div title={elem.name}
                key={elem.id + index}
                className="h-[58px] w-[58px] lg:h-[4vw] p-3 lg:w-[4vw] border-[1px] border-[var(--border-primary)]  rounded-lg shrink-0"
              >
                {elem.svg}
              </div>
            );  
          })}
          {skills.map((elem,index) => {
            return (
              <div title={elem.name}
                key={elem.id * index}
                className="h-[58px] w-[58px] lg:h-[4vw] p-3 lg:w-[4vw] border-[1px] border-[var(--border-primary)]  rounded-lg shrink-0"
              >
                {elem.svg}
              </div>
            );  
          })}
          {skills.map((elem,index) => {
            return (
              <div title={elem.name}
                key={elem.id * index + 3}
                className="h-[58px] w-[58px] lg:h-[4vw] p-3 lg:w-[4vw] border-[1px] border-[var(--border-primary)]  rounded-lg shrink-0"
              >
                {elem.svg}
              </div>
            );  
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
