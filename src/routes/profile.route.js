const router = require('express').Router();
const { getProfile } = require('../controllers/profile.controllers');

router.get('/profile', getProfile);

module.exports = router;