const client = require('../databases/client');

const DB_NAME = process.env.DB_NAME;
const database = client.db(DB_NAME);

exports.getProfile = async () => {
    try {
        const collection = database.collection("profile");
        const query = { name: "Andika Sultanrafli" };
        const profile = await collection.findOne(query);

        return profile;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getSkills = async () => {
    try {
        const collection = database.collection("skills");
        const skills = collection.find().toArray();

        return skills;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getExperiences = async () => {
    try {
        const collection = database.collection("experiences");
        const experiences = collection.find().toArray();

        return experiences;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getEducation = async () => {
    try {
        const collection = database.collection("educations");
        const education = await collection.find().toArray();

        return education;
    } catch (error) {
        throw new Error(error);
    }
}