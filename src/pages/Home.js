import React from 'react'
import "../styles/home.css";
import { Element } from 'react-scroll';
import SectionWrapper from "../hoc/SectionWrapper.js";

const Home = () => {
  return (
    <Element  name="home">
    <div className="home" >
        <div className="about">
            <h2>Hi, my name is Nhan!</h2>
            <div className="prompt">
                <p>insert description</p>
            </div>
        </div>
    </div>
    </Element>
  )
}

export default SectionWrapper(Home, "home");