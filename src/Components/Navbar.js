import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-black">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3"
                  to="intro"
                  aria-current="page"
                  href="/"
                  spy={true} smooth={true} duration={160}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="skills"
                  spy={true} smooth={true} duration={160}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Work Experience</a> */}
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="work"
                  spy={true} smooth={true} duration={160}
                >
                  Work Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3"
                  aria-current="page"
                  to="contact"
                  spy={true} smooth={true} duration={160}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
  font-size: 1.6rem;

  .nav-link {
    color: purple;
    position: relative;
    text-decoration: none; /* Remove default underline */
    
  }
  .nav-item{
    cursor: pointer;
  }

  .nav-link::before,
  .nav-link::after {
    content: "";
    position: absolute;
    bottom: -3px; /* Adjust the distance from the text to the underline */
    width: 0;
    height: 2px;
    background: purple;
    transition: all 0.3s ease-in-out;
    transform-origin: center; /* Set transform origin to center */
  }

  .nav-link::before {
    left: 50%;
    transform: translateX(-80%); /* Center the underline */
  }

  .nav-link::after {
    right: 50%;
    transform: translateX(80%); /* Center the underline */
  }

  .nav-link:hover::before,
  .nav-link:hover::after {
    width: 50%; /* Adjust the underline width on hover */
  }
  .nav-link:hover {
    color: rgba(128, 0, 128, 1); /* Change text color to glowing purple on hover */
  }
  .nav-link:hover::before,
  .nav-link:hover::after {
    width: 50%; /* Adjust the underline width on hover */
    box-shadow: 0 0 5px 0 rgba(128, 0, 128, 0.9); /* Purple glow on hover */
  }
`;
