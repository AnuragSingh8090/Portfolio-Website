import "./Home.css";
import { NavLink, Link } from "react-router-dom";
import Skills from "../../components/skills/Skills";
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { LiaFileDownloadSolid } from "react-icons/lia";
import Homepage_mobile from "../../components/homepage-mobile/Homepage-mobile";
import { useResponsive } from "../../hooks/useResponsive";
import { homepageData } from "../../data/homepage";

const Home = () => {
  const { isDesktop, isMobile } = useResponsive();
  const { personal, description, intro, cards, codeProfile, codeFunction, footer, resume, cta } = homepageData;

  // Render mobile version
  if (isMobile) {
    return <Homepage_mobile />;
  }

  // Render desktop version
  return (
    <div className="mainContainer pb-[60px] lg:pb-0 w-full lg:h-[90%] lg:w-[85%] lg:rounded-2xl lg:overflow-hidden pageAnimation">
      <div className="header bg-[#111a16] sticky z-[99] top-0 left-0 lg:static py-5 lg:py-0 lg:h-[14%] gap-3 flex items-center justify-between px-4">
        <div className="shrink-0">
          <div className="flex items-end gap-3 text-[1.2vw] text-[#9f9fa8]">
            Hi, I am
            <h3 className="text-[2.4vw] text-[#fff] font-[600] leading-none text-shadow-2xl">
              {personal.displayName}
            </h3>
            <span className="text-[1.8vw] transition-all duration-300 handShake">
              👋
            </span>
          </div>
          <p className="text-[1.2vw] mt-2 text-[#9f9fa8]">
            {intro.desktop} <span className="text-[#64f196]">{personal.company}</span>
          </p>
        </div>
        
        <div className="flex items-center gap-[3vw]">
          <a href={resume.filename} download className="flex items-center whitespace-nowrap gap-[0.3vw] text-[1.2vw] text-[#898989] hover:text-[#d4d4d4] bg-[#1c2121] border-[1px] border-[#2e3033] cursor-pointer transition-all duration-300 hover:border-[#bebebe] rounded-3xl px-[0.8vw] py-[0.4vw]">
            <LiaFileDownloadSolid className="mb-[0.2vw]"/>
            {resume.text}
          </a>

          <dir className="hidden lg:flex items-center justify-end gap-[1vw] navlinkContainer">
            <NavLink to="/" className="text-[1.2vw] text-[#9f9fa8] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[#18181b] flex items-center justify-center border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300 hover:text-white rounded-full">
              <FaUserTie />
            </NavLink>

            <NavLink to="/projects" className="text-[1.3vw] text-[#9f9fa8] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[#18181b] flex items-center justify-center border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300 hover:text-white rounded-full">
              <IoDocumentTextOutline />
            </NavLink>

            <NavLink to="/contact" className="text-[1.3vw] text-[#9f9fa8] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[#18181b] flex items-center justify-center border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300 hover:text-white rounded-full">
              <TiContacts />
            </NavLink>
          </dir>
        </div>
      </div>

      <div className="main bg-[#111111] lg:h-[86%] flex flex-col justify-between gap-7 px-7 py-5">
        <div className="h-[63%] w-full flex justify-between gap-4">
          <div className="h-full w-[22%] flex flex-col justify-between gap-4">
            <div className="h-[80%] w-full rounded-xl maskImage disableDrag cursor-pointer">
              <img 
                src={personal.profileImage.desktop} 
                alt={personal.displayName} 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-[none] active:grayscale-[none] transition-all duration-700" 
              />
            </div>
            <Link to='/contact' className="h-[15%] relative w-full overflow-hidden bg-[#18181b] border-[1px] border-[#27272a] rounded-lg shrink-0 cursor-pointer flex items-center justify-center hover:scale-[101%] transition-all duration-300">
              <p className="text-[1.1vw] text-[#d5d5d5] font-[400] text-center p-2 uppercase h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-lg bg-[#18181b] z-3 flex items-center justify-center">
                {cta.text}
              </p>
              <div className="w-[calc(100%-30px)] h-[10%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="w-[2vw] h-[10%] absolute top-[50%] translate-y-[-50%] left-2 rotate-box"></div>
              </div>
            </Link>
          </div>

          <div className="h-full w-[78%] flex justify-between flex-col gap-3 px-5 py-3 bg-[#18181b] border-[1px] border-[#27272a] rounded-xl">
            <p className="text-white text-[1.2vw] line-clamp-5 letter-spacing tracking-wider h-max">
              {description.desktop}
            </p>

            <div className="flex w-full items-center justify-between gap-4 h-[36%]">
              <div className="w-1/3 h-full bg-[#27272a] rounded-lg flex flex-col justify-between gap-3 px-4 py-4 hover:scale-[105%] transition-all duration-300 cursor-pointer">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal w-5 h-5 mr-2 text-purple-400">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" x2="20" y1="19" y2="19"></line>
                  </svg>
                  <span className="text-[#c085fd] text-[1.3vw]">{cards.skills.title}</span>
                </p>
                <p className="text-[1vw] text-[#dfdfdf]">{cards.skills.description.desktop}</p>
              </div>
              
              <div className="w-1/3 h-full bg-[#27272a] rounded-lg flex flex-col justify-between gap-3 px-4 py-4 hover:scale-[105%] transition-all duration-300 cursor-pointer">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane-takeoff w-5 h-5 mr-2 text-green-500">
                    <path d="M2 22h20"></path>
                    <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path>
                  </svg>
                  <span className="text-[#2fc65e] text-[1.3vw]">{cards.hobbies.title}</span>
                </p>
                <p className="text-[1vw] text-[#dfdfdf]">{cards.hobbies.description.desktop}</p>
              </div>
              
              <div className="w-1/3 h-full bg-[#27272a] rounded-lg flex flex-col justify-between gap-3 px-4 py-4 hover:scale-[105%] transition-all duration-300 cursor-pointer">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket w-5 h-5 mr-2 text-blue-400">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                  <span className="text-[#5fa1f4] text-[1.3vw]">{cards.goal.title}</span>
                </p>
                <p className="text-[1vw] text-[#dfdfdf]">{cards.goal.description}</p>
              </div>
            </div>

            <p className="text-[1.2vw] italic text-[#b5b5b9] font-[300]">
              {footer.text}&nbsp;
              <span className="bg-[#ca8a02] text-black py-[3px] px-[6px] rounded-[4px]">{footer.batman}</span>
              &nbsp;{footer.butText}&nbsp;
              <span className="bg-[#ea580b] text-black py-[3px] px-[6px] rounded-[4px]">{footer.hero}</span>
              &nbsp;{footer.endText}
            </p>
          </div>
        </div>

        <Skills />

        <div className="h-[14%] w-full bg-[#18181b] px-6 py-3 flex items-center border-[1px] gap-[1.5vw] border-[#27272a] rounded-xl">
          <div className="flex items-center w-full h-full justify-between text-[1.2vw] tracking-[1px] font-[300] gap-3">
            <div className="flex items-center gap-[0.5vw]">
              <span className="text-[#26a946]">{'>'}</span>
              <span className="text-[#a2a2ab] flex items-center gap-[0.5vw]">
                const <span className="text-[#ab65f1]">profile</span> <span>{'='}</span> 
              </span>
              <span className="text-[#d4d4d8] text-[1vw]">{'{'}</span>

              <div className="flex items-center text-[1.1vw] gap-[1.5vw] leading-[1.4vw] px-[0.5vw]">
                <div>
                  <p className="text-[#d4d4d8]">name : <span className="text-[#64f196]">"{codeProfile.name}"</span>,</p>
                  <p className="text-[#d4d4d8]">passion : <span className="text-[#64f196]">"{codeProfile.passion}"</span>,</p>
                  <p className="text-[#d4d4d8]">objective : <span className="text-[#64f196]">"{codeProfile.objective}"</span>,</p>
                </div>

                <div>
                  <p className="text-[#d4d4d8]">expertise : <span className="text-[#64f196]">"{codeProfile.expertise}"</span>,</p>
                  <p className="text-[#d4d4d8]">status : <span className="text-[#64f196]">"{codeProfile.status}"</span>,</p>
                  <p className="text-[#d4d4d8]">experience : <span className="text-[#64f196]">"{codeProfile.experience}"</span>,</p>
                </div>
              </div>
              <span className="text-[#d4d4d8] text-[1vw]">{'}'}</span>          
            </div>

            <div className="flex items-start flex-col gap-[0.5vw] leading-[1vw]">
              <p className="text-[#ab65f1]">
                function : <span className="text-[#64f196]">{codeFunction.name}</span>
                <span className="text-[#d4d4d8] text-[1vw]">()</span> 
                <span className="text-[#d4d4d8] text-[1vw]">{"{"}</span>
              </p>
              <p className="text-[#d4d4d8]">return <span className="text-[#64f196]">"{codeFunction.return}"</span></p>
              <span className="text-[#d4d4d8] text-[1vw]">{'}'}</span>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;