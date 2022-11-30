const BaseService = require('./base.service');
let _circuloRepository = null;
class CirculoService extends BaseService {
  constructor({ CirculoRepository }) {
    super(CirculoRepository);
    _circuloRepository = CirculoRepository;
  }
}
module.exports = CirculoService;
