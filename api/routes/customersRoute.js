const {Router} = require('express');
const CustomersController = require('../controlles/CustomersController');
const verifyToken = require('../middleware/verifyToken');

const router = Router();

router.get('/customers', verifyToken, CustomersController.pegaTodosOsCustomers);
router.get('/customers/:id', verifyToken, CustomersController.pegaUmCustomers);
router.get('/customers/email/:email', verifyToken, CustomersController.pegaUmCustomersEmail);
router.post('/customers', verifyToken, CustomersController.criaCustomer);
router.put('/customers/:id', verifyToken, CustomersController.atualizaCustomer);
router.delete('/customers/:id', verifyToken, CustomersController.apagaCustomer);

module.exports = router;