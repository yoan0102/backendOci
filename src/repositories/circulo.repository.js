const BaseRepository = require("./base.repository");
let _circulo = null;
class CirculoRepository extends BaseRepository {
  constructor({ Circulo }) {
    super(Circulo);
    _circulo = Circulo;
  }
}

module.exports = CirculoRepository;
