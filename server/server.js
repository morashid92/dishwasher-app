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
        .then(response => {
            const firstTwentyItems = response.data.products.slice(0, 20);
            res.send(firstTwentyItems)
        });
});

app.get('/dishwasher/:id', (req, res) => {
    const options = {
        url: `https://api.johnlewis.com/mobile-apps/api/v1/products/${req.params.id}`
    };
    axios(options)
        .then(response => {
            const { title, price, details, displaySpecialOffer, additionalServices: { includedServices }, code } = response.data;
            res.send({
                title,
                altText: response.data.media.images.altText,
                urls: response.data.media.images.urls,
                price: price.now,
                productInformation: details.productInformation,
                displaySpecialOffer,
                includedService: includedServices[0],
                attributes: details.features[0].attributes,
                code
            })
        });
});

app.listen(3001, () => {
        console.log('Express server is running on localhost:3001')
    }
);
