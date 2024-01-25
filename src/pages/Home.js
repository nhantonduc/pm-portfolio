import React from 'react'
import "../styles/home.css";
import SectionWrapper from "../hoc/SectionWrapper.js";

const Home = () => {
  return (
    <div class="w-full items-center text-black p-0 m-0">
        <div className="about w-full h-[calc(100vh-400px)] ml-60 mt-150 flex justify-center items-center text-left bg-black">
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