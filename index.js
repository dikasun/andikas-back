const express = require('express');
const app = express();

require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || '3000';

const client = require('./src/databases/client');
const routes = require('./src/routes/index.route');

function runApp() {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/andikas', routes);

    client.connect().then((_) => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
}


runApp();