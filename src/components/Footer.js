import React from 'react';
import {Link} from 'react-router-dom'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <Link to="https://www.linkedin.com/in/tonducnhan/"><LinkedInIcon/></Link>
            <Link to="mailto:nhantonduc@gmail.com"><EmailIcon/></Link>
        </div>
        <p> &copy; Nhan D. Ton 2023 </p>
    </div>
  )
}

export default Footer