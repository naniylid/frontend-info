import React from "react";

import "../styles/pages/StudyPlan.module.scss";
import { PlanItems } from "./PlanContent/PlanItems";

export const StudyPlan: React.FC = () => {
  return (
    <section id="study-plan" className="study-plan">
      <h2>ПЛАН ОБУЧЕНИЯ</h2>
      <PlanItems />
    </section>
  );
};
