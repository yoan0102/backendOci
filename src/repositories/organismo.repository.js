const BaseRepository = require('./base.repository');
let _organismo = null;
class OrganismoRepository extends BaseRepository {
  constructor({ Organismo }) {
    super(Organismo);
    _organismo = Organismo;
  }
}

module.exports = OrganismoRepository;
