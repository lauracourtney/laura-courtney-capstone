import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./Reservation.scss";

export default function Reservation() {
  const [value, setValue] = useState(new Date());

  return (
    <section className="reservation">
      <h2 className="reservation__title">Booking Details</h2>

      <div className="reservation__guests">
        <div className="adults">
          <label className="adults__label">
            <h3>Number of Adults:</h3>
          </label>
          <select className="adults__dropdown">
            {" "}
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
          <select className="children__dropdown">
            {" "}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="pets">
          <label className="pets__label">
            <h3>Number of Pets:</h3>
          </label>
          <select className="pets__dropdown">
            {" "}
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>

      <div className="reservation__dates">
        <div className="reservation__checkin">
          <h3 className="reservation__title">Check-in Date:</h3>
          <h3>{value[0]?.toDateString()}</h3>
        </div>
        <div className="reservation__checkout">
          <h3 className="reservation__title">Check-out Date:</h3>
          <h3>{value[1]?.toDateString()}</h3>
        </div>
      </div>
      <Calendar
        onChange={(value) =>
          value[0] === value[1]
            ? alert("Please select a valid date range, minimum one night stay")
            : setValue(value)
        }
        value={value}
        selectRange={true}
        minDate={new Date()}
        next2Label="Next"
        prev2Label="Prev"
      />
    </section>
  );
}
