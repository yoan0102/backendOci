const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const { ErrorMiddleware, NotFoundMiddleware } = require('../middlewares');

module.exports = function ({ HomeRoutes, SubmisionRoutes, OrganismoRoutes, UserRoutes, CirculoRoutes, ChildrenRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());
  apiRoutes.use('/home', HomeRoutes);
  apiRoutes.use('/users', UserRoutes);
  apiRoutes.use('/submisions', SubmisionRoutes);
  apiRoutes.use('/circulos', CirculoRoutes);
  apiRoutes.use('/organismos', OrganismoRoutes);
  apiRoutes.use('/childrens', ChildrenRoutes);
  router.use('/api', apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
