import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Navigate, useNavigate } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import { app } from "../firebase";

const Header = ({ user }) => {

    const menu = useRef(null)
    const links = useRef(null)
    const [toggle, setToggle] = useState(false)
    const navigate=useNavigate()

    const handleToggle = () => {
        setToggle(!toggle)
        menu.current.classList.toggle('hidden')
        links.current.classList.toggle('translate-y-[0]')
    }

    const Logout = () => {
        const auth=getAuth(app)
        auth.signOut()
        navigate('/')
        // return <Navigate to='/'></Navigate>
    }

    return (<>
        <header className='py-4 px-6 bg-teal shadow-lg shadow-indigo-500/40 flex justify-between items-center'>
            <h1 className='text-2xl sm:text-3xl text-center font-bold text-white cursor-pointer' onClick={()=>navigate('/')}>ShortLinkify</h1>
            <div className="links">
                <ul className="hidden md:flex justify-evenly text-white gap-5">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/myurls'>My URLs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/url'>Generate URL</NavLink>
                    </li>
                    <li>
                        {!user ? <NavLink to='/login'>Login</NavLink> : <button className="text-white border-none cursor-pointer" onClick={Logout}>Logout</button>}
                    </li>
                </ul>
                <div className="hamburger md:hidden">
                    {(toggle) ? <IoMdClose className="text-white text-2xl cursor-pointer" onClick={handleToggle} /> : <GiHamburgerMenu className="cursor-pointer text-white text-2xl" onClick={handleToggle} />}
                </div>
            </div>
        </header>
        <div ref={menu} className="menu px-3 py-2 hidden">
            <ul ref={links} className="transition-all float-right text-[#03A680] bg-white duration-500 w-fit px-3 rounded py-2 text-sm translate-y-[-10rem] shadow-lg">
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-black font-medium" : ""} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-black" : ""} to='/myurls'>My URLs</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-black" : ""} to='/url'>Generate URL</NavLink>
                </li>
                <li>
                    {!user ? <NavLink className={({ isActive }) => isActive ? "text-black" : ""} to='/login'>Login</NavLink> : <button onClick={Logout} className="text-[#03A680] border-none cursor-pointer">Logout</button>}
                </li>
            </ul>
        </div>
    </>
    )
}

export default Header