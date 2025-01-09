import About from "../../components/About/About";
import AmenitiesList from "../../components/AmenitiesList/AmenitiesList";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <section className="home">
      <div className="hero"></div>
      <About />
      <AmenitiesList />
    </section>
  );
}
