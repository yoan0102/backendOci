const BaseService = require("./base.service");
let _childrenRepository = null;
class ChildrenService extends BaseService {
  constructor({ ChildrenRepository }) {
    super(ChildrenRepository);
    _childrenRepository = ChildrenRepository;
  }
}
module.exports = ChildrenService;
