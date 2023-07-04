const express = require('express');
const app = express();

require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || '3000';

const routes = require('./src/routes/index.route');

function main() {
    app.use(cors({
        origin: 'https://andikas.pages.dev'
    }));
    // app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(routes);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}


main();