import React from "react";
import styled from "styled-components";
import { FiMail } from 'react-icons/fi';
import { BsGithub,BsInstagram } from 'react-icons/bs';
import { FaKaggle} from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <div id="contact">
        <Container>
          <div className="container1">
            <img alt="/" src="./pictures/giphy-1.gif" />
          </div>
          <div className="container2">
            <h1 className="heading">Contact Me:</h1>
            <h3 className="heading1">abdullahquantum369@gmail.com</h3>
            <h3 className="heading1">Mobile No.7737XXX895</h3>
            <div className="icon">
            <h3><a className='Email'href="mailto:abdullah369@gmail.com"><FiMail/></a></h3>
            <h3><a className='Email'href="https://github.com/abdullahquantumx"><BsGithub/></a></h3>
            <h3><a className='Email'href="https://www.instagram.com/abdullah_01one/"><BsInstagram/></a></h3>
            <h3><a className='Email'href="https://www.kaggle.com/abdullah754siddiqui"><FaKaggle/></a></h3>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
const Container = styled.div`
  height: 100vh;
  /* background-color: black; */
  background: rgba(0,0,0,0.75)url('./pictures/cyber-3400789_1280.webp')no-repeat center center/cover;
  background-blend-mode: darken;
  color: white;
  .container1 img {
    border-radius: 20px;
    width: 500px;
    height: 360px;
    max-width: 800px;
    position: absolute;
    left: 90px;
    top: 2500px;
    opacity: 0.5;
  }
  .container2{
  /* border: 4px solid red; */
  max-width: 800px;
  position: absolute;
  right: 100px;
  top: 2520px;
}
  .icon{
    display: flex;
    gap: 30px;
    /* justify-content: center; */
  }
  .Email{
    color: white; 
  }
  .heading{
    color: yellow;
    font-size: 40px;
    text-shadow: 0 0 10px yellow;
  }
  .heading1{
    color: white;
    font-size: 40px;
    text-shadow: 0 0 6px white;
  }
`;
