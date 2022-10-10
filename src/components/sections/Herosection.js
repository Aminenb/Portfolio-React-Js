import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';

function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          
          <img src="images/maphoto.jpg" className="maphoto mb-4" alt="AmineNaitBachir" />
          <h1 className="mb-2 mt-0">Amine NAIT BACHIR</h1>
          <p>
            I'm a{" "}
            <Typed
              strings={[
                "Front-End developer",
                "Back-End developer",
                "Fullstack developer",
                "UI/UX designer ",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
          <li className="list-inline-item">
              <a target="_blank" href="https://www.linkedin.com/in/amine-nait-bachir-066220/">
                <i className="fab fa-linkedin"></i>
              </a>
          </li> 
          <li className="list-inline-item">
              <a target="_blank" href="https://web.facebook.com/amine.naitbachir.77/">
                <i className="fab fa-facebook"></i>
              </a>
          </li> 
          <li className="list-inline-item">
              <a target="_blank" href="https://www.instagram.com/aminenaitbachiir/">
                <i className="fab fa-instagram"></i>
              </a>
          </li> 
            
            
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
