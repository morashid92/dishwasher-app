const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/dishwashers', (req, res) => {
    const options = {
        url: 'https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher%20&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI'
    };
    axios(options)
        .then(response => res.send(response.data));
});

app.listen(3001, () => {
        console.log('Express server is running on localhost:3001')
    }
);
