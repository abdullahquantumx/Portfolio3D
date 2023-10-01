import React from "react";
import styled from "styled-components";

const Skills = () => {
  const jsonData = {
    mlSkills: [
      "Deep Learning (TensorFlow)",
      "Pandas and Numpy ",
      "Data Analysis and Visualization",
      "Sklearn",
    ],
    webDevelopmentSkills: {
      frontEnd: ["HTML5", "CSS3","Pug", "JavaScript (ES6+)", "React.js"],
      backEnd: ["Node.js","Flask"],
    },
    otherSkills: [
      "Responsive Web Design",
      "API Testing",
    ],
  };

  const renderSkills = (skills) => {
    return (
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>"{skill}",</span>
        ))}
      </div>
    );
  };

  return (
    <>
      <div id="skills"></div>
      <Container>
        <div className="SkillSection">
        <StyledHeader>Skills= &#123; </StyledHeader>
        <StyledJSON>
            <span className="heading">ML Skills:</span>[{renderSkills(jsonData.mlSkills)}]<br />
            <span className="heading">Web Development Skills:</span> [{renderSkills(jsonData.webDevelopmentSkills.frontEnd)} ]<br />
            <span className="heading">Back End Skills:</span>[ {renderSkills(jsonData.webDevelopmentSkills.backEnd)}] <br />
            <span className="heading">Other Skills:</span> [{renderSkills(jsonData.otherSkills)} ]<br />
          </StyledJSON>
          <StyledHeader> &#125; </StyledHeader>
        </div>
        <div className="GIFcontainer">
          <img alt="" src="./pictures/foodpanda-food.gif" />
          
        </div>

      </Container>
    </>
  );
};

export default Skills;
const Container = styled.div`
  height: 100vh;
  /* background-color: black; */
  background: rgba(0,0,0,0.9)url('./pictures/digitization-1599552_1280.webp')no-repeat center center/cover;
  background-blend-mode: darken;
  color: white;
  .GIFcontainer {
    max-width: 800px;
    position: absolute;
    right: 80px;
    top: 850px;
    border: 1px solid black;
  }
  .GIFcontainer img {
    width: 200px;
    height: 350px;
  }
  .SkillSection {
    padding-top: 100px;
    padding-left: 100px;
  }
`;
const StyledJSON = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 14px;
  color: #ffffff;

  .heading {
    font-size: 30px;
    color: yellow;
    text-shadow: 0 0 10px yellow;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: white;
    font-size: 17px;
  }
`;
const StyledHeader = styled.h1`
 
    color: purple;
 
`