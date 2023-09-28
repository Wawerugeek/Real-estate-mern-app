import React from "react";
import "./Hero.css";
import hero from "../../assets/logo.jpg";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flex-center hero-container">
        <div className="hero-left">
            <div className="hero-title">
                <h1> Discover our <br/> our most prestigious properties: </h1>
            </div>
            <div className="hero-des">
                <span> Discover any property anywhere in the world</span>
                <span> Anywhere in the world</span>
            </div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src={hero} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
