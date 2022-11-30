let _organismoService = null;

class OrganismoController {
  constructor({ OrganismoService }) {
    _organismoService = OrganismoService;
  }

  async get(req, res) {
    const { organismoId } = req.params;
    const organismo = await _organismoService.get(circuloId);
    return res.send(organismo);
  }

  async getAll(req, res) {
    const organismo = await _organismoService.getAll();
    return res.send(organismo);
  }

  async create(req, res) {
    const { body } = req;
    const organismo = await _organismoService.create(body);
    return res.status(201).send(organismo);
  }

  async update(req, res) {
    const { body } = req;
    const { organismoId } = req.params;
    const organismo = await _organismoService.update(organismoId, body);
    return res.send(organismo);
  }

  async delete(req, res) {
    const { organismoId } = req.params;
    await _organismoService.delete(organismoId);
    return res.status(204).send('No Content');
  }
}

module.exports = OrganismoController;
