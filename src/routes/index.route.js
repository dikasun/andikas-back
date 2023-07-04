const router = require('express').Router();

const profileRouter = require('../routes/profile.route');

router.use(profileRouter);
router.use((req,res) => {
    res.status(404).send({
        message: `There is no route for ${req.url}`
    })
});

module.exports = router;