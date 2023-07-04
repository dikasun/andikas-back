const router = require('express').Router();
const { getCertifications, getProjects } = require('../controllers/porto.controller');

router.get('/certifs', getCertifications);
router.get('/projects', getProjects);

module.exports = router;