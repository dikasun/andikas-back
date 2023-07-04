const client = require('../databases/client');

const dbName = 'andikas';
const database = client.db(dbName);

exports.getProfile = async () => {
    try {
        await client.connect();

        const profiles = database.collection("profile");
        const query = { name: "Andika Sultanrafli" };
        const profile = await profiles.findOne(query);

        return profile;
    } catch (error) {
        throw new Error(error);
    } finally {
        await client.close();
    }
}