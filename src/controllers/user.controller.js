const userService = require('../services/user.service');

const userController = {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      const newUser = await userService.registerUser(email, password);

      res.status(201).json({
        message: 'Utilisateur créé avec succès.',
        user: {
          id: newUser._id,
          email: newUser.email,
          avatarURL: newUser.avatarURL,
        },
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = userController;
