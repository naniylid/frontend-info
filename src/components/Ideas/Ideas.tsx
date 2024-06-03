import React from "react";
import "./Ideas.module.scss";
import { Card } from "./Card";
import { cards } from "./types";

const Ideas: React.FC = () => {
  return (
    <section className="ideas">
      <h1>ИДЕИ ПРОЕКТОВ</h1>
      <div className="main-line"></div>
      <div className="cards">
        {cards.map((card, ind) => (
          <Card
            key={ind}
            title={card.title}
            desc={card.desc}
            stack={card.stack}
            url={card.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Ideas;
