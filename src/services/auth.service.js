const { ManagerToken } = require("../helpers");
let _userRepository = null;

class AuthServices {
  constructor({ UserRepository }) {
    _userRepository = UserRepository;
  }

  async sigIn(nick_name, password) {
    const user = await User.findOne({ nick_name: nick_name });

    const validPassword = await user?.comparePasswords(password);
    if (!validPassword) {
      throw new Error("Contraseña no valida");
    }

    if (user?.status === false) {
      throw new Error(`El usuario ${nick_name} no existe`);
    }

    const token = ManagerToken.generateToken(user?._id);

    return { token, user };
  }
}

module.exports = AuthServices;
