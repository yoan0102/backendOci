let _childrenService = null;

class ChildrenController {
  constructor({ ChildrenService }) {
    _childrenService = ChildrenService;
  }

  async get(req, res) {
    const { childrenId } = req.params;
    const children = await _childrenService.get(childrenId);
    return res.send(children);
  }

  async getAll(req, res) {
    const childrens = await _childrenService.getAll();
    return res.send(childrens);
  }

  async create(req, res) {
    const { body } = req;
    const children = await _childrenService.create(body);
    return res.status(201).send(children);
  }

  async update(req, res) {
    const { body } = req;
    const { childrenId } = req.params;
    const children = await _childrenService.update(childrenId, body);
    return res.send(children);
  }

  async delete(req, res) {
    const { childrenId } = req.params;
    await _childrenService.delete(childrenId);
    return res.status(204).send('No Content');
  }
}

module.exports = ChildrenController;
