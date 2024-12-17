import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB-yhteys
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// **Varausmalli**
const bookingSchema = new mongoose.Schema({
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const Booking = mongoose.model("Booking", bookingSchema);

// **Hae kaikki varaukset**
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});

// **Lisää uusi varaus**
app.post("/api/bookings", async (req, res) => {
  try {
    const { service, date, time, name, email } = req.body;
    const newBooking = new Booking({ service, date, time, name, email });
    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully", booking: newBooking });
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ message: "Failed to save booking" });
  }
});

// **Portti**
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
