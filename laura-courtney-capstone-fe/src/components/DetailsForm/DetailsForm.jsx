import "./DetailsForm.scss";
import { useState } from "react";
import SubmitModal from "../SubmitModal/SubmitModal";
import errorIcon from "../../assets/images/error.svg";

export default function DetailsForm() {
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const [emptyError, setEmptyError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    comments: "",
  });

  const validEmailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleClick = (e) => {
    e.preventDefault();
    setEmptyError("");
    setEmailError("");

    if (!formData.first_name || !formData.last_name || !formData.email) {
      setIsFormValid(false);
      setEmptyError(
        <>
          <img className="error-icon" src={errorIcon} />
          This field is required
        </>
      );
      return;
    }

    if (!validEmailFormat.test(formData.email)) {
      setIsFormValid(false);
      setEmailError(
        <>
          <img className="error-icon" src={errorIcon} />
          Please enter a valid email
        </>
      );
      return;
    }

    setIsFormValid(true);
    setOpenSubmitModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <section className="form">
      {openSubmitModal && (
        <>
          <div className="submit-background"></div>
          <SubmitModal firstName={formData.first_name} />
        </>
      )}
      <form action="submit" className="form__item">
        <div className="form__item">
          <label htmlFor="first-name" className="form__item">
            <h4>First name</h4>
            <input
              type="text"
              id="first-name"
              name="first_name"
              className={`form__input ${
                !isFormValid && !formData.first_name ? "form__input--error" : ""
              }`}
              autoComplete="given-name"
              onChange={handleChange}
              value={formData.first_name}
            />
          </label>
          {!formData.first_name && emptyError && (
            <p className="errors">{emptyError}</p>
          )}
        </div>

        <div className="form__item">
          <label htmlFor="last-name" className="form__item">
            <h4>Last name</h4>
            <input
              type="text"
              id="last-name"
              name="last_name"
              className={`form__input ${
                !isFormValid && !formData.last_name ? "form__input--error" : ""
              }`}
              autoComplete="family-name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
          {!formData.last_name && emptyError && (
            <p className="errors">{emptyError}</p>
          )}
        </div>

        <div className="form__item">
          <label htmlFor="email" className="form__label">
            <h4>Email</h4>
            <input
              type="email"
              id="email"
              name="email"
              className={`form__email ${
                (!isFormValid && !formData.email) || emailError
                  ? "form__email--error"
                  : ""
              }`}
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {emailError && <p className="errors">{emailError}</p>}
          {!formData.email && emptyError && (
            <p className="errors">{emptyError}</p>
          )}
        </div>

        <div className="form__item">
          <label htmlFor="comments" className="form__item">
            <h4>Additional Comments/Requests</h4>
            <input
              type="text"
              id="comments"
              name="comments"
              autoComplete="off"
              className="form__requests"
              value={formData.comments}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>

      <button className="form__button" onClick={handleClick}>
        <h4>Confirm Details & Request Booking</h4>
      </button>
    </section>
  );
}
