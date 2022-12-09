const { Router } = require('express');

module.exports = function ({ CirculoController }) {
  const router = Router();

  router.get('/:circuloId', CirculoController.get);
  router.get('/', CirculoController.getAll);
  router.post('/', CirculoController.create);
  router.patch('/:circuloId', CirculoController.update);
  router.delete('/:circuloId', CirculoController.delete);

  return router;
};
