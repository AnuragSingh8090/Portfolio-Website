import { Link } from "react-router-dom";
import Skills from "../../components/skills/Skills";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { PiUserList } from "react-icons/pi";
import { homepageData } from "../../data/homepage";

const Homepage_mobile = () => {
    const { personal, description, intro, cards, codeProfile, codeFunction, footer, resume, cta } = homepageData;

    return (
        <div className="mainContainer pb-[60px] py-3 px-3 lg:pb-0 w-full pageAnimation">
            <header className="bg-[var(--bg-tertiary)] sticky z-[99] top-0 left-0 py-4 rounded-lg mb-3">
                <div className="flex items-center flex-row-reverse justify-center w-full gap-3 text-[1.2vw] text-[var(--text-muted)]">
                    <span className="text-[27px] text-[var(--accent-secondary)] transition-all duration-300 userPulse">
                        <PiUserList className="mb-[3px]" />
                    </span>
                    <h3 className="text-[22px] lg:text-[2.4vw] text-[var(--text-primary)] font-[600] leading-none text-shadow-2xl">
                        My Profile
                    </h3>
                </div>
            </header>

            <div className="bg-[var(--bg-tertiary)] w-full h-full rounded-lg justify-between p-3 flex flex-col items-center justify-center gap-3 min-[500px]:flex-row min-[500px]:gap-8 overflow-hidden">
                <div className="h-[57vw] max-h-[290px] shrink-0 max-w-none w-auto min-[500px]:w-[48vw] min-[500px]:max-w-[230px] rounded-xl maskImage disableDrag cursor-pointer">
                    <img 
                        src={personal.profileImage.mobile} 
                        alt={personal.mobileDisplayName} 
                        className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-[none] active:grayscale-[none] transition-all duration-700" 
                    />
                </div>

                <div className="py-2 grow-1 flex flex-col gap-1 justify-between">
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] sm:text-[18px] leading-[28px] text-[var(--text-muted)]">
                            Hi, I am 
                            <span className="text-[var(--text-primary)] text-[28px] sm:text-[35px] mx-2 font-[500]">
                                {personal.mobileDisplayName}
                            </span> 
                            <span className="text-[20px] sm:text-[25px] inline-flex handShake">👋</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-[14px] sm:text-[18px] leading-[18px] text-[var(--text-muted)]">
                                {intro.mobile} <span className="text-[var(--accent-primary)]">{personal.company}</span>
                            </p>
                            <a href={resume.filename} download className="flex items-center gap-1 text-[12px] sm:text-[14px] text-[var(--text-disabled)] hover:text-[var(--text-secondary)] bg-[var(--bg-card)] border-[1px] border-[var(--border-secondary)] cursor-pointer transition-all duration-300 hover:border-[var(--border-hover)] rounded-full px-2 py-1">
                                <LiaFileDownloadSolid className="text-[14px]"/>
                                {resume.text}
                            </a>
                        </div>
                    </div>
                    
                    <Link to='/contact' className="h-[15%] sm:h-[20%] relative w-full overflow-hidden bg-[var(--bg-card)] border-[1px] border-[var(--border-primary)] rounded-lg shrink-0 cursor-pointer flex items-center justify-center hover:scale-[101%] transition-all duration-300">
                        <p className="text-[10.5px] sm:text-[16px] text-[var(--text-secondary)] font-[400] text-center p-2 uppercase h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-lg bg-[var(--bg-card)] z-3 flex items-center justify-center">
                            {cta.text}
                        </p>
                        <div className="w-[calc(100%-30px)] h-[10%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <div className="w-[2vw] h-[10%] absolute top-[50%] translate-y-[-50%] left-2 rotate-box2"></div>
                        </div>
                    </Link>
                </div>
            </div>

            <main className="mt-3 py-2 px-3 bg-[var(--bg-secondary)] border-[1px] flex flex-col gap-3 border-[var(--border-primary)] rounded-lg">
                <p className="text-[15px] sm:text-[18px] sm:font-[300] sm:leading-[21px] leading-[18px] text-justify text-[var(--text-primary)]">
                    {description.mobile}
                </p>

                <div className="flex flex-col py-2 sm:flex-row gap-3">
                    <div className="w-full sm:w-1/3 bg-[var(--border-primary)] rounded-lg flex flex-col justify-between sm:justify-start gap-3 px-4 py-4 hover:scale-[101%] border-[1px] border-[var(--border-primary)] hover:border-[var(--accent-secondary)] transition-scale duration-200 cursor-pointer">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal w-5 h-5 mr-2 text-purple-400">
                                <polyline points="4 17 10 11 4 5"></polyline>
                                <line x1="12" x2="20" y1="19" y2="19"></line>
                            </svg>
                            <span className="text-[#c085fd] text-[15px]">{cards.skills.title}</span>
                        </p>
                        <p className="text-[17px] sm:text-[19px] sm:leading-[24px] leading-[19px] text-[var(--text-secondary)]">
                            {cards.skills.description.mobile}
                        </p>
                    </div>

                    <div className="w-full sm:w-1/3 bg-[var(--border-primary)] rounded-lg flex flex-col justify-between sm:justify-start gap-3 px-4 py-4 hover:scale-[101%] border-[1px] border-[var(--border-primary)] hover:border-[var(--accent-secondary)] transition-scale duration-200 cursor-pointer">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane-takeoff w-5 h-5 mr-2 text-green-500">
                                <path d="M2 22h20"></path>
                                <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path>
                            </svg>
                            <span className="text-[#2fc65e] text-[15px]">{cards.hobbies.title}</span>
                        </p>
                        <p className="text-[17px] sm:text-[19px] sm:leading-[24px] leading-[19px] text-[var(--text-secondary)]">
                            {cards.hobbies.description.mobile}
                        </p>
                    </div>

                    <div className="w-full sm:w-1/3 bg-[var(--border-primary)] rounded-lg flex flex-col justify-between sm:justify-start gap-3 px-4 py-4 hover:scale-[101%] border-[1px] border-[var(--border-primary)] hover:border-[var(--accent-secondary)] transition-scale duration-200 cursor-pointer">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket w-5 h-5 mr-2 text-blue-400">
                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                            </svg>
                            <span className="text-[#5fa1f4] text-[15px]">{cards.goal.title}</span>
                        </p>
                        <p className="text-[17px] sm:text-[19px] sm:leading-[24px] leading-[19px] text-[var(--text-secondary)]">
                            {cards.goal.description}
                        </p>
                    </div>
                </div>

                <p className="text-[16px] mt-2 mx-1 italic text-[var(--text-muted)] font-[300]">
                    {footer.text}&nbsp;
                    <span className="bg-[#ca8a02] text-black py-[3px] px-[6px] rounded-[4px]">{footer.batman}</span>
                    &nbsp;{footer.butText}&nbsp;
                    <span className="bg-[#ea580b] text-black py-[3px] px-[6px] rounded-[4px]">{footer.hero}</span>
                    &nbsp;{footer.endText}
                </p>
            </main>

            <section className="my-3">
                <Skills />
            </section>

            <section className="mb-3 w-full bg-[var(--bg-card)] px-3 py-2 flex flex-col border-[1px] gap-3 border-[var(--border-primary)] rounded-lg">
                <p className="text-[var(--accent-secondary)] text-[18px] flex gap-2">
                    <span>root/admin/amit_yadav.js</span> 
                    <span className="mt-[2px] inline-block">{'%>'}</span>
                </p>

                <div className="text-[17px] tracking-wide">
                    <span className="text-[var(--text-muted)] flex items-center gap-2">
                        const <span className="text-[#ab65f1]">profile</span> 
                        <span className="mt-1">{'='}</span> 
                        <span className="mb-[2px]">{'{'}</span> 
                    </span>
                    <div className="ms-5">
                        <p className="text-[var(--text-secondary)]">name : <span className="text-[var(--accent-primary)]">"{codeProfile.name}"</span>,</p>
                        <p className="text-[var(--text-secondary)]">passion : <span className="text-[var(--accent-primary)]">"{codeProfile.passion}"</span>,</p>
                        <p className="text-[var(--text-secondary)]">objective : <span className="text-[var(--accent-primary)]">"{codeProfile.objective}"</span>,</p>
                        <p className="text-[var(--text-secondary)]">expertise : <span className="text-[var(--accent-primary)]">"{codeProfile.expertise}"</span>,</p>
                        <p className="text-[var(--text-secondary)]">status : <span className="text-[var(--accent-primary)]">"{codeProfile.status}"</span>,</p>
                        <p className="text-[var(--text-secondary)]">experience : <span className="text-[var(--accent-primary)]">"{codeProfile.experience}"</span>,</p>
                    </div>
                    <span className="text-[var(--text-muted)]">{'}'} </span>
                </div>

                <div className="text-[17px] tracking-wide">
                    <span className="text-[var(--text-muted)] flex items-center gap-2">
                        const <span className="text-[#ab65f1]">{codeFunction.name}</span> 
                        <span className="mt-1">{'='}</span> 
                        <span>{'( )'}</span> 
                        <span>{'{'}</span> 
                    </span>
                    <p className="text-[var(--text-secondary)] ms-5">return <span className="text-[var(--accent-primary)]">"{codeFunction.return}"</span></p>
                    <span className="text-[var(--text-muted)]">{'}'} </span>
                </div>
            </section>
        </div>
    );
};

export default Homepage_mobile;
