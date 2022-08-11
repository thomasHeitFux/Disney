const { Router } = require('express');
const router = Router();
const charactersRouter = require("./characters");

//--------------------------ROUTES
router.use("/disney", charactersRouter);

module.exports = router;
