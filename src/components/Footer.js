import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon/>
        </div>
        <p> &copy; Nhan D. Ton 2023 </p>
    </div>
  )
}

export default Footer