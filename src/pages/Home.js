import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
        <div className="about">
            <h2>Hi, my name is Nhan!</h2>
            <div className="prompt">
                <p>insert description</p>
                <LinkedInIcon/>
                <EmailIcon/>
            </div>
        </div>
    </div>
  )
}

export default Home