import Confirm from "../../components/Confirm/Confirm";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import Pricing from "../../components/Pricing/Pricing";
import "./ConfirmationPage.scss";

export default function ConfirmationPage({
  adults,
  pets,
  children,
  checkIn,
  checkOut,
  closeModal,
  rates,
}) {
  return (
    <section className="confirm-modal">
      <Confirm
        adults={adults}
        children={children}
        pets={pets}
        checkIn={checkIn}
        checkOut={checkOut}
        closeModal={closeModal}
      />
      <Pricing pets={pets} rates={rates} />
      <DetailsForm closeModal={closeModal} />
    </section>
  );
}
