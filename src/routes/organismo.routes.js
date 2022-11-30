const { Router } = require('express');

module.exports = function ({ OrganismoController }) {
  const router = Router();

  router.get('/:userId', OrganismoController.get);
  router.get('/', OrganismoController.getAll);
  router.post('/', OrganismoController.create);
  router.patch('/:userId', OrganismoController.update);
  router.delete('/:userId', OrganismoController.delete);

  return router;
};
