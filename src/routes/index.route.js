const router = require('express').Router();

const profileRouter = require('../routes/profile.route');
const portoRouter = require('../routes/porto.route');

router.use(profileRouter);
router.use('/porto', portoRouter);
router.use((req,res) => {
    res.status(404).send({
        message: `There is no route for ${req.url}`
    })
});

module.exports = router;