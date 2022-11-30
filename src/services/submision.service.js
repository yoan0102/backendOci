const BaseService = require("./base.service");
let _submisionRepository = null;
class SubmisionService extends BaseService {
  constructor({ SubmisionRepositroy }) {
    super(SubmisionRepositroy);
    _submisionRepository = SubmisionRepositroy;
  }
}
module.exports = SubmisionService;
