import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./Reservation.scss";
import ConfirmationPage from "../../pages/ConfirmationPage/ConfirmationPage.jsx";
import axios from "axios";

export default function Reservation() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [error, setError] = useState(null);
  const [rates, setRates] = useState("0");

  const openModal = () => {
    setOpenConfirmModal(true);
  };

  const closeModal = () => {
    setOpenConfirmModal(false);
  };

  const handleDateChange = async (value) => {
    if (value[0].getTime() === value[1].getTime()) {
      alert("Please select a valid date range, minimum one night stay");
    } else {
      setCheckIn(value[0]);
      setCheckOut(value[1]);
    }

    try {
      let url = `http://localhost:8080/api/rates`;
      const response = await axios.post(url, value);
      setRates(response.data);
    } catch (error) {
      console.error("Error fetching rates data", error);
      setError("Failed to fetch rates");
    }
  };

  return (
    <section className="reservation">
      <div className="reservation__top">
        <h2 className="reservation__title">Booking Details</h2>
        <div className="reservation__border"></div>
      </div>

      <div className="reservation__contents">
        <div className="reservation__left">
          <div className="reservation__guests">
            <div className="adults">
              <label className="adults__label">
                <h4>Number of Adults:</h4>
              </label>
              <select
                className="adults__dropdown"
                onChange={(e) => setAdults(e.target.value)}
              >
                {" "}
                <option value="1">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="children">
              <label className="children__label">
                <h4>Number of Children:</h4>
              </label>
              <select
                className="children__dropdown"
                onChange={(e) => setChildren(e.target.value)}
              >
                {" "}
                <option value="1">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="pets">
              <label className="pets__label">
                <h4>Number of Pets:</h4>
              </label>
              <select
                className="pets__dropdown"
                onChange={(e) => setPets(e.target.value)}
              >
                {" "}
                <option value="1">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>

        <div className="reservation__dates">
          <div className="reservation__checkin">
            <h3 className="reservation__check">Check-in Date:</h3>
            <h3 className="reservation__date">{checkIn?.toDateString()}</h3>
          </div>
          <div className="reservation__checkout">
            <h3 className="reservation__check">Check-out Date:</h3>
            <h3 className="reservation__date">{checkOut?.toDateString()}</h3>
          </div>
        </div>
      </div>

      <Calendar
        onChange={handleDateChange}
        value={[checkIn, checkOut]}
        selectRange={true}
        minDate={new Date()}
        next2Label="Next"
        prev2Label="Prev"
      />

      <div className="rate">
        <h3 className="rate__title">Rate for selected dates:</h3>
        <h3 className="rate__price">${rates.rateFee}</h3>
      </div>
      <button className="reservation__button" onClick={openModal}>
        <h4>Proceed to Booking Confirmation</h4>
      </button>
      {openConfirmModal && (
        <>
          <div className="modal-background"></div>
          <ConfirmationPage
            adults={adults}
            children={children}
            pets={pets}
            checkIn={checkIn}
            checkOut={checkOut}
            closeModal={closeModal}
            rates={rates}
          />
        </>
      )}
    </section>
  );
}
