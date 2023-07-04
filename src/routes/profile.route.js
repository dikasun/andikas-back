const router = require('express').Router();
const { getProfile, getSkills, getExperiences, getEducation } = require('../controllers/profile.controller');

router.get('/profile', getProfile);
router.get('/skills', getSkills);
router.get('/exp', getExperiences);
router.get('/edu', getEducation);

module.exports = router;