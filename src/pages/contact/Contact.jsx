import "./Contact.css";
import { NavLink,Link,useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { MdWorkOutline } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { IoSend } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import axios from 'axios'
import ScrollToTop from '../../components/ScrollToTop'
import ThemeToggle from "../../components/theme-toggle/ThemeToggle";



const Contact = () => {
  const [message,setMessage] = useState({
    name:'',
    email:'',
    message:''
  })

  const navigate = useNavigate();
  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [messageErr, setMessageErr] = useState(false)
  const [loading,setLoading] = useState(false)
  const [messageState, setMessageState] = useState('idle')
  const [buttonMgs, setButtonMsg] = useState(<span className="flex items-center gap-2 lg:gap-[0.5vw]">Send Message <IoSend  className="text-[16px] lg:text-[1vw]"/></span>)



  function handleError(){
    !message.name? setNameErr(true) : setNameErr(false)
    !message.email? setEmailErr(true) : setEmailErr(false)
    !message.message? setMessageErr(true) : setMessageErr(false)
  }


  // const URL = 'http://localhost:3000/sendemail';
  const URL = 'https://portfolio-backend-3f2x.onrender.com/sendemail';

  async function postData (){
    try{
      const response = await axios.post(URL, message);
      if(response.status === 200){
        setLoading(false)
        setMessageState('success')  
        setButtonMsg(<span className="flex items-center gap-2 lg:gap-[0.5vw] ">Message Sent <TiTick  className="text-[16px] lg:text-[1.6vw] mb-[0.3vw]"/></span>)

        setTimeout(()=>{
          setButtonMsg(<span className="flex items-center gap-2 lg:gap-[0.5vw]">Redirecting...  <FaSpinner className="animate-spin text-[16px] lg:text-[1.2vw]" /></span>)
          setTimeout(()=>{
                  setMessage({
          name:'',
          email:'',
          message:''
        })
             navigate('/')

          },1000)
        },2000)
      }
      else{
        setLoading(false)
        setMessageState('failed')
        setButtonMsg(<span className="flex items-center gap-2 lg:gap-[0.5vw] ">Message Falied <FaSkullCrossbones  className="text-[16px] lg:text-[1.1vw] mb-[0.3vw]"/></span>)
        setTimeout(()=>{
          setButtonMsg(<span className="flex items-center gap-2 lg:gap-[0.5vw]">Resend Message  <VscDebugRestart  className="animate-spin text-[16px] lg:text-[1.2vw]" /></span>)
        },2000)
      }
    }
    catch{
      setLoading(false)
      setMessageState('failed')
      setButtonMsg(<span className="flex items-center gap:2 lg:gap-[0.5vw] ">Resend Message <VscDebugRestart  className="text-[16px] lg:text-[1.1vw] mb-[0.3vw]"/></span>)
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!message.name || !message.email || !message.message){
      handleError()
    }
    else{
      handleError()
      setMessageState('idle')
      setLoading(true)
      postData()
    }
  }
  return (
    <div className="pb-[60px] lg:pb-0 w-full  lg:h-[90%] lg:w-[85%]  lg:rounded-2xl lg:overflow-hidden pageAnimation">
      <ScrollToTop />
      <div className="header bg-[var(--bg-tertiary)] sticky z-[99]  top-0 left-0 lg:static py-5 lg:py-0 lg:h-[14%] gap-3 flex items-center justify-center lg:justify-between px-7 ">
        <div className="shrink-0">
          <div className="flex items-center gap-3 text-[1.2vw] text-[var(--text-muted)]">
            <h3 className="text-[22px] lg:text-[2.4vw] text-[var(--text-primary)] font-[600] leading-none text-shadow-2xl">
              Let's Connect 
            </h3>{" "}
            <span className="text-[22px] h-[22px] w-[22px] lg:text-[1.8vw] lg:w-[2.2vw] lg:h-[2.2vw] transition-all duration-300 emailShake">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 128 128" viewBox="0 0 128 128"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="64" x2="64" y1="36.8329" y2="104.33"><stop offset="0" stopColor="#ffc107"/><stop offset="1" stopColor="#ffd54f"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="64" x2="64" y1="8.4562" y2="72.154"><stop offset="0" stopColor="#ffe082"/><stop offset=".9931" stopColor="#ffca28"/></linearGradient><path d="m120 104h-112c-2.2 0-4-1.8-4-4v-72c0-2.2 1.8-4 4-4h112c2.2 0 4 1.8 4 4v72c0 2.2-1.8 4-4 4z" fill="url(#a)"/><path d="m124 30.2v-2.2c0-2.2-1.8-4-4-4h-112c-2.2 0-4 1.8-4 4v2l59.9 46.1z" fill="url(#b)"/><g fill="#ffb300"><path d="m44.1 61.8-38.1 41.6c-.9-.5-1.6-1.4-1.8-2.5l37.8-41.2z"/><path d="m123.8 101.3c-.3 1-1 1.8-2 2.3l-38-41.9 2.2-2z"/><path d="m124 29v3.8l-60.1 45.2-59.9-45.4v-3.7l59.9 45.4z"/></g><path d="m120 27c.6 0 1 .5 1 1v72c0 .6-.4 1-1 1h-112c-.6 0-1-.4-1-1v-72c0-.5.4-1 1-1zm0-3h-112c-2.2 0-4 1.8-4 4v72c0 2.2 1.8 4 4 4h112c2.2 0 4-1.8 4-4v-72c0-2.2-1.8-4-4-4z" fill="#444" opacity=".2"/></svg>
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-end gap-[3vw] bg-[var(--bg-tertiary)] ">
          <dir className="flex items-center w-max justify-end  gap-[1vw] navlinkContainer">
            <NavLink
              to="/"
              className="text-[1.2vw] text-[var(--text-muted)] h-[2.5vw] w-[2.5vw] cursor-pointer bg-[var(--bg-card)] flex items-center justify-center  border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300   hover:text-[var(--text-primary)] rounded-full "
            >
              <FaUserTie />
            </NavLink>

            <NavLink
              to="/projects"
              className="text-[1.2vw] text-[var(--text-muted)] h-[2.5vw] w-[2.5vw]  cursor-pointer bg-[var(--bg-card)] flex items-center justify-center  border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300   hover:text-[var(--text-primary)] rounded-full "
            >
              <IoDocumentTextOutline />
            </NavLink>

            <NavLink
              to="/experience"
              className="text-[1.2vw] text-[var(--text-muted)] h-[2.5vw] w-[2.5vw]  cursor-pointer bg-[var(--bg-card)] flex items-center justify-center  border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300   hover:text-[var(--text-primary)] rounded-full "
            >
              <MdWorkOutline />
            </NavLink>

            <NavLink
              to="/contact"
              className="text-[1.2vw] text-[var(--text-muted)] h-[2.5vw] w-[2.5vw]  cursor-pointer bg-[var(--bg-card)] flex items-center justify-center  border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300  hover:text-[var(--text-primary)] rounded-full "
            >
              <TiContacts />
            </NavLink>

            <ThemeToggle />
          </dir>
        </div>
      </div>

      <div className="main  bg-[var(--bg-secondary)] lg:h-[86%] flex flex-col-reverse lg:flex-row  justify-between gap-7 px-7 py-5">
        <div className="lg:w-[40%] h-full  flex flex-col gap-7 rounded-lg lg:px-6 lg:py-4 w-full">
           <p className="text-[17px] lg:text-[1.6vw] text-[var(--text-secondary)] flex items-center gap-1.5">Social Links <IoShareSocial className="mb-[0.4vw]"/></p>

           <div className="flex flex-col gap-4">
              <Link to='https://wa.me/+918090674352' target="_blank" className="w-full border border-[var(--border-primary)] rounded-lg hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)] px-3 lg:px-[1vw] py-2 lg:py-[0.7vw] text-[15px] lg:text-[1.2vw] bg-[var(--bg-card)] text-[var(--text-muted)] flex items-center justify-between transition-all duration-300 hover:text-[var(--accent-primary)] cursor-pointer line-clamp-1"> <span className="flex items-center gap-2 lg:gap-[0.7vw]"><FaWhatsapp  className="mb-[0.3vw]"/> +91 8090674352</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></Link>
              <a href='mailto:anuragkumarsingh154@gmail.com' className="w-full border border-[var(--border-primary)] rounded-lg hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)] px-3 lg:px-[1vw] py-2 lg:py-[0.7vw] text-[15px] lg:text-[1.2vw] bg-[var(--bg-card)] text-[var(--text-muted)] flex items-center justify-between transition-all duration-300 hover:text-[var(--accent-primary)] cursor-pointer line-clamp-1"> <span className="flex items-center gap-2 lg:gap-[0.7vw]"><MdEmail  className="mb-[0.3vw]"/> anuragkumarsingh154@gmail.com</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></a>
              <Link to='https://www.linkedin.com/in/anurag-singh-lucknow/' target="_blank" className="w-full border border-[var(--border-primary)] rounded-lg hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)] px-3 lg:px-[1vw] py-2 lg:py-[0.7vw] text-[15px] lg:text-[1.2vw] bg-[var(--bg-card)] text-[var(--text-muted)] flex items-center justify-between transition-all duration-300 hover:text-[var(--accent-primary)] cursor-pointer line-clamp-1"> <span className="flex items-center gap-2 lg:gap-[0.7vw]"><FaLinkedin   className="mb-[0.3vw]"/> in/anurag-singh-lucknow</span>  <FaExternalLinkAlt className="mb-[0.3vw]" /></Link>
              <Link to='https://github.com/AnuragSingh8090' target="_blank" className="w-full border border-[var(--border-primary)] rounded-lg hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)] px-3 lg:px-[1vw] py-2 lg:py-[0.7vw] text-[15px] lg:text-[1.2vw] bg-[var(--bg-card)] text-[var(--text-muted)] flex items-center justify-between transition-all duration-300 hover:text-[var(--accent-primary)] cursor-pointer line-clamp-1"> <span className="flex items-center gap-2 lg:gap-[0.7vw]"><FaGithub  className="mb-[0.3vw]"/> github.com/AnuragSingh8090</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></Link>
              <Link to='https://www.instagram.com/01_anurag_10' target="_blank" className="w-full border border-[var(--border-primary)] rounded-lg hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)] px-3 lg:px-[1vw] py-2 lg:py-[0.7vw] text-[15px] lg:text-[1.2vw] bg-[var(--bg-card)] text-[var(--text-muted)] flex items-center justify-between transition-all duration-300 hover:text-[var(--accent-primary)] cursor-pointer line-clamp-1"> <span className="flex items-center gap-2 lg:gap-[0.7vw]"><GrInstagram className="mb-[0.3vw]"/> instagram.com/01_anurag_10</span>  <FaExternalLinkAlt className="mb-[0.3vw]"/></Link>
           </div>
        </div>

        <div className=" w-full lg:w-[60%] h-full border-[1px] border-[var(--border-primary)] px-4 lg:px-6 py-4 gap-6 flex flex-col rounded-lg bg-[var(--bg-card)]">
           <p className="text-[17px] lg:text-[1.6vw] text-[var(--text-secondary)] flex items-center gap-3">Let's Discuss Your Project <TiMessages className="mb-[0.4vw]"/></p>
           <form action="" className="flex flex-col gap-6 lg:gap-8 justify-between h-full " onSubmit={handleSubmit}>
              <div className="w-full shrink-0 relative ">
                <input type="text" placeholder="Your Name *" onChange={(elem)=>{ setMessage({...message, name : elem.target.value}); elem.target.value ? setNameErr(false) : setNameErr(true)}} value={message.name} className={`w-full  border rounded-md lg:rounded-lg  ${nameErr? ' border-[var(--error-primary)] focus:border-[var(--error-primary)] hover:border-[var(--error-primary)]' : ' border-[var(--border-primary)] hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)]'} transition-all duration-300 outline-none px-2 lg:px-[1vw] py-2 lg:py-[0.7vw] text-[15px] lg:text-[1.2vw] bg-[var(--bg-card-header)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)]`}/>
                {nameErr?(<p className="text-[var(--error-primary)] text-[13px] lg:text-[1.1vw] absolute bottom-[-22px] left-[0.3vw]">Name is required</p>) :''}  
              </div>
              
              <div className="w-full shrink-0 relative ">
                <input type="email" placeholder="Your Email *" onChange={(elem)=>{ setMessage({...message, email : elem.target.value}); elem.target.value ? setEmailErr(false) : setEmailErr(true)}} value={message.email}  className={`w-full  border rounded-md lg:rounded-lg   ${emailErr? ' border-[var(--error-primary)] focus:border-[var(--error-primary)] hover:border-[var(--error-primary)]' : ' border-[var(--border-primary)] hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)]'} transition-all duration-300 outline-none px-2 lg:px-[1vw] py-2 lg:py-[0.7vw] text-[15px] lg:text-[1.2vw] bg-[var(--bg-card-header)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)]`} />
                {emailErr?(<p className="text-[var(--error-primary)] text-[13px] lg:text-[1.1vw] absolute bottom-[-22px] left-[0.3vw]">Email is required</p>) :''}
              </div>

              <div className="w-full h-full relative">
                <textarea name="your-message" placeholder="Your Message *" onChange={(elem)=>{setMessage({...message, message : elem.target.value}); elem.target.value ? setMessageErr(false) : setMessageErr(true)}} value={message.message}  className={`w-full min-h-[140px] lg:h-full resize-none  border  rounded-md lg:rounded-lg ${messageErr? ' border-[var(--error-primary)] focus:border-[var(--error-primary)] hover:border-[var(--error-primary)]' : ' border-[var(--border-primary)] hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)]'} transition-all duration-300 outline-none px-2 lg:px-[1vw] py-2 lg:py-[0.7vw] text-[15px] lg:text-[1.2vw] bg-[var(--bg-card-header)] text-[var(--text-secondary)] placeholder:text-[var(--text-muted)]`}></textarea>
                {messageErr?(<p className="text-[var(--error-primary)] text-[13px] lg:text-[1.1vw] absolute bottom-[-22px] left-[0.3vw]">Message is required</p>) :''}
              </div>
              <button  className={`${loading ? 'pointer-events-none cursor-default' : 'pointer-events-auto' } ${messageState === 'failed' ? 'border-[var(--error-primary)] text-[var(--error-primary)] hover:border-[var(--error-primary)] focus:border-[var(--error-primary)] hover:text-[var(--error-primary)]' : ''} ${messageState === 'success' ? 'pointer-events-none cursor-default border-[var(--accent-primary)] hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] text-[var(--accent-primary)]' : ''} ${messageState === 'idle' ? 'border-[var(--border-primary)] hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] text-[var(--text-secondary)]' : ''} ${!message.name || !message.email || !message.message  ? 'disabled' : ''}  select-none relative w-max px-3 lg:px-[1vw] py-2 lg:py-[1vw] overflow-hidden border rounded-lg    outline-none  transition-all duration-300 bg-[var(--bg-card-header)] cursor-pointer`}>
                 <div className="p-0 h-full min-w-[120px] lg:min-w-[10vw] text-[16px] lg:text-[1.2vw] z-[3]  flex items-center justify-center gap-[0.5vw] cursor-pointer">
                  {
                   !loading ? buttonMgs : <span className="flex items-center gap-2 lg:gap-[0.5vw]">Sending  <FaSpinner className="animate-spin text-[16px] lg:text-[1.2vw]" /> </span>   
                  }
                 </div>
                 <div className={`absolute h-full  top-0 left-[-45%] shadowAnimation  ${messageState === 'failed' ? 'shadow-[0px_0px_20px_30px_var(--error-shadow)]' : 'shadow-[0px_0px_20px_30px_var(--success-shadow)]'}`}></div>
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


