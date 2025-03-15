// models/Contact.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// This check prevents model overwrite issues during hot reloading in development.
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
