import "./Confirm.scss";

export default function Confirm({
  adults,
  pets,
  children,
  checkIn,
  checkOut,
  closeModal,
}) {
  return (
    <section className="confirmation">
      <svg
        onClick={() => {
          closeModal();
        }}
        className="confirmation__back"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
      </svg>
      <h2 className="confirmation__title">Booking Details</h2>
      <div className="confirm-adults"></div>
      <h3 className="confirm-adults__title">Number of Adults:</h3>
      <h3 className="confirm-adults__item">{adults}</h3>

      {children >= 1 && (
        <div className="confirm-children">
          <h3 className="confirm-children__title">Number of Children:</h3>
          <h3 className="confirm-children__item">{children}</h3>
        </div>
      )}

      {pets >= 1 && (
        <div className="confirm-pets">
          <h3 className="confirm-pets__title">Number of Pets:</h3>
          <h3 className="confirm-pets__item">{pets}</h3>
        </div>
      )}

      <div className="confirm-dates">
        <div className="confirm-dates__checkin">
          <h3 className="confirm-dates__date">Check-in Date:</h3>
          <h3 className="confirm-dates__value">{checkIn?.toDateString()}</h3>
        </div>
        <div className="confirm-dates__checkout">
          <h3 className="confirm-dates__date">Check-out Date:</h3>
          <h3 className="confirm-dates__value">{checkOut?.toDateString()}</h3>
        </div>
      </div>
    </section>
  );
}
