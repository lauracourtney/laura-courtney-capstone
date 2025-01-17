import "./DetailsForm.scss";

export default function DetailsForm({ closeModal }) {
  const handleClick = () => {
    alert(
      "Booking confirmed, email with full details will be sent upon review"
    );
    closeModal();
  };

  return (
    <section className="form">
      <form action="submit" className="form__item">
        <div className="form__item">
          <label htmlFor="" className="form__item">
            <h3>First name</h3>
            <input type="text" className="form__input" />
          </label>
        </div>

        <div className="form__item">
          <label htmlFor="" className="form__item">
            <h3>Last name</h3>
            <input type="text" className="form__input" />
          </label>
        </div>

        <div className="form__item">
          <label htmlFor="" className="form__item">
            <h3>Email</h3>
            <input type="text" className="form__input" />
          </label>
        </div>

        <div className="form__item">
          <label htmlFor="" className="form__item">
            <h3>Additional Comments/Requests</h3>
            <input type="text" className="form__requests" />
          </label>
        </div>
      </form>

      <button className="form__button" onClick={handleClick}>
        <h3>Confirm Details & Request Booking</h3>
      </button>
    </section>
  );
}
