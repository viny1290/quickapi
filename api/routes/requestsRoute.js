const {Router} = require('express');
const RequestsController = require('../controlles/RequestsController');

const router = Router();

router.get('/requests', RequestsController.pegaTodosOsRequests);
router.get('/requests/:id', RequestsController.pegaUmRequests);
router.post('/requests', RequestsController.criaRequests);
router.put('/requests/:id', RequestsController.atualizaRequests);
router.delete('/requests/:id', RequestsController.apagaRequests);

module.exports = router;