const { Router } = require('express');

module.exports = function ({ CirculoController }) {
  const router = Router();

  router.get('/:userId', CirculoController.get);
  router.get('/', CirculoController.getAll);
  router.post('/', CirculoController.create);
  router.patch('/:userId', CirculoController.update);
  router.delete('/:userId', CirculoController.delete);

  return router;
};
