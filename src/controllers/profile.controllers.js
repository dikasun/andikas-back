const { getProfile } = require('../services/profile.services');

exports.getProfile = async (_, res) => {
    try {
        let result = await getProfile();
        res.send({
            statusC0de: 200,
            message: "Success",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: error.message,
            data: null,
        })
    }
}