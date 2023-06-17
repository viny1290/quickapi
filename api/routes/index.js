const bodyParser = require('body-parser');
const products = require('./productsRoute');
const customers = require('./customersRoute');
const requests = require('./requestsRoute');
const configs = require('./configsRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(products);
    app.use(customers);
    app.use(requests);
    app.use(configs);
}