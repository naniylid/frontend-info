import { useRef } from 'react';
import { slides } from './types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';

const Slider: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className='line slider-lit'>
      <button className='btn-slider' onClick={handlePrev}>
        &#60;
      </button>
      <button className='btn-slider' onClick={handleNext}>
        &#62;
      </button>
      <Swiper
        spaceBetween={14}
        slidesPerView={2}
        loop
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide className='slider-card' key={slide.digit}>
            <span className='slider-card--digit'>{`${slide.digit}/`}</span>
            <h4 className='slider-card--title'>{slide.title}</h4>
            <p className='slider-card--desc'>{slide.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
