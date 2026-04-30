import './Project-card.css'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";


export const Vlog_card = () => {
    return (
        <div className={`h-[210px] w-full lg:h-[30vh] border border-[var(--border-primary)] flex flex-col shadow-white-light rounded-lg bg-[var(--bg-card)] scaleup-animation overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[101%] hover:border-[var(--accent-primary)] group`}>
            <div className="header w-full h-[17%]  bg-[var(--bg-card-header)] px-[3%] py-[1%] flex items-center justify-between text-[var(--text-secondary)] text-[18px] lg:text-[1.25vw]">
                <div className='flex items-center gap-2 lg:gap-[0.6vw] w-[70%] group-hover:text-[var(--accent-primary)]'><FaGithub className=' mb-[0.2vw]' /><p className='line-clamp-1'>E-Commerce Website</p>  <FaExternalLinkAlt className=' mb-[0.2vw] text-[12px] lg:text-[1vw]' /></div>
                <div className=' text-[var(--text-disabled)] text-[14px] lg:text-[1vw] flex items-center justify-center'>12-04-2025</div>
            </div>
            <main className='grow-1 px-3 lg:px-[1vw] py-2 lg:py-[0.8vw] flex justify-between  flex-col gap-2 lg:gap-[1vw]'>
              <div className='lg:max-h-max h-2 grow-1 overflow-scroll'>
                <p className='text-[15px] lg:text-[1.2vw] font-[300] leading-[15px] lg:leading-[1.35vw]  lg:line-clamp-7 text-[var(--text-description)]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui fugit, omnis impedit dolore alias, optio magnam, repellat voluptas excepturi saepe voluptates suscipit ratione eos eaque mollitia. Minus, quidem exercitationem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui fugit, omnis impedit dolore alias, asdf  optio magnam, repellat voluptas excepturi saepe voluptates suscipit ratione eos eaque mollitia. Minus, quidem exercitationem.
                  </p>
              </div>
              <div className='flex w-full items-center justify-end'>
                <button className='text-[14px] lg:text-[0.9vw] border-[var(--text-description)] text-[var(--text-description)] border rounded-xl group-hover:text-[var(--accent-primary)] group-hover:border-[var(--accent-primary)]  cursor-pointer px-2.5 lg:px-[0.7vw] py-[0.2vw] flex gap-1 lg:gap-[0.2vw] items-center'>Read more <TiArrowRight className=' text-[16px] lg:text-[1.2vw]'/></button>
              </div>
            </main>
        </div>
    )
}
export const Project_card = ({data}) => {
    const handleTitleClick = (e) => {
        e.preventDefault();
        if (data.websiteUrl) {
            window.open(data.websiteUrl, '_blank');
        }
    };

    const handleGithubClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (data.githubUrl) {
            window.open(data.githubUrl, '_blank');
        }
    };

    return (
        <div className={`h-[210px] w-full lg:h-[30vh] border border-[var(--border-primary)] flex flex-col shadow-white-light rounded-lg bg-[var(--bg-card)] scaleup-animation overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[101%] hover:border-[var(--accent-primary)] group`}>
            <div className="header w-full h-[17%]  bg-[var(--bg-card-header)] px-[3%] py-[1%] flex items-center justify-between text-[var(--text-secondary)] text-[18px] lg:text-[1.25vw]">
                <div 
                    className='flex items-center gap-2 lg:gap-[0.6vw] w-[70%] group-hover:text-[var(--accent-primary)] cursor-pointer'
                    onClick={handleTitleClick}
                >
                    <FaGithub 
                        className='mb-[0.3vw] hover:scale-110 transition-transform duration-200' 
                        onClick={handleGithubClick}
                        title="View on GitHub"
                    />
                    <p className='line-clamp-1' title="Visit Website">{data.title || "Project Title"}</p>  
                    <FaExternalLinkAlt className=' mb-[0.2vw] text-[12px] lg:text-[1vw]' />
                </div>
                <div className=' text-[var(--text-disabled)] text-[14px] lg:text-[1vw] flex items-center justify-center'>{data.date || '00-00-0000'}</div>
            </div>
            <main className='grow-1 mx-[0.5vw] my-[0.4vw]   rounded-md overflow-hidden relative '>
                <img src={data.imgUrl || '/maxebels-banner.webp'} className='object-cover h-full w-full' alt="" />
                <div className='absolute bottom-[-100%] rounded-tl-xl rounded-tr-xl bg-[var(--bg-primary)] bg-opacity-80 flex flex-col justify-between z-[99] group-hover:bottom-[0] transition-all duration-500 px-2 lg:px-[0.5vw] py-2 lg:py-[0.4vw]  h-[85%] w-full border border-[var(--border-primary)]'>
                    <p className='text-[15px] lg:text-[1.2vw] font-[300] leading-[15px] lg:leading-[1.35vw] overflow-scroll grow-1 max-h-[67%]  text-[var(--text-description)]'>
                     {data.summary || "Summary of The project"}
                      </p>

                    <div className='flex gap-2 lg:gap-[0.5vw] items-center w-full overflow-scroll'>
                    { data.techStack?.map((elem, index) =>{
          return (
              <div title={elem.name} key={index} className="h-[30px] w-[33px] lg:h-[2.7vw] p-[7px] lg:w-[2.9vw] border-[1px] border-[var(--accent-primary)] bg-[var(--bg-card)] bg-opacity-60 rounded-lg shrink-0">
                {elem.svg}
              </div>
          )
       })}
                    </div>
                </div>
            </main>
        </div>
    )
}
