import React, {useState} from "react";
import "./Landing.scss";
import logo from "../../assets/user.png";
import vector from "../../assets/Vector 1.svg";
import BurgerBTN from "./BurgerBTN.jsx";
export default function Landing({ onScrollToSection, refs }) {

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

  return (
    <div className="landing">
      <div className="landing-header">
        <div className="landing-header-logo">
          <img src={logo} alt="logo" />
          <h1>Frontend Developer</h1>
        </div>
        {window.innerWidth > 675 ? (
          <ul>
            <li onClick={() => onScrollToSection(refs.section1Ref)}>About</li>
            <li onClick={() => onScrollToSection(refs.section2Ref)}>
              Services
            </li>
            <li onClick={() => onScrollToSection(refs.section3Ref)}>Contact</li>
          </ul>
        ) : (
          <div>
            <BurgerBTN  onClick={toggleMenu}/>
          </div>
        )}

        <div className={`drop_button_menu ${isOpen ? "visible" : "hiden"}`}>
          <ul>
            <li onClick={() => onScrollToSection(refs.section1Ref)}>About</li>
            <li onClick={() => onScrollToSection(refs.section2Ref)}>
              Services
            </li>
            <li onClick={() => onScrollToSection(refs.section3Ref)}>Contact</li>
          </ul>
        </div>
      </div>

      <div className="landing-main">
        <img src={vector} alt="vector" />
        <div className="landing-main-content">
          <h1>Creating a Web Interface for Your Site</h1>
          <p>
            I am engaged in creating the front-end part of the site, creating
            layouts in Figma, layout according to the layout
          </p>
          <div className="landing-main-content-button">
            <a className="landing-main-content-button-contact">Contact me</a>
            <a className="landing-main-content-button-works">My works</a>
          </div>
        </div>
      </div>
    </div>
  );
}
