import "./SubmitModal.scss";
import { Link } from "react-router-dom";

export default function SubmitModal({ firstName }) {
  return (
    <section className="submit-modal">
      <Link to="/">
        <svg
          className="submit-modal__close"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
        </svg>
      </Link>

      <h3 className="submit-modal__title">Submission Recieved</h3>
      <p className="submit-modal__body">Thanks for your booking {firstName}!</p>
      <p className="submit-modal__body">
        An email with full booking details will be sent after review.
      </p>
      <p className="submit-modal__body">Click X to return to the home page.</p>
    </section>
  );
}
