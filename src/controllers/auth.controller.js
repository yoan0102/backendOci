let _authServices = null;
class AuthController {
  constructor({ AuthServices }) {
    _authServices = AuthServices;
  }

  async login(req, res) {
    const { nick_name, password } = req.body;
    const resp = await _authServices.sigIn(nick_name, password);
    if (!resp) return res.status(404).json({ error: "Usuario no existe" });
    return res.json(resp);
  }
}

module.exports = AuthController;
