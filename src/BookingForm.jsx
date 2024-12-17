import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save booking");
      }

      const result = await response.json();
      console.log("Booking saved:", result);

      alert("Booking added successfully!");

    
      setFormData({
        service: "",
        date: "",
        time: "",
        name: "",
        email: "",
      });
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow max-w-xl mx-auto bg-blue-100 mt-20">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Varaa aika</h2>
      
   
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      >
        <option value="" disabled>Valitse palvelu</option>
        <option value="Ripsipidennykset">Ripsipidennykset</option>
        <option value="Kulmien laminointi">Kulmien laminointi</option>
        <option value="Ripsihuolto">Ripsihuolto</option>
        
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Nimi"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Sähköposti"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 mb-4 w-full rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Varaa
      </button>
    </form>
  );
}

export default BookingForm;
