let _userService = null;

class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = await _userService.get(userId);
    return res.send(user);
  }

  async getAll(req, res) {
    const users = await _userService.getAll();
    return res.send(users);
  }

  async create(req, res) {
    const { body } = req;
    const user = await _userService.create(body);
    return res.status(201).send(user);
  }

  async update(req, res) {
    const { body } = req;
    const { userId } = req.params;
    const user = await _userService.update(userId, body);
    return res.send(user);
  }

  async delete(req, res) {
    const { userId } = req.params;
    const user = await _userService.delete(userId);
    return res.status(204).send('No Content');
  }

  async userByUserName(req, res) {}
}

module.exports = UserController;
