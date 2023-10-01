import React from "react";
import styled from "styled-components";
import { BsGithub} from 'react-icons/bs';

const Work = () => {
  return (
    <Container>
      <div id="work"></div>
      <div className="card text-bg-dark mb-3" style={{ width: "18rem" }}>
        <img src="./pictures/1689969884278.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">HackOdisha 3.O</h5>
          <p className="card-text">
            Have a look to my project FOODCOASTER on my devfolio 
          </p>
          <a href="https://devfolio.co/projects/foodcoaster-31af" className="btn btn-primary">
            See Project
          </a>
        </div>
      </div>
        <div className="container2">
          <h1 className="heading"> Participated in HackOdisha 3.O</h1>
          <p>
          Participating in HackOdisha 3.0 was an exhilarating experience that broadened my horizons in the world of technology. Throughout the event, I delved deep into the realm of web development, specifically focusing on React. The opportunity to work on real-time projects and collaborate with talented individuals provided invaluable insights into the practical applications of React. Through hands-on coding, I gained a profound understanding of this powerful JavaScript library, enhancing my ability to create dynamic and interactive user interfaces. The hackathon not only honed my technical skills but also taught me the importance of teamwork, time management, and problem-solving under pressure. Overall, my participation in HackOdisha 3.0 was a transformative experience that equipped me with the knowledge and confidence to excel in the ever-evolving field of web development.
          </p>
          <h6 className="text">To see my further more interesting project Check out my GitHub Profile.</h6>
          <h1><a className='Email'href="https://github.com/abdullahquantumx"><BsGithub/></a></h1>
        </div>
    </Container>
  );
};

export default Work;
const Container = styled.div`
  height: 100vh;
  /* background-color: black; */
  color: white;
  background: rgba(0,0,0,0.75)url('./pictures/wOfzb7.jpg')no-repeat center center/cover;
  background-blend-mode: darken;
  .card{
    /* border: 7px solid red; */
    position: absolute;
    top: 1670px;
    margin-left: 200px;
    border-radius: 20px;
    opacity: 0.7;    
    transition: all 0.1s ease-in-out 0.1s;
    
  }
  .card:hover{
    box-shadow: 2px 1px 20px rgb(119,0,179);
  }
  .container2{
  /* border: 4px solid red; */
  max-width: 800px;
  position: absolute;
  right: 100px;
  top: 1670px;
  }
  .heading{
    color: yellow;
    font-size: 30px;
    text-shadow: 0 0 10px yellow;
  }
  .btn{
    background-color: rgb(119,0,179) ;
    border: none;
    transition: all 0.1s ease-in-out 0.1s;
  }
  .btn:hover{
    background-color: white ;
    border: none;
   color:black;
  }
  .text{
    color: purple;
    font-size: 20px;
    text-shadow: 0 0 10px purple;
  }
  .Email{
    color:purple;
  }
`;
