const BaseRepository = require("./base.repository");
let _submision = null;
class SubmisionRepositroy extends BaseRepository {
  constructor({ Submision }) {
    super(Submision);
    _submision = Submision;
  }
}

module.exports = SubmisionRepositroy;
