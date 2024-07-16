import React from "react";
import "../HomeSection/HomeOne.css";
import bgvideo from "../HomeSection/videos/productview.mp4";
import bgvideo1 from "../HomeSection/videos/productview2.mp4";
import bgvideo2 from "../HomeSection/videos/productview3.mp4";
import bgvideo3 from "../HomeSection/videos/productview4.mp4";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperComponent } from "swiper/react";
import 'swiper/scss';
import Tryon from "./Tryons/Tryon";
const HomeOne = () => {
  return (
    <div className="Header_content">
      <div className="Header_one">
        <h1>
          <span>3D, AR & Virtual Try-On</span> <br />
          platform for online stores
        </h1>

        <p>
          The all in one no-code easy to use 3D and Augmented Reality software
          to increase <br /> conversions and maximize customer confidence.
        </p>

        <div className="btns">
          <button>TRY WEB DEMO</button>
          <button>GET STARTED</button>
        </div>
      </div>

      <div className="">
      <SwiperComponent
        className="Swiper container "
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
          <SwiperSlide className="">
            
            <video autoPlay loop muted>
              <source src={bgvideo} type="video/mp4" />
            </video>
          </SwiperSlide>
      
           <SwiperSlide>
            
            <video autoPlay loop muted>
              <source src={bgvideo1} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            
            <video autoPlay loop muted>
              <source src={bgvideo2} type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            
            <video autoPlay loop muted>
              <source src={bgvideo3} type="video/mp4" />
            </video>
          </SwiperSlide> 
        </SwiperComponent>
      </div>
     
    </div>
  );
};

export default HomeOne;
