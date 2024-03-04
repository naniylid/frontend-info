import "../styles/pages/Recommendations.module.scss";
import RecommendItems from "../components/Recommendations/RecommendItems";

const Recommendations: React.FC = () => {
  return (
    <div className="recommendations">
      <h1>РЕКОМЕНДАЦИИ</h1>
      <div className="main-line"></div>
      <RecommendItems />
    </div>
  );
};

export default Recommendations;
