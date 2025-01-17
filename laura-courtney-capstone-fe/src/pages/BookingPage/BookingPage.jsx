import Features from "../../components/Features/Features";
import Reservation from "../../components/Reservation/Reservation";
import "./BookingPage.scss";

export default function BookingPage() {
  return (
    <section className="booking-page">
      <Features />
      <Reservation />
    </section>
  );
}
