const {Router} = require('express');
const RequestsController = require('../controlles/RequestsController');

const router = Router();

router.get('/requests', RequestsController.pegaTodosOsRequests);

module.exports = router;