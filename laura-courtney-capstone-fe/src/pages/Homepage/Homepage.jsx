import About from "../../components/About/About";
import AmenitiesList from "../../components/AmenitiesList/AmenitiesList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <section className="home">
      <Header />
      <div className="hero"></div>
      <About />
      <AmenitiesList />
      <Footer />
    </section>
  );
}
