const container = require("./src/startup/container");

const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config");

const mongosse = require("mongoose");
// mongoose.set("useCreateIndex", true);

mongosse
  .connect(MONGO_URI)
  .then(() => server.start())
  .catch(console.log);
