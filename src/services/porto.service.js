const client = require('../databases/client');

const DB_NAME = process.env.DB_NAME;
const database = client.db(DB_NAME);

exports.getCertifications = async () => {
    try {
        const collection = database.collection("certifications");
        const certifications = collection.find().toArray();

        return certifications;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getProjects = async () => {
    try {
        const collection = database.collection("projects");
        const projects = collection.find().toArray();

        return projects;
    } catch (error) {
        throw new Error(error);
    }
}