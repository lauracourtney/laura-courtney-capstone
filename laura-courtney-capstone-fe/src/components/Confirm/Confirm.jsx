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
      <div className="confirmation__top">
        <h2 className="confirmation__title">Booking Details</h2>
        <div className="confirmation__border"></div>
      </div>

      <div className="confirm-adults">
        <h4 className="confirm-adults__title">Number of Adults:</h4>
        <h4 className="confirm-adults__item">{adults}</h4>
      </div>

      {children >= 1 && (
        <div className="confirm-children">
          <h4 className="confirm-children__title">Number of Children:</h4>
          <h4 className="confirm-children__item">{children}</h4>
        </div>
      )}

      {pets >= 1 && (
        <div className="confirm-pets">
          <h4 className="confirm-pets__title">Number of Pets:</h4>
          <h4 className="confirm-pets__item">{pets}</h4>
        </div>
      )}

      <div className="confirm-dates">
        <div className="confirm-dates__checkin">
          <h4 className="confirm-dates__date">Check-in Date:</h4>
          <h4 className="confirm-dates__value">{checkIn?.toDateString()}</h4>
        </div>
        <div className="confirm-dates__checkout">
          <h4 className="confirm-dates__date">Check-out Date:</h4>
          <h4 className="confirm-dates__value">{checkOut?.toDateString()}</h4>
        </div>
      </div>
    </section>
  );
}
