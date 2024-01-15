import React from 'react'
import "../styles/project.css";

function projectItem({image, name}) {
  return (
    <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})`, backgroundColor: "#ffffff" }} className="bgImage" />
        <h1>{name}</h1>
    </div>
  )
}

export default projectItem