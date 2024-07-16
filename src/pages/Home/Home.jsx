import React from "react";
import { ReactComponent as Logo } from "../Home/verve.svg";
import HomeOne from "../../components/HomeSection/HomeOne";
import "../Home/Home.css";
import Tryon from "../../components/HomeSection/Tryons/Tryon";

const Home = () => {
  return (
    <div className="Home_Header">
      <div className="header">
        <div className="logo">
          <Logo width={50} height={50} />
          <h3>VerveAR</h3>
        </div>
        <div className="nav_content">
          <li>
            <a href="#">Use case</a>
          </li>
          <li>
            <a href="">Software</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Dashboard</a>
          </li>
        </div>
      </div>
      <HomeOne/>
      <Tryon/>
    </div>
  );
};

export default Home;
