import { NavLink } from "react-router-dom"
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";

const Navbar = ()=>{
    return (
        <div className="lg:hidden fixed justify-center bottom-0 left-0 w-screen border-[#2e3033] border  flex items-center shadow-xl gap-[3vw] bg-[#111a16] py-3 ">
          <dir className="flex items-center w-full justify-around   gap-[1vw] navlinkContainer">
            <NavLink
              to="/"
              className="text-[20px] h-[38px] w-[38px]  text-[#9f9fa8]  cursor-pointer bg-[#18181b] flex items-center justify-center  border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300   hover:text-white rounded-full "
            >
              <FaUserTie />
            </NavLink>

            <NavLink
              to="/projects"
              className="text-[20px] h-[38px] w-[38px] text-[#9f9fa8]   cursor-pointer bg-[#18181b] flex items-center justify-center  border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300   hover:text-white rounded-full "
            >
              <IoDocumentTextOutline />
            </NavLink>

            <NavLink
              to="/contact"
              className="text-[20px] h-[38px] w-[38px]  text-[#9f9fa8]   cursor-pointer bg-[#18181b] flex items-center justify-center  border-[1px] border-[#2e3033] hover:border-[#bebebe] transition-all duration-300  hover:text-white rounded-full "
            >
              <TiContacts />
            </NavLink>
          </dir>
        </div>
    )
}

export default Navbar