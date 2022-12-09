const { Router } = require('express');

module.exports = function ({ ChildrenController }) {
  const router = Router();

  router.get('/:childrenId', ChildrenController.get);
  router.get('/', ChildrenController.getAll);
  router.post('/', ChildrenController.create);
  router.patch('/:childrenId', ChildrenController.update);
  router.delete('/:childrenId', ChildrenController.delete);

  return router;
};
