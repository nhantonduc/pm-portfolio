import React from 'react'
import "../styles/home.css";
import SectionWrapper from "../hoc/SectionWrapper.js";

const Home = () => {
  return (
    <div className="home" >
        <div className="about">
            <h2>Hi, I am <span className="name">Nhan</span></h2>
            <div className="prompt">
                <p>An aspiring Product Manager with a passion for entrepreneurship, and
                  proficiency in technical, product discovery, and data analysis skills </p>
            </div>
        </div>
    </div>
  )
}

export default SectionWrapper(Home, "home");