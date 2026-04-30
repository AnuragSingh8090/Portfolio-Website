import { NavLink } from "react-router-dom"
import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { MdWorkOutline } from "react-icons/md";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const Navbar = ()=>{
    return (
        <div className="lg:hidden fixed justify-center bottom-0 left-0 w-screen border-[var(--border-secondary)] border  flex items-center shadow-xl gap-[3vw] bg-[var(--bg-tertiary)] py-3 ">
          <dir className="flex items-center w-full justify-around   gap-[1vw] navlinkContainer">
            <NavLink
              to="/"
              className="text-[20px] h-[38px] w-[38px]  text-[var(--text-muted)]  cursor-pointer bg-[var(--bg-card)] flex items-center justify-center  border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300   hover:text-[var(--text-primary)] rounded-full "
            >
              <FaUserTie />
            </NavLink>

            <NavLink
              to="/projects"
              className="text-[20px] h-[38px] w-[38px] text-[var(--text-muted)]   cursor-pointer bg-[var(--bg-card)] flex items-center justify-center  border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300   hover:text-[var(--text-primary)] rounded-full "
            >
              <IoDocumentTextOutline />
            </NavLink>

            <NavLink
              to="/experience"
              className="text-[20px] h-[38px] w-[38px] text-[var(--text-muted)]   cursor-pointer bg-[var(--bg-card)] flex items-center justify-center  border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300   hover:text-[var(--text-primary)] rounded-full "
            >
              <MdWorkOutline />
            </NavLink>

            <NavLink
              to="/contact"
              className="text-[20px] h-[38px] w-[38px]  text-[var(--text-muted)]   cursor-pointer bg-[var(--bg-card)] flex items-center justify-center  border-[1px] border-[var(--border-secondary)] hover:border-[var(--border-hover)] transition-all duration-300  hover:text-[var(--text-primary)] rounded-full "
            >
              <TiContacts />
            </NavLink>

            <ThemeToggle />
          </dir>
        </div>
    )
}

export default Navbar