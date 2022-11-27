import React from "react";
import "./Home.css";
import sponsers1 from "../../images/client-audiophile.svg";
import sponsers2 from "../../images/client-databiz.svg";
import sponsers3 from "../../images/client-maker.svg";
import sponsers4 from "../../images/client-meet.svg";
import homeImg from "../../images/image-hero-desktop.png";
const Home = () => {
  return (
    <>
      <div className="main_home_conatiner">
        <div className="allText_conatiner">
          <div className="main_text">
            <h1>
              Make <br></br> remote work
            </h1>
          </div>
          <div className="paragraph">
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <div className="btn">
            <button>Learn More</button>
          </div>
          <div className="sponsers">
            <img src={sponsers1} alt="" />
            <img src={sponsers2} alt="" />
            <img src={sponsers3} alt="" />
            <img src={sponsers4} alt="" />
          </div>
        </div>
        <div className="home_img">
            <img src={homeImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
