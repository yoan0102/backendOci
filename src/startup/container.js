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
  CirculoService,
  OrganismoService,
} = require("../services");

//controllers
const {
  HomeController,
  UserController,
  AuthController,
  SubmisionController,
  CirculoController,
} = require("../controllers");

//Routes
const Routes = require("../routes");
const {
  HomeRoutes,
  UserRoutes,
  SubmisionRoutes,
  CirculoRoutes,
} = require("../routes/index.routes");

//Models
const { User, Submision, Circulo, Organismo } = require("../models");

//Repository
const {
  UserRepository,
  SubmisionRepository,
  CirculoRepository,
  OrganismoRepository,
} = require("../repositories");

//Creacion del container de dependencias
const container = createContainer();

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
    CirculoService: asClass(CirculoService).singleton(),
    OrganismoService: asClass(OrganismoService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    SubmisionController: asClass(
      SubmisionController.bind(SubmisionController)
    ).singleton(),
    CirculoController: asClass(
      CirculoController.bind(CirculoController)
    ).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    SubmisionRoutes: asFunction(SubmisionRoutes).singleton(),
    CirculoRoutes: asFunction(CirculoRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Submision: asValue(Submision),
    Circulo: asValue(Circulo),
    Organismo: asValue(Organismo),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    SubmisionRepository: asClass(SubmisionRepository).singleton(),
    CirculoRepository: asClass(CirculoRepository).singleton(),
    OrganismoRepository: asClass(OrganismoRepository).singleton(),
  });

module.exports = container;
