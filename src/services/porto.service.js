const client = require('../databases/client');

const DB_NAME = process.env.DB_NAME;
const database = client.db(DB_NAME);

exports.getCertifications = async () => {
    try {
        const collection = database.collection("certifications");
        const options = {
            sort: { id: 1 },
        };
        const certifications = collection.find({}, options);

        return certifications;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getProjects = async () => {
    try {
        const collection = database.collection("projects");
        const options = {
            sort: { id: 1 },
        };
        const projects = collection.find({}, options);

        return projects;
    } catch (error) {
        throw new Error(error);
    }
}