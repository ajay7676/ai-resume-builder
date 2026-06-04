const express = require("express");
const {signup, login, getProfile} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { createResume, getAllResumes, updatePersonalInfo, getResumeById, updateSummary } = require("../controllers/resumeController");

const router = express.Router();

router.post("/signup" , signup);
router.post("/login", login);
router.get("/profile",authMiddleware,getProfile);
router.post("/resume/create" , authMiddleware,createResume);
router.get("/resume/all" , authMiddleware,getAllResumes);
router.get("/resume/:resumeId" , authMiddleware,getResumeById);
router.put("/resume/:resumeId/personal-info" , authMiddleware,updatePersonalInfo);
router.put("/resume/:resumeId/summary" , authMiddleware,updateSummary);



module.exports = router;