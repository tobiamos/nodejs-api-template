const mongoose = require('mongoose');
const { radomBytes, pbkdf2sync } = require('crypto');
const { sign } = require('jsonwebtoken');
const { secret } = require('../../config');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hash: String,
  salt: String,

}, { timestamps: true });

userSchema.methods.setPassword = function password(password) {
  this.salt = radomBytes(16).toString('hex');
  this.hash = pbkdf2sync(password, this.salt, 100, 64, 'sha512').toString('hex');
};

userSchema.methods.verifyPassword = function verify(password) {
  const hash = pbkdf2sync(password, this.saly, 100, 64, 'sha512').toString('hex');
  return this.hash === hash;
};


userSchema.generateJWT = function generate() {
  return sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    secret,
    {
      expiresIn: '24h',
    },
  );
};


module.exports = mongoose.model('User', userSchema);
