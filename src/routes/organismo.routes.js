const { Router } = require('express');

module.exports = function ({ OrganismoController }) {
  const router = Router();

  router.get('/:organismoId', OrganismoController.get);
  router.get('/', OrganismoController.getAll);
  router.post('/', OrganismoController.create);
  router.patch('/:organismoId', OrganismoController.update);
  router.delete('/:organismoId', OrganismoController.delete);

  return router;
};
