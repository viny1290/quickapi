const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const products = require('./productsRoute');
const customers = require('./customersRoute');
const requests = require('./requestsRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
    app.use(products);
    app.use(customers);
    app.use(requests);
}