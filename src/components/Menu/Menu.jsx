import lebibLogo from "../../assets/logo/lebib.png";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

import "./Menu.css";

import { SECTIONS } from "../../constants/sections";
export default function Menu() {
  const { scrollContext, activeSection } = useContext(AppContext);

  const handleClick = (index) => {
    const sectionHeight = scrollContext.el.scrollHeight / SECTIONS.length;
    let scrollPosition = index * sectionHeight + index * 40 - 50;
    if (index === SECTIONS.length - 1) {
      scrollPosition = scrollContext.el.scrollHeight - 100;
    }

    scrollContext.el.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="menu">
      <img
        src={lebibLogo}
        alt="Lebib Logo"
        className="lebib-logo"
        style={{
          height: "90px",
        }}
      />
      <div className="menu-items">
        <div
          className={`menu-item ${activeSection === 0 ? "active" : ""}`}
          onClick={() => handleClick(0)}
        >
          <p>Global</p>
        </div>
        <div
          className={`menu-item ${activeSection === 1 ? "active" : ""}`}
          onClick={() => handleClick(1)}
        >
          <p>Caméra</p>
        </div>
        <div
          className={`menu-item ${activeSection === 2 ? "active" : ""}`}
          onClick={() => handleClick(2)}
        >
          <p>Compartiments</p>
        </div>
        <div
          className={`menu-item ${activeSection === 3 ? "active" : ""}`}
          onClick={() => handleClick(3)}
        >
          <p>Capteurs</p>
        </div>
        <div
          className={`menu-item ${activeSection === 4 ? "active" : ""}`}
          onClick={() => handleClick(4)}
        >
          <p>CTA</p>
        </div>
      </div>
    </div>
  );
}
