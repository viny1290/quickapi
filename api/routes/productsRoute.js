const {Router} = require('express');
const ProductsController = require('../controlles/ProductsController');
const verifyToken = require('../middleware/verifyToken');

const router = Router();

router.get('/products', ProductsController.pegaTodosOsProducts);
router.get('/products/:id', ProductsController.pegaUmProducts);
router.post('/products', verifyToken, ProductsController.criaProducts);
router.put('/products/:id', verifyToken, ProductsController.atualizaProducts);
router.delete('/products/:id', verifyToken, ProductsController.apagaProducts);

module.exports = router;