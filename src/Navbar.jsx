import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-white">Beauty Studio</h1>
      <ul className="flex space-x-4 text-white">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/services" className="hover:underline">Services</Link></li>
        <li><Link to="/bookings" className="hover:underline">Bookings</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
