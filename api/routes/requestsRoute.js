const {Router} = require('express');
const RequestsController = require('../controlles/RequestsController');
const verifyToken = require('../middleware/verifyToken');

const router = Router();

router.get('/requests', RequestsController.pegaTodosOsRequests);
router.get('/requests/:id', RequestsController.pegaUmRequests);
router.post('/requests', verifyToken, RequestsController.criaRequests);
router.put('/requests/:id', verifyToken, RequestsController.atualizaRequests);
router.delete('/requests/:id', verifyToken, RequestsController.apagaRequests);

module.exports = router;