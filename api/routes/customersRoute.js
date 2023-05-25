const {Router} = require('express');
const CustomersController = require('../controlles/CustomersController');

const router = Router();

router.get('/customers', CustomersController.pegaTodosOsCustomers);
router.get('/customers/:id', CustomersController.pegaUmCustomers);
router.get('/customers/email/:id', CustomersController.pegaUmCustomersEmail);
router.post('/customers', CustomersController.criaCustomer);
router.put('/customers/:id', CustomersController.atualizaCustomer);
router.delete('/customers/:id', CustomersController.apagaCustomer);

module.exports = router;