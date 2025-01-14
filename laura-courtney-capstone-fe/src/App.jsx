import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BookingPage from "./pages/BookingPage/BookingPage";
import HomePage from "./pages/Homepage/Homepage";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
