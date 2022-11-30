const BaseRepository = require('./base.repository');
let _children = null;
class ChildrenRepository extends BaseRepository {
  constructor({ Children }) {
    super(Children);
    _children = Children;
  }
}

module.exports = ChildrenRepository;
