import mongoose from "mongoose";

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

