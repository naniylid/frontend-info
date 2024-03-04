const RecommendItems: React.FC = () => {
  return (
    <div className="recomm-items">
      <div className="">
        <section className="recomm-items_block">
          <h2>БЕСПЛАТНЫЕ ШКОЛЫ</h2>
          <div>
            <div>
              <img
                src="../../assets/image/result-school.png"
                alt="Result Sсhool logo"
              />
              <a href="">result school →</a>
            </div>
            <div>
              <img
                src="../../assets/image/rs-school.png"
                alt="Rolling Scopes School logo"
              />
              <a href="">RS School →</a>
            </div>
          </div>
        </section>
        <section className="recomm-items_block">
          <h2>ЧЕЛЛЕНДЖИ</h2>
          <div>
            <a href="">100 дней CSS →</a>
            <a href="">100 дней кода →</a>
            <a href="">CSS BattlesCSS →</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecommendItems;
