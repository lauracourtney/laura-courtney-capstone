import "./Pricing.scss";

export default function Pricing({ pets }) {
  return (
    <section className="breakdown">
      <h2 className="breakdown__title">Total Cost</h2>

      {pets >= 1 && (
        <div className="breakdown__pets">
          <h3 className="breakdown__item">Pet Fee:</h3>
          <h3>${pets * 20}</h3>
        </div>
      )}

      <div className="breakdown__cleaning">
        <h3 className="breakdown__item">Cleaning Fee:</h3>
        <h3>$50.00</h3>
      </div>

      <div className="breakdown__cabin">
        <h3 className="breakdown__item">Cabin Rate:</h3>
        <h3></h3>
      </div>
      <div className="breakdown__taxes">
        <h3 className="breakdown__item">Taxes:</h3>
        <h3></h3>
      </div>

      <div className="breakdown__border"></div>

      <div className="breakdown__total">
        <h3 className="breakdown__item">Total Cost:</h3>
        <h3></h3>
      </div>
    </section>
  );
}
