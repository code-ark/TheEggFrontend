import React, { useState } from "react"
import { Jumbotron } from "react-bootstrap"
import profilePhoto from "../images/noah.jpg"
import "./profile.css"

function Profile() {
  const [person, setPerson] = useState({
    firstName: "Noah",
    lastName: "King",
    university: "Harvard",
    major: "Computer Science",
    bio:
      "Grew up in Sacramento and then went to washington state and am currently working as the Lead Front-End Engineer at The Egg",
    experience: ["Real Estate Agent", "Software Engineer", "astronaut"],
    skills: ["javascript", "react", "node", "redux"],
  })

  const experience = (
    <ul>
      {person.experience.map(function (name, index) {
        return <li key={index}>{name}</li>
      })}
    </ul>
    
  )
const skills = (<ul>
  {person.skills.map(function (name, index) {
    return <li key={index}>{name}</li>
  })}
</ul>)
  return (
    <div className="profile-main">
      <div className="profile-bio">
        <Jumbotron style={{ backgroundColor: "#2e9a9a", borderRadius: "15px" }}>
          <div className="name-education">
            <img
              src={profilePhoto}
              width="50"
              height="75"
              className="profile-image"
            />
            <h5 style={{ padding: "10px", fontFamily: "montserrat" }}>
              {person.firstName} {person.lastName}
            </h5>
            {/* <p className="person-education">
              {person.university}, {person.major}
            </p> */}
          </div>
          <br />
          <div className="bio-card">
            <p className="bio-header">Bio</p>
            <hr className="line-break"></hr>
            <p className="bio-info">{person.bio}</p>
            
            <p className='experience-header'>Experience:</p>
            <div className='experience-bullets'>

            {experience}
            </div>
            <div className='skills-bullets'>
              {skills}
            </div>
            
          </div>
        </Jumbotron>
      </div>
    </div>
  )
}

export default Profile
