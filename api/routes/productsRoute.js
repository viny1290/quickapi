const {Router} = require('express');
const ProductsController = require('../controlles/ProductsController');

const router = Router();

router.get('/products', ProductsController.pegaTodosOsProducts);
router.get('/products/:id', ProductsController.pegaUmProducts);
router.post('/products', ProductsController.criaProducts);
router.put('/products/:id', ProductsController.atualizaProducts);
router.delete('/products/:id', ProductsController.apagaProducts);

module.exports = router;