const mongoose = require('mongoose');
const { sendJSONResponse } = require('../../../helpers');

const User = mongoose.model('User');

module.exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User();
  user.name = name;
  user.email = email;
  user.setPassword(password);
  await user.save();
  sendJSONResponse(res, 200, user, req.method, 'Created New User!');
};

