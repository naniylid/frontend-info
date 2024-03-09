// import { useState } from "react";
import { slides } from "./types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider: React.FC = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const handlePrev = () => {
  //   if (currentSlide > 0) {
  //     setCurrentSlide(currentSlide - 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (currentSlide < slides.length - 1) {
  //     setCurrentSlide(currentSlide + 1);
  //   }
  // };

  return (
    <Swiper
      spaceBetween={14}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="line slider-lit"
    >
      {slides.map((slide) => (
        <SwiperSlide className="slider-card" key={slide.digit}>
          <span className="slider-card--digit">{`${slide.digit}/`}</span>
          <h4 className="slider-card--title">{slide.title}</h4>
          <p className="slider-card--desc">{slide.desc}</p>
        </SwiperSlide>
      ))}
    </Swiper>

    // <div className="line slider-lit">
    // <button onClick={handlePrev}>prev</button>
    // <button onClick={handleNext}>next</button>
    //   <div className="slider">
    // {slides.map((slide) => (
    //   <div className="slider-card">
    //     <span className="slider-card--digit">{`${slide.digit}/`}</span>
    //     <h4 className="slider-card--title">{slide.title}</h4>
    //     <p className="slider-card--desc">{slide.desc}</p>
    //   </div>
    // ))}
    //   </div>
    // </div>
  );
};

export default Slider;
