import RecommendItems from "../components/Recommendations/RecommendItems";

const StudyPlan: React.FC = () => {
  return (
    <div className="study-plan">
      <h1>РЕКОМЕНДАЦИИ</h1>
      <div className="main-line"></div>
      <RecommendItems />
    </div>
  );
};

export default StudyPlan;
