import "../styles/pages/Recommendations.module.scss";
import { RecommendItems } from "../components/Recommendations/RecommendItems";

export const Recommendations: React.FC = () => {
  return (
    <section id="recommendations" className="recommendations">
      <h2>РЕКОМЕНДАЦИИ</h2>
      <RecommendItems />
    </section>
  );
};
