const { Router } = require("express");

module.exports = function ({ SubmisionController }) {
  const router = Router();

  router.get("/:userId", SubmisionController.get);
  router.get("/", SubmisionController.getAll);
  router.post("/", SubmisionController.create);
  router.patch("/:userId", SubmisionController.update);
  router.delete("/:userId", SubmisionController.delete);

  return router;
};
