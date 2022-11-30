let _authServices = null;
class AuthController {
  constructor({ AuthServices }) {
    _authServices = AuthServices;
  }

  async login(req, res) {
    const { nick_name, password } = req.body;

    const resp = await _authServices.sigIn(nick_name, password);
    return res.json(resp);
  }
}
