const users = require("../controllers/users");
var router = require("express").Router();


router.get("/", users.findAll)
router.post("/", users.create);
router.get("/:id", users.findOne);
router.put("/:id", users.update);
router.delete("/:id", users.delete);


module.exports = (app) => {
    app.use("/api/users", router);
};




