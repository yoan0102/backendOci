let _circuloService = null;

class CirculoController {
  constructor({ CirculoService }) {
    _circuloService = CirculoService;
  }

  async get(req, res) {
    const { circuloId } = req.params;
    const circulo = await _circuloService.get(circuloId);
    return res.send(circulo);
  }

  async getAll(req, res) {
    const circulos = await _circuloService.getAll();
    return res.send(circulos);
  }

  async create(req, res) {
    const { body } = req;
    const circulo = await _circuloService.create(body);
    return res.status(201).send(circulo);
  }

  async update(req, res) {
    const { body } = req;
    const { circuloId } = req.params;
    const circulo = await _circuloService.update(circuloId, body);
    return res.send(circulo);
  }

  async delete(req, res) {
    const { circuloId } = req.params;
    await _circuloService.delete(circuloId);
    return res.status(204).send("No Content");
  }
}

module.exports = CirculoController;
