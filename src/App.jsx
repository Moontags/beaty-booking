import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Services from "./Services";
import BookingForm from "./BookingForm";
import BookingsList from "./BookingsList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Services />} /> {/* Home-sivu */}
        <Route path="/services" element={<BookingForm />} /> {/* Ajanvaraus */}
        <Route path="/bookings" element={<BookingsList />} /> {/* Varaukset */}
      </Routes>
    </Router>
  );
}

export default App;
