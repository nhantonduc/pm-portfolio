import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {Link} from 'react-scroll'
import "../styles/navbar.css"
import { navLinks } from "../helpers/navLinks";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [active, setActive] = useState(""); 
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);
  return (
    <div className = "navbar" id={expandNavbar ? "open": "close"}>
        <h1 className='title'><Link to={"/home"}>Nhan D. Ton</Link></h1>
        <div className = "toggleButton">
            {navLinks.map((link) => (
                <div
                key={link.id}
                className={`${
                    active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {{setActive(link.title)} setExpandNavbar((prev) => !prev)}}
                >
                <a smooth={true} href={`#${link.id}`}>{link.title}</a>
                </div>
            ))}
        </div>
        <div className = "links">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link className = "nav" to={link.id} smooth={true} spy={true} offset={-90} duration={500}>{link.title}</Link>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Navbar
