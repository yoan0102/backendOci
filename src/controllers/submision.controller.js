let _submisionService = null;

class SubmisionController {
  constructor({ SubmisionService }) {
    _submisionService = SubmisionService;
  }

  async get(req, res) {
    const { submisionId } = req.params;
    const submision = await _submisionService.get(submisionId);
    return res.send(submision);
  }

  async getAll(req, res) {
    const submisions = await _submisionService.getAll();
    return res.send(submisions);
  }

  async create(req, res) {
    const { body } = req;
    const submision = await _submisionService.create(body);
    return res.status(201).send(submision);
  }

  async update(req, res) {
    const { body } = req;
    const { submisionId } = req.params;
    const submision = await _submisionService.update(submisionId, body);
    return res.send(submision);
  }

  async delete(req, res) {
    const { submisionId } = req.params;
    await _submisionService.delete(submisionId);
    return res.status(204).send('No Content');
  }
}

module.exports = SubmisionController;
