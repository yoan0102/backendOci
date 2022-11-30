const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config
const config = require("../config");
const server = require(".");

//services
const {
  HomeService,
  UserService,
  AuthService,
  SubmisionService,
} = require("../services");

//controllers
const {
  HomeController,
  UserController,
  AuthController,
  SubmisionController,
} = require("../controllers");
const container = createContainer();

//Routes
const Routes = require("../routes");
const {
  HomeRoutes,
  UserRoutes,
  SubmisionRoutes,
} = require("../routes/index.routes");

//Models
const { User, Submision } = require("../models");

//Repository
const { UserRepository, SubmisionRepositroy } = require("../repositories");

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
    SubmisionService: asClass(SubmisionService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    SubmisionController: asClass(
      SubmisionController.bind(SubmisionController)
    ).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    SubmisionRoutes: asFunction(SubmisionRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Submision: asValue(Submision),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    SubmisionRepositroy: asClass(SubmisionRepositroy).singleton(),
  });

module.exports = container;
