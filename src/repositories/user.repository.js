const BaseRepository = require("./base.repository");
let _user = null;
class UserRepositroy extends BaseRepository {
  constructor({ User }) {
    super(User);
    _user = User;
  }

  async getUserByUserName(username) {
    return await this._user.findOne({ username });
  }
}

module.exports = UserRepositroy;
