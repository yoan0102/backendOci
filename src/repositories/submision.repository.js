const BaseRepository = require('./base.repository');
let _submision = null;
class SubmisionRepository extends BaseRepository {
  constructor({ Submision }) {
    super(Submision);
    _submision = Submision;
  }
}

module.exports = SubmisionRepository;
