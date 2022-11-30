const BaseService = require('./base.service');
let _submisionRepository = null;
class SubmisionService extends BaseService {
  constructor({ SubmisionRepository }) {
    super(SubmisionRepository);
    _submisionRepository = SubmisionRepository;
  }
}
module.exports = SubmisionService;
