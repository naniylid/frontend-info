import { Link } from 'react-router-dom';
import resultSchool from '../../assets/image/result-school.png';
import rollingSSchool from '../../assets/image/rs-school.png';
import circle from '../../assets/image/circle.svg';
import star from '../../assets/image/star.svg';
import triangle from '../../assets/image/triangle.svg';
import Slider from './Slider';
import { games, webItems } from './types';

export const RecommendItems: React.FC = () => {
    return (
        <div className='recomm-items'>
            <div className='recomm-items--flex mrgn-bottom'>
                <section className='recomm-items_block'>
                    <h2>БЕСПЛАТНЫЕ ШКОЛЫ</h2>
                    <div className='line schools'>
                        <div className='schools_item'>
                            <img src={resultSchool} alt='Result Sсhool logo' />
                            <Link
                                to='https://result.school/products/javascript'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='link link_school'
                            >
                                Result School →
                            </Link>
                        </div>
                        <div className='schools_item'>
                            <img src={rollingSSchool} alt='Rolling Scopes School logo' />
                            <Link
                                to='https://rs.school/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='link link_school'
                            >
                                RS School →
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='recomm-items_block'>
                    <h2>ЧЕЛЛЕНДЖИ</h2>
                    <div className='line challenges'>
                        <img src={circle} alt='' className='challenges_decor circle-svg' />
                        <img src={star} alt='' className='challenges_decor star-svg' />
                        <img src={triangle} alt='' className='challenges_decor triangle-svg' />
                        <Link
                            to='https://100dayscss.com/about/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link link_challenges'
                        >
                            100 дней CSS →
                        </Link>
                        <Link
                            to='https://codedamn.com/challenge/100-days-of-frontend'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link link_challenges'
                        >
                            100 дней кода →
                        </Link>
                        <Link
                            to='https://cssbattle.dev/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link link_challenges'
                        >
                            CSS BattlesCSS →
                        </Link>
                    </div>
                </section>
            </div>
            <section className='recomm-items_block mrgn-bottom'>
                <h2>Литература</h2>
                <Slider />
            </section>
            <section className='recomm-items_block mrgn-bottom'>
                <h2>Сайты</h2>
                <div className='line webs'>
                    {webItems.map((item) => (
                        <div key={item.id} className='webs-item'>
                            <h4>{item.title}</h4>
                            <div className='line webs-item--info'>
                                <p>{item.desc}</p>
                                <a href={item.button.href}>{item.button.titleBtn}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='recomm-items_block'>
                <h2>Игры для обучения</h2>
                <div className='line games'>
                    {games.map((game) => {
                        return (
                            <div key={game.id} className='games-item'>
                                <a
                                    className='games-item--link'
                                    href={game.title.href}
                                    target='_blank'
                                >
                                    {game.title.text}
                                </a>
                                <p className='games-item--text'>{game.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
