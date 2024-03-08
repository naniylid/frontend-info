import { slides } from "./types";

const Slider: React.FC = () => {
  return (
    <div>
      <button>prev</button>
      <button>next</button>
      <div className="slider">
        {slides.map((slide) => (
          <div className="slider-card">
            <span className="slider-card--digit">{slide.digit}</span>
            <h4 className="slider-card--title">{slide.title}</h4>
            <p className="slider-card--desc">{slide.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
