// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isEmailVerified: { type: Boolean, default: false },
  emailVerificationKey: { type: String },
  role: { type: String, default: 'user' },
  jwtTokens: [{ type: String }],
});

export default mongoose.models.User || mongoose.model('User', userSchema);
