const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config
const config = require("../config");
const server = require(".");
//services
const { HomeService } = require("../services");

//controllers
const { HomeController } = require("../controllers");
const container = createContainer();

//Routes
const Routes = require("../routes");
const { HomeRoutes } = require("../routes/index.routes");

//Models
const { User } = require("../models");

container
  .register({
    app: asClass(server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
  });
module.exports = container;
