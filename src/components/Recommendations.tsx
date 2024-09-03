import '../styles/pages/Recommendations.module.scss';
import { RecommendItems } from '../components/Recommendations/RecommendItems';

export const Recommendations: React.FC = () => {
    return (
        <section id='recommendations' className='recommendations'>
            <h1>РЕКОМЕНДАЦИИ</h1>
            <div className='main-line'></div>
            <RecommendItems />
        </section>
    );
};
