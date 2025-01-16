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
  const [openConfirmModal, setOpenConfirmModal] = useState(null);
  const [error, setError] = useState(null);
  const [rates, setRates] = useState("0");

  const openModal = () => {
    setOpenConfirmModal(true);
  };

  const closeModal = () => {
    console.log("closeModal called");
    setOpenConfirmModal(false);
  };

  const handleDateChange = async (value) => {
    if (value[0].getTime() === value[1].getTime()) {
      alert("Please select a valid date range, minimum one night stay");
    } else {
      setCheckIn(value[0]);
      setCheckOut(value[1]);
    }
    console.log("date value", value);

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
      <h2 className="reservation__title">Booking Details</h2>
      <div className="reservation__guests">
        <div className="adults">
          <label className="adults__label">
            <h3>Number of Adults:</h3>
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
            <h3>Number of Children:</h3>
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
            <h3>Number of Pets:</h3>
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
      <div className="reservation__dates">
        <div className="reservation__checkin">
          <h2 className="reservation__title">Check-in Date:</h2>
          <h2 className="reservation__date">{checkIn?.toDateString()}</h2>
        </div>
        <div className="reservation__checkout">
          <h2 className="reservation__title">Check-out Date:</h2>
          <h2 className="reservation__date">{checkOut?.toDateString()}</h2>
        </div>
      </div>

      {console.log("value", [checkIn, checkOut])}
      <Calendar
        onChange={handleDateChange}
        value={[checkIn, checkOut]}
        selectRange={true}
        minDate={new Date()}
        next2Label="Next"
        prev2Label="Prev"
      />

      <h2 className="reservation__rate">
        Rate for selected dates: ${rates.rateFee}
      </h2>
      <button className="reservation__button" onClick={openModal}>
        <h3>Proceed to Booking Confirmation</h3>
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
