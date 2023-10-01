import React from 'react'
import styled from 'styled-components'
const Intro = () => {
  return (
    <>
    <div id='intro'></div>
    <Container>
        <div className='container1'>
            <img alt='/'src='./pictures/hello-hi.gif'/>
            <h1>I'm Abdullah Siddiqui</h1>
            <a href="https://github.com/DenverCoder1/readme-typing-svg"><img alt='/'className='text'src="https://readme-typing-svg.herokuapp.com?&font=IBM+Plex+Sans&color=abcdef&size=20&lines=Welcome+to+my+Portfolio!+👋;" /></a>
            <h5>I am an active learner currently pursuing my B.Tech at NIT Rourkela, majoring in Electrical Engineering. I am enthusiastic about ML Ai ,Data Science and Web development.</h5>
            
        </div>
        <div className='container2'>
            <img alt='/'src='https://media2.giphy.com/media/VOgpnDOAddaN0zr9UE/giphy.gif?cid=da52fb6cvqkokzd4qd1l9gr9sqtnyjncq8gebn9v9etc4uwl&ep=v1_gifs_search&rid=giphy.gif&ct=g'/>
        </div>
    </Container>
    </>
  )
}

export default Intro
const Container = styled.div`
height: 100vh;
/* background-color: black; */
background: rgba(0,0,0,0.82)url('./pictures/abstract-blue-technology-background-vector.jpg')no-repeat center center/cover;
background-blend-mode: darken;

color: white;
.container1{
  /* border: 4px solid red; */
  max-width: 800px;
  position: absolute;
  left: 80px;
  top: 200px;
}
.container2{
  /* border: 4px solid green; */
  /* max-width: 800px; */
  position: absolute;
  right: 50px;
  top: 100px;
}
.container2 img{
    width: 500px;
    height: 500px;
}
.text{
   font: 2rem;
}
`
