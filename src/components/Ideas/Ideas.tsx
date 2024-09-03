import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import './Ideas.module.scss';
import { Card } from './Card';
import { cards } from './types';

SwiperCore.use([Navigation]);

export const Ideas: React.FC = () => {
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 3) {
        groupedCards.push(cards.slice(i, i + 3));
    }

    return (
        <section id='ideas' className='ideas'>
            <h1>ИДЕИ ПРОЕКТОВ</h1>
            <p className='ideas__text'>
                Здесь представлены проекты для практики кода, рассчитанные на различные уровни
                сложности
            </p>
            <div className='main-line'></div>
            <div className='cards'>
                <Swiper
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.btn-slider-prev',
                        nextEl: '.btn-slider-next',
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 1.7,
                        },
                        480: {
                            slidesPerView: 1.4,
                        },
                    }}
                >
                    {groupedCards.map((group, ind) => (
                        <SwiperSlide key={ind}>
                            {group.map((card, cardInd) => (
                                <Card
                                    key={cardInd}
                                    title={card.title}
                                    desc={card.desc}
                                    stack={card.stack}
                                    url={card.url}
                                />
                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='buttons'>
                    <button className='btn-slider btn-slider-prev'>&#60;</button>
                    <button className='btn-slider btn-slider-next'>&#62;</button>
                </div>
            </div>
        </section>
    );
};
