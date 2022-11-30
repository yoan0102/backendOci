const BaseService = require("./base.service");
let _organismoRepository = null;
class OrganismoService extends BaseService {
  constructor({ OrganismoRepository }) {
    super(OrganismoRepository);
    _organismoRepository = OrganismoRepository;
  }
}
module.exports = OrganismoService;
