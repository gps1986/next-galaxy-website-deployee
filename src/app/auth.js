// auth.js
import jwt from 'jsonwebtoken';

const SECRET = 'avggalaxy';

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET);
}
