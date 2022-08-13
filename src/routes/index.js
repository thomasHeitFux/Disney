const { Router } = require('express');
const router = Router();
const charactersRouter = require("./characters");
const loginRouter = require("./login");

//--------------------------ROUTES
router.use("/disney", charactersRouter);
router.use("/disney", loginRouter);

module.exports = router;
