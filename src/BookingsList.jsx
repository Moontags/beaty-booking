import { useEffect, useState } from "react";

function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Access denied. Please log in.");
      setLoading(false);
      return;
    }

    fetch("http://localhost:3000/api/bookings", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setError("Failed to fetch bookings. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Ladataan varauksia...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <section
      id="bookings"
      className="flex justify-center items-center min-h-screen" // Keskitys
    >
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Varaukset</h2>
        <ul className="flex flex-col">
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="border p-4 mb-2 bg-white rounded shadow"
            >
              <p>
                <strong>Palvelu:</strong> {booking.service}
              </p>
              <p>
                <strong>Päivämäärä:</strong> {booking.date}
              </p>
              <p>
                <strong>Aika:</strong> {booking.time}
              </p>
              <p>
                <strong>Nimi:</strong> {booking.name}
              </p>
              <p>
                <strong>Sähköposti:</strong> {booking.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BookingsList;
