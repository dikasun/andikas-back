const { getProfile, getSkills, getExperiences, getEducation } = require('../services/profile.service');

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

exports.getSkills = async (_, res) => {
    try {
        let result = await getSkills();
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

exports.getExperiences = async (_, res) => {
    try {
        let result = await getExperiences();
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

exports.getEducation = async (_, res) => {
    try {
        let result = await getEducation();
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