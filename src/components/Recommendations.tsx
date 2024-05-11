import '../styles/pages/Recommendations.module.scss';
import RecommendItems from '../components/Recommendations/RecommendItems';

const Recommendations: React.FC = () => {
  return (
    <section className='recommendations'>
      <h1>РЕКОМЕНДАЦИИ</h1>
      <div className='main-line'></div>
      <RecommendItems />
    </section>
  );
};

export default Recommendations;
