const { Router } = require('express');

module.exports = function ({ SubmisionController }) {
  const router = Router();

  router.get('/:submisionId', SubmisionController.get);
  router.get('/', SubmisionController.getAll);
  router.post('/', SubmisionController.create);
  router.patch('/:submisionId', SubmisionController.update);
  router.delete('/:submisionId', SubmisionController.delete);

  return router;
};
