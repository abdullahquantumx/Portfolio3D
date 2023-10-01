import React from 'react'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import styled from 'styled-components'
import Intro from './Components/Intro'
import Work from './Components/Work'

const App = () => {
  return (
    <>
    <Navbar/>
    <Container>
    <div className='components'>
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
    </Container>
    </>
  )
}

export default App
const Container = styled.div`
.components{
  
}
`