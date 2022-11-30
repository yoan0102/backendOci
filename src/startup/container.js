const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config
const config = require("../config");
const server = require(".");

//services
const { HomeService, UserService, AuthService } = require("../services");

//controllers
const {
  HomeController,
  UserController,
  AuthController,
} = require("../controllers");
const container = createContainer();

//Routes
const Routes = require("../routes");
const { HomeRoutes, UserRoutes } = require("../routes/index.routes");

//Models
const { User, Submision } = require("../models");

//Repository
const { UserRepository } = require("../repositories");

container
  .register({
    app: asClass(server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Submision: asValue(Submision),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  });
module.exports = container;
