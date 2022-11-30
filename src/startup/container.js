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
  ChildrenService,
} = require("../services");

//controllers
const {
  HomeController,
  UserController,
  AuthController,
  SubmisionController,
  CirculoController,
  ChildrenController,
  OrganismoController,
} = require("../controllers");

//Routes
const Routes = require("../routes");
const {
  HomeRoutes,
  UserRoutes,
  SubmisionRoutes,
  CirculoRoutes,
  OrganismoRoutes,
} = require("../routes/index.routes");

//Models
const { User, Submision, Circulo, Organismo, Children } = require("../models");

//Repository
const {
  UserRepository,
  SubmisionRepository,
  CirculoRepository,
  OrganismoRepository,
  ChildrenRepository,
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
    ChildrenService: asClass(ChildrenService).singleton(),
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
    OrganismoController: asClass(
      OrganismoController.bind(OrganismoController)
    ).singleton(),
    ChildrenController: asClass(
      ChildrenController.bind(ChildrenController)
    ).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    SubmisionRoutes: asFunction(SubmisionRoutes).singleton(),
    CirculoRoutes: asFunction(CirculoRoutes).singleton(),
    OrganismoRoutes: asFunction(OrganismoRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Submision: asValue(Submision),
    Circulo: asValue(Circulo),
    Organismo: asValue(Organismo),
    Children: asValue(Children),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    SubmisionRepository: asClass(SubmisionRepository).singleton(),
    CirculoRepository: asClass(CirculoRepository).singleton(),
    OrganismoRepository: asClass(OrganismoRepository).singleton(),
    ChildrenRepository: asClass(ChildrenRepository).singleton(),
  });

module.exports = container;
