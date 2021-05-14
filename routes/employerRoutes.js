const express = require("express");
const router = express.Router();
const employerController = require("../controllers/employerController");
const verify = require("../controllers/verifyToken");

router.get("/login", employerController.getloginForm);
router.get("/signup", employerController.getSignupForm);

router.post("/signup", employerController.createEmployer);
router.post("/login", employerController.loginEmployer);

router.get("/:id/openjob", verify.auth, employerController.openJob);
router.post("/job", employerController.createJob);

module.exports = {
  router,
};
