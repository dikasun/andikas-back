const { getCertifications, getProjects } = require('../services/porto.service');

exports.getCertifications = async (_, res) => {
    try {
        let result = await getCertifications();
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

exports.getProjects = async (_, res) => {
    try {
        let result = await getProjects();
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