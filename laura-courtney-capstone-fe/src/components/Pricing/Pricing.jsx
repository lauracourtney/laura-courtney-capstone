import "./Pricing.scss";

export default function Pricing({ pets, rates }) {
  const cleaning = 50.0;
  const petFee = pets * 15;

  return (
    <section className="breakdown">
      <div className="breakdown__top">
        <h2 className="breakdown__title">Total Cost</h2>
        <div className="breakdown__border"></div>
      </div>

      {pets >= 1 && (
        <div className="breakdown__category">
          <h4 className="breakdown__item">Pet Fee:</h4>
          <h4>${petFee}</h4>
        </div>
      )}

      <div className="breakdown__category">
        <h4 className="breakdown__item">Cleaning Fee:</h4>
        <h4>${cleaning}</h4>
      </div>

      <div className="breakdown__category">
        <h4 className="breakdown__item">Cabin Rate:</h4>
        <h4>${rates?.rateFee || 0}</h4>
      </div>
      <div className="breakdown__category">
        <h4 className="breakdown__item">Taxes:</h4>
        <h4>${(petFee + cleaning + (rates?.rateFee || 0)) * 0.15}</h4>
      </div>

      <div className="breakdown__border"></div>

      <div className="breakdown__category">
        <h4 className="breakdown__item">Total Cost:</h4>
        <h4>
          $
          {petFee +
            cleaning +
            (rates?.rateFee || 0) +
            (petFee + cleaning + (rates?.rateFee || 0)) * 0.15}
        </h4>
      </div>
    </section>
  );
}
