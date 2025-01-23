const bcrypt = require('bcrypt');
const userRepository = require('../repositories/user.repository');

const userService = {
  async registerUser(email, password) {
    if (!email || !password) {
      throw new Error('Email et mot de passe sont requis.');
    }

    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Utilisateur déjà existant.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepository.create({
      email,
      password: hashedPassword,
      avatarURL: '',
    });
  },
};

module.exports = userService;
