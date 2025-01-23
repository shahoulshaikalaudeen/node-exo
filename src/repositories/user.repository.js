const User = require('../models/user.model');

const userRepository = {
  async findByEmail(email) {
    return await User.findOne({ email });
  },
  async create(userData) {
    const user = new User(userData);
    return await user.save();
  },
};

module.exports = userRepository;
