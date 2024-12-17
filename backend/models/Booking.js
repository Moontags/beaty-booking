import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const Booking = model("Booking", bookingSchema);

export default Booking;
