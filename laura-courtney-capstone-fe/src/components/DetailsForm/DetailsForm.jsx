import "./DetailsForm.scss";
import { useEffect } from "react";
import { useState } from "react";
import SubmitModal from "../SubmitModal/SubmitModal";

export default function DetailsForm({ closeModal }) {
  const [openSubmitModal, setOpenSubmitModal] = useState(false);

  const handleClick = () => {
    setOpenSubmitModal(true);
  };

  useEffect(() => {
    if (openSubmitModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [openSubmitModal]);

  return (
    <section className="form">
      {openSubmitModal && (
        <>
          <div className="submit-background"></div>
          <SubmitModal />
        </>
      )}
      <form action="submit" className="form__item">
        <div className="form__item">
          <label htmlFor="first-name" className="form__item">
            <h4>First name</h4>
            <input type="text" id="first-name" className="form__input" />
          </label>
        </div>

        <div className="form__item">
          <label htmlFor="last-name" className="form__item">
            <h4>Last name</h4>
            <input type="text" id="last-name" className="form__input" />
          </label>
        </div>

        <div className="form__item">
          <label htmlFor="email" className="form__item">
            <h4>Email</h4>
            <input type="text" id="email" className="form__input" />
          </label>
        </div>

        <div className="form__item">
          <label htmlFor="comments" className="form__item">
            <h4>Additional Comments/Requests</h4>
            <input type="text" id="comments" className="form__requests" />
          </label>
        </div>
      </form>

      <button className="form__button" onClick={handleClick}>
        <h4>Confirm Details & Request Booking</h4>
      </button>
    </section>
  );
}
