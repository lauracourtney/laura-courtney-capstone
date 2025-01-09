import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

export default function BookingPage() {
  const [value, setValue] = useState(new Date());

  return (
    <section className="booking">
      <p>Start Date: {value[0]?.toDateString()}</p>
      <p>End Date: {value[1]?.toDateString()}</p>
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
