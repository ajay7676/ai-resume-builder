const express = require("express");
const {signup, login, getProfile} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { createResume, getAllResumes } = require("../controllers/resumeController");

const router = express.Router();

router.post("/signup" , signup);
router.post("/login", login);
router.get("/profile",authMiddleware,getProfile);
router.post("/resume/create" , authMiddleware,createResume);
router.get("/resume/all" , authMiddleware,getAllResumes);



module.exports = router;